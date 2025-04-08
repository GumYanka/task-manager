import { addTodo, getTodos, updateCompleted } from "@/firebase/actions";

export default {
  namespaced: true,
  state: {
    todos: [],
  },
  mutations: {
    addNewTodo(state, todo) {
      state.todos.push(todo);
    },
    getTodos(state, todos) {
      state.todos = todos;
    },
    updatedTodo(state, updatedTodo) {
      const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
      if (index !== -1) {
        state.todos[index] = updatedTodo;
      }
    },
  },
  actions: {
    async createNewTask({ commit }, todo) {
      const newTodo = await addTodo(todo);
      commit("addNewTodo", newTodo);
    },
    async fetchTodos({ commit }) {
      const allTodos = await getTodos();
      commit("getTodos", allTodos);
      return allTodos;
    },
    async updateTodoCompleted({ commit }, todo) {
      await updateCompleted(todo);
      commit("updatedTodo", todo);
    },
  },
  getters: {},
};
