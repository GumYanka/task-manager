<template>
  <form
    @submit.prevent="saveHandle"
    class="flex-col card bg-white p-5 mt-5 rounded-2xl"
  >
    <div class="flex-col flex justify-center space-y-1">
      <label class="flex justify-start">Тип блока</label>
      <select
        v-model="blockType"
        class="flex border-2 p-1 border-neutral-900 w-56"
      >
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </select>
    </div>
    <div class="flex-col flex justify-start space-y-1 mt-5">
      <label class="flex justify-start">Значення</label>
      <textarea
        v-model="textArea"
        class="flex border-2 p-1 border-neutral-900 w-56"
      ></textarea>
    </div>
    <button
      type="submit"
      class="mt-5 flex items-center justify-center rounded-full border border-transparent bg-green-500 px-8 py-2 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
    >
      Добавити
    </button>
  </form>
</template>

<script>
export default {
  name: "FormApp",
  data() {
    return {
      options: [
        { text: "Заголовок", value: 1 },
        { text: "Аватар", value: 2 },
        { text: "Підзаголовок", value: 3 },
        { text: "Текст", value: 4 },
      ],
      blockType: null,
      textArea: null,
    };
  },
  emits: ["clickEmit"],
  methods: {
    saveHandle() {
      const newEntry = {
        blockType: this.blockType,
        textArea: this.textArea,
      };
      this.$emit("clickEmit", newEntry);
      this.textArea = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
