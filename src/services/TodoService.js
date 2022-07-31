import Api from "./Api";
import authHeader from "./AuthHeader";

export default {
  //Attached Token into the header and send a request for user content
  postTodo(todo) {
    return Api().post("todos", todo, { headers: authHeader() });
  },
  updateTodo(id, todo) {
    return Api().put(`todos/${id}`, todo, { headers: authHeader() });
  },
  deleteTodo(id) {
    return Api().delete(`todos/${id}`, { headers: authHeader() });
  },
  getTodos() {
    return Api().get("todos", { headers: authHeader() });
  },
  getTodoById(todoId) {
    return Api().get(`todos/${todoId}`, { headers: authHeader() });
  },
  deleteBook(bookId) {
    return Api().delete(`books/${bookId}`);
  },
};
