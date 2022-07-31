<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <PuzzleIcon class="h-10 w-10 text-gray-800 mx-auto" />
          <form @submit="create">
            <div class="grid grid-cols-1 gap-6">
              <label class="block">
                <span class="text-gray-700 font-semibold">Title</span>
                <input
                  type="text"
                  class="form-input relative"
                  :class="
                    validTitle === false &&
                    'border-red-300 ring ring-red-200 ring-opacity-50'
                  "
                  v-model="todo.title"
                />
                <p
                  v-if="validTitle === false"
                  class="absolute text-sm text-red-500 font-semibold pt-1"
                >
                  * Required field
                </p>
              </label>
              <label class="block">
                <span class="text-gray-700 font-semibold">Description</span>
                <textarea
                  class="form-input"
                  rows="3"
                  v-model="todo.description"
                ></textarea>
              </label>
            </div>

            <div class="flex justify-between mt-3">
              <button type="button" class="btn btn-cancel" @click="cancel">
                Cancel
              </button>
              <button type="submit" class="btn btn-create">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import TodoService from "@/services/TodoService";
import { PuzzleIcon } from "@heroicons/vue/solid";

export default {
  props: {
    show: Boolean,
    pullData: Function,
  },
  components: {
    PuzzleIcon,
  },
  data() {
    return {
      todo: {
        title: "",
        description: "",
      },
      validTitle: null,
    };
  },
  methods: {
    async create() {
      //Post data
      try {
        //input validation
        if (this.todo.title === "") {
          this.validTitle = false;
          return;
        }

        const response = await TodoService.postTodo(this.todo);
        if (response.status == 200) {
          alert("Your todo is added!");
          this.pullData();
          this.$emit("close");
        }
        this.clearForm();
      } catch (error) {
        console.log(error);
      }
    },
    cancel() {
      this.clearForm();
      this.$emit("close");
    },
    clearForm() {
      this.todo.title = "";
      this.todo.description = "";
    },
  },
  watch: {
    "todo.title"() {
      this.validTitle = null;
    },
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
