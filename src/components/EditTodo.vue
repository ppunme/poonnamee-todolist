<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <PuzzleIcon class="h-10 w-10 text-gray-800 mx-auto" />
          <form @submit="updateTodo">
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
              <button type="submit" class="btn btn-create">Edit</button>
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
    todoId: String,
    pullData: Function,
  },
  components: {
    PuzzleIcon,
  },
  data() {
    return {
      todo: {},
    };
  },
  methods: {
    async updateTodo() {
      //Update data
      try {
        const response = await TodoService.updateTodo(this.todo._id, this.todo);
        if (response.status == 200) {
          alert("Your todo is updated!");
          this.pullData();
          this.$emit("close");
        }
      } catch (error) {
        console.log(error);
      }
    },
    clearTodo() {
      this.$emit("close");
    },
  },
  watch: {
    async todoId() {
      this.todo = (await TodoService.getTodoById(this.todoId)).data;
    },
  },
  async mounted() {
    this.todo = (await TodoService.getTodoById(this.todoId)).data;
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
