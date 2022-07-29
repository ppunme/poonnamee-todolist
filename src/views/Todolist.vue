<template>
  <div class="h-screen">
    <div>
      <button
        v-if="isLoggedIn"
        @click="signOut"
        class="rounded-full bg-gray-200 font-semibold text-gray-800 hover:bg-gray-300 absolute right-5 top-5 p-3"
      >
        <LogoutIcon class="h-6 w-6 block sm:hidden" /><span
          class="hidden sm:block"
          >Sign out</span
        >
      </button>
    </div>
    <div class="pt-10">
      <p class="text-2xl font-bold uppercase">To-do list</p>
      <div class="pt-4">
        <div v-if="show === false">401 Unauthorizes</div>

        <div
          v-if="isLoading"
          class="h-[calc(100vh_-_17rem)] sm:h-[calc(100vh_-_13rem)] flex items-center justify-center"
        >
          <BeatLoader color="#3b82f6" />
        </div>
        <!-- To-do list -->
        <div v-if="!isLoading">
          <div class="relative">
            <div
              class="overflow-y-auto h-[calc(100vh_-_17rem)] sm:h-[calc(100vh_-_13rem)] relative max-w-sm mx-auto bg-white flex flex-col"
            >
              <div v-if="show !== false">
                <div v-if="todos.length === 0">
                  <p>Empty press 'Create' for add new todo</p>
                </div>
              </div>
              <div v-for="(item, index) in todos" :key="index" class="mb-3">
                <div
                  class="relative gap-4 p-6 hover:bg-blue-100 border rounded-md h-24"
                >
                  <button
                    @click="toggleDelModal(item._id, index)"
                    class="absolute top-5 right-5"
                  >
                    <TrashIcon class="h-5 w-5 text-red-500" />
                  </button>
                  <div
                    class="flex flex-col text-start"
                    @click="editTodo(item._id)"
                  >
                    <strong
                      class="text-slate-900 font-medium dark:text-slate-200"
                      >{{ item.title }}</strong
                    >
                    <span
                      class="text-slate-500 font-medium dark:text-slate-400"
                      >{{ item.description }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Create button-->
      <button
        v-if="isLoggedIn"
        id="show-modal"
        @click="showModal = true"
        class="btn btn-create flex mx-auto mt-5 text-white shadow-lg shadow-gray-500/50"
      >
        <PlusIcon class="h-5 w-5 text-white mr-2" />Create
      </button>
    </div>

    <Teleport to="body">
      <!-- Create Modal -->
      <create-todo
        :show="showModal"
        :pullData="pullData"
        @close="showModal = false"
      >
        <template #header>
          <h3>custom header</h3>
        </template>
      </create-todo>

      <!-- Edit Modal -->
      <edit-todo
        :show="showEditModal"
        :todoId="todoId"
        :pullData="pullData"
        @close="showEditModal = false"
        v-if="todoId"
      >
        <template #header>
          <h3>custom header</h3>
        </template>
      </edit-todo>
    </Teleport>

    <!-- Delete Modal -->
    <transition name="fade">
      <div v-if="isModalVisible" class="flex justify-center">
        <div
          @click="toggleDelModal"
          class="absolute bg-black opacity-70 inset-0 z-0"
        ></div>
        <div
          class="p-3 mx-auto my-auto rounded-xl shadow-lg bg-white absolute top-20"
        >
          <div>
            <div class="text-center flex-auto justify-center leading-6">
              <h2 class="text-xl font-bold py-4">Are you sure?</h2>
              <p class="text-gray-800">
                Do you really want to delete this to-do entry?
              </p>
            </div>
            <div
              class="p-3 mt-2 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 md:block"
            >
              <button
                @click="toggleDelModal"
                class="btn btn-cancel w-full sm:w-1/3"
              >
                Close
              </button>
              <button
                @click="deleteTodo"
                class="btn bg-red-600 hover:bg-red-700 w-full sm:w-1/3"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import CreateTodo from "../components/CreateTodo.vue";
import EditTodo from "../components/EditTodo.vue";
import TodoService from "@/services/TodoService";
import { TrashIcon, LogoutIcon } from "@heroicons/vue/outline";
import { PlusIcon } from "@heroicons/vue/solid";
import BeatLoader from "vue-spinner/src/BeatLoader.vue";

export default {
  name: "todolist-comp",
  props: {
    isLoggedIn: Boolean,
    signOut: Function,
  },
  components: {
    CreateTodo,
    EditTodo,
    TrashIcon,
    PlusIcon,
    LogoutIcon,
    BeatLoader,
  },
  data() {
    return {
      todos: "",
      todoId: "",
      edit: false,
      showModal: false,
      showEditModal: false,
      isOpen: false,
      isLoading: null,
      deleteId: "",
      deleteIndex: null,
      show: null,
    };
  },
  methods: {
    async pullData() {
      try {
        this.isLoading = true;
        this.todos = (await TodoService.getTodos()).data;
        setTimeout(() => {
          this.isLoading = false;
        }, 750);
      } catch (err) {
        if (err) {
          this.show = false;
          this.isLoading = false;
        }
        console.log(err);
      }
    },
    editTodo(id) {
      this.showEditModal = true;
      this.todoId = id;
    },
    async deleteTodo() {
      this.todos.splice(this.deleteIndex, 1);
      await TodoService.deleteTodo(this.deleteId);
      this.toggleDelModal();
    },
    toggleDelModal(id, index) {
      this.isOpen = !this.isOpen;
      this.deleteId = id;
      this.deleteIndex = index;
    },
  },
  mounted() {
    this.pullData();
  },
  computed: {
    isModalVisible() {
      return this.isOpen;
    },
  },
};
</script>

<style></style>
