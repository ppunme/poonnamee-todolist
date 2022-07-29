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
                <input type="text" class="form-input" v-model="todo.title" />
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
              <button
                type="button"
                class="btn btn-cancel"
                @click="$emit('close')"
              >
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
    };
  },
  methods: {
    async create() {
      //Post data
      try {
        console.log(this.todo);
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
    clearForm() {
      this.todo.title = "";
      this.todo.description = "";
    },
  },
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

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
