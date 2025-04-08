<template>
  <div
    class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
  >
    <div class="p-6 mx-4 w-1/3 bg-white rounded-md shadow-xl">
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-2xl">{{ modalTitle }}</h3>
        <button @click.prevent="store.closeModal()">X</button>
      </div>
      <div class="flex items-center w-full">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { useTodoStore } from "../../store/todoStore";
import { ref } from "vue";
export default {
  setup() {
    const store = useTodoStore();
    const modalTitle = ref("Create new todo");

    return {
      store,
      modalTitle,
    };
  },
};
</script>

<style lang="scss" scoped></style>
