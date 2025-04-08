import { defineStore } from "pinia";
import { ref, computed, onMounted, reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, minLength } from "@vuelidate/validators";
import { addTodo, getTodos, updateCompleted } from "@/firebase/actions";

export const useTodoStore = defineStore("tasks", () => {
  const filter = ref("all");
  const showModal = ref(false);
  const todos = ref([]);

  onMounted(async () => {
    todos.value = await getTodos();
  });

  const filteredTodos = computed(() => {
    if (filter.value === "done")
      return todos.value.filter((todo) => todo.isCompleted);
    if (filter.value === "todo")
      return todos.value.filter((todo) => !todo.isCompleted);
    return todos.value;
  });

  async function toggleCompleted(todo) {
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
    await updateCompleted(updatedTodo);

    const index = todos.value.findIndex((t) => t.id === todo.id);
    if (index !== -1) {
      todos.value[index].isCompleted = updatedTodo.isCompleted;
    }
  }

  function addNewTodo() {
    v$.value.$validate();
    if (!v$.value.$error) {
      addTodo(todo).then((newTask) => {
        todos.value.push(newTask);
      });

      todo.name = "";
      todo.description = "";
      v$.value.$reset();
      showModal.value = false;
    }
  }

  function closeModal() {
    showModal.value = false;
  }

  const rules = computed(() => ({
    name: {
      required: helpers.withMessage("Name is required", required),
      minLength: helpers.withMessage(
        "Name must be at least 6 characters",
        minLength(6)
      ),
    },
    description: {
      required: helpers.withMessage("Description is required", required),
      minLength: helpers.withMessage(
        "Description must be at least 6 characters",
        minLength(6)
      ),
    },
  }));

  const todo = reactive({ name: "", description: "" });
  const v$ = useVuelidate(rules, todo);

  return {
    filter,
    showModal,
    todos,
    filteredTodos,
    toggleCompleted,
    addNewTodo,
    v$,
    todo,
    closeModal,
  };
});
