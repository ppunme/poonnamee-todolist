<template>
  <div>
    <!-- Sign out button -->
    <button
      v-if="isLoggedIn"
      @click="signOut"
      class="absolute right-3 top-3 sm:right-5 sm:top-5 p-3 rounded-full font-semibold text-gray-800 bg-white/50 hover:bg-white"
    >
      <LogoutIcon class="h-6 w-6 block sm:hidden" /><span
        class="hidden sm:block"
        >Sign out</span
      >
    </button>

    <div>
      <p class="text-center text-2xl font-bold uppercase">To-do list</p>

      <div class="pt-4">
        <!-- If user does not login -->
        <div v-if="show === false">401 Unauthorizes</div>

        <!-- Loading -->
        <div
          v-if="isLoading"
          class="h-[calc(100vh_-_16rem)] sm:h-[calc(100vh_-_13rem)] min-h-[20rem] flex items-center justify-center pt-2"
        >
          <BeatLoader color="#3b82f6" />
        </div>

        <!-- To-do list -->
        <div v-if="!isLoading">
          <div
            class="relative overflow-y-auto h-[calc(100vh_-_16rem)] sm:h-[calc(100vh_-_13rem)] min-h-[20rem] max-w-sm mx-auto flex flex-col pt-2"
          >
            <div v-if="show !== false">
              <div v-if="todos.length === 0">
                <p>Empty press 'Create' for add new todo</p>
              </div>
            </div>
            <div v-for="(item, index) in todos" :key="index" class="pb-2">
              <div
                class="relative bg-white border rounded-lg shadow-sm gap-4 mx-auto h-24 max-w-[90%] hover:ring-2 hover:ring-blue-400 hover:ring-offset-2"
              >
                <!-- Delete button -->
                <button
                  @click="toggleDeleteModal(item._id, index)"
                  class="absolute top-3 right-3"
                >
                  <TrashIcon class="h-5 w-5 text-red-500" />
                </button>

                <div class="flex flex-col" @click="editTodo(item._id)">
                  <strong
                    class="ml-5 mt-5 select-none text-slate-900 capitalize font-medium"
                    >{{ item.title }}</strong
                  >
                  <span class="ml-5 select-none text-slate-500 font-medium">{{
                    item.description
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Delete Modal -->
      <Transition name="modal">
        <div v-if="showDeleteModal" class="modal-mask">
          <div class="absolute top-20 left-0 right-0 md:h-full">
            <div
              class="relative p-6 max-w-[90%] sm:max-w-[25rem] h-full md:h-auto mx-auto bg-white rounded-lg shadow"
            >
              <button
                @click="showDeleteModal = false"
                type="button"
                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              >
                <XIcon class="h-5 w-5" />
              </button>
              <div class="text-center">
                <p class="text-xl font-bold py-4">Are you sure?</p>
                <p class="pb-5 text-md text-gray-500 font-medium">
                  Do you really want to delete this to-do entry?
                </p>
                <button
                  @click="showDeleteModal = false"
                  type="button"
                  class="btn text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 border border-gray-200 px-5 py-2.5 hover:text-gray-900 mr-2"
                >
                  Cancel
                </button>
                <button
                  @click="deleteTodo"
                  type="button"
                  class="btn bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 inline-flex items-center px-5 py-2.5 text-center"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      <!-- Create button-->
      <button
        v-if="isLoggedIn"
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
        v-if="todoId"
        :show="showEditModal"
        :todoId="todoId"
        :pullData="pullData"
        @close="showEditModal = false"
      >
        <template #header>
          <h3>custom header</h3>
        </template>
      </edit-todo>
    </Teleport>
  </div>
</template>

<script>
import CreateTodo from "../components/CreateTodo.vue";
import EditTodo from "../components/EditTodo.vue";
import TodoService from "@/services/TodoService";
import { TrashIcon, LogoutIcon } from "@heroicons/vue/outline";
import { PlusIcon, XIcon } from "@heroicons/vue/solid";
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
    XIcon,
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
      showDeleteModal: false,
      deleteIndex: null,
      isLoading: null,
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
        }, 400);
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
      await TodoService.deleteTodo(this.todoId);
      this.showDeleteModal = false;
    },
    toggleDeleteModal(id, index) {
      this.todoId = id;
      this.deleteIndex = index;
      this.showDeleteModal = true;
    },
  },
  mounted() {
    this.pullData();
  },
};
</script>

<style>
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
