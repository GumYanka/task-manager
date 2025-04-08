<template>
  <div class="flex flex-col w-full justify-center items-start px-36">
    <div class="flex flex-col pl-5 w-full">
      <h2 class="flex justify-start text-3xl text-white mt-8">Task manager</h2>
      <h1 class="text-white mt-4">Filter by state</h1>
      <div class="flex flex-row mt-2 w-full justify-between">
        <div class="flex flex-row mt-2 space-x-3 justify-start">
          <button
            class="bg-white rounded-lg p-1"
            @click="store.filter = 'done'"
          >
            Done
          </button>
          <button
            class="bg-white rounded-lg p-1"
            @click="store.filter = 'todo'"
          >
            To-Do
          </button>
          <button
            class="border-white border-2 text-white rounded-lg p-1"
            @click="store.filter = 'all'"
          >
            Clear X
          </button>
        </div>

        <div class="flex flex-row mt-2 space-x-3 justify-end">
          <button
            @click.prevent="store.showModal = true"
            class="text-blue-700 bg-white p-2 rounded-xl"
          >
            + Add new todo
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="store.filteredTodos.length > 0"
      class="flex flex-row flex-wrap w-full justify-start space-x-2"
    >
      <div
        v-for="item in store.filteredTodos"
        :key="item.id"
        class="flex flex-col card w-1/5 bg-white p-5 mt-5 rounded-2xl"
      >
        <h3 class="text-xl font-semibold">{{ item.name }}</h3>
        <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
        <h3>{{ item.description }}</h3>
        <div class="flex-row flex justify-end mt-5 items-center space-x-4">
          <input
            class="peer h-5 w-5 cursor-pointer appearance-none rounded-full shadow border-2 border-slate-600 checked:bg-slate-800 checked:border-slate-800"
            type="checkbox"
            @change="store.toggleCompleted(item)"
            :checked="item.isCompleted"
          />
          <label>{{ item.isCompleted == true ? "Done" : "To-Do" }}</label>
        </div>
      </div>
    </div>
    <p v-else class="flex text-white text-xl mt-12">No tasks</p>

    <modal-window-vue
      modalTitle="Create new task"
      @close="store.showModal = false"
      v-if="store.showModal"
      ><new-card></new-card>
    </modal-window-vue>
  </div>
</template>

<script>
import { useTodoStore } from "../../store/todoStore";
import NewCard from "./NewCard.vue";
import ModalWindowVue from "../components/ModalWindow.vue";

export default {
  name: "FormApp",
  components: { NewCard, ModalWindowVue },
  setup() {
    const store = useTodoStore();

    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
