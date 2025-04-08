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

// export default {
//   namespaced: true,
//   state: {
//     tasks: [],
//     activeTask: null,
//   },
//   mutations: {
//     setTasks(state, tasks) {
//       state.tasks = tasks;
//     },
//     addNewTask(state, task) {
//       state.tasks.push(task);
//     },
//     taskInfo(state, task) {
//       state.activeTask = task;
//     },
//     updatedTask(state, updatedTask) {
//       const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
//       if (index !== -1) {
//         state.tasks[index] = updatedTask;
//       }
//     },
//   },
//   getters: {
//     activeTasks(state) {
//       return state.tasks.filter((task) => task.status === "Active");
//     },
//   },
//   actions: {
//     async fetchTasks({ commit }) {
//       try {
//         const tasks = await useTasks();
//         commit("setTasks", tasks);
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     },
//     async createNewTask({ commit }, task) {
//       try {
//         const newTask = await createTask(task);
//         if (newTask) {
//           commit("addNewTask", newTask);
//         }
//       } catch (error) {
//         console.error("Error", error);
//       }
//     },
//     async fetchTaskDetails({ commit }, task) {
//       try {
//         const selected = await taskDetails(task);
//         if (selected) {
//           commit("taskInfo", selected);
//         }
//       } catch (error) {
//         console.error("Error", error);
//       }
//     },
//     async updateStatus({ commit, dispatch }, values) {
//       try {
//         const updatedTask = await updateTask(values.task, values.status);
//         commit("updatedTask", updatedTask);
//         dispatch("fetchTaskDetails", values.task.id);
//       } catch (error) {
//         console.error("Error updating task:", error);
//       }
//     },
//   },
// };
