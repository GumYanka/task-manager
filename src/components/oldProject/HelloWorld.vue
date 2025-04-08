<template>
  <div class="container row border-2 border-slate-950 w-2/3 p-10 bg-white">
    <div>
      <div class="mt-6 flex-col justify-items-start space-y-3">
        <h1 class="font-bold text-3xl">План по вивченню Vue 3</h1>
        <h1>
          {{ activeItem.text }}
        </h1>
      </div>

      <div v-if="!isRestarted" class="mt-6 grid grid-cols-5">
        <div
          v-for="(block, index) in blocks"
          :key="index"
          class="flex items-center space-x-3"
        >
          <span
            class="rounded-full bg-zinc-400 px-4 py-2"
            :class="{
              'bg-green-400': index === activeIndex,
              'bg-green-200': index < activeIndex,
              'bg-white': index > activeIndex,
            }"
            @click.prevent="activeIndex = index"
            >{{ block.spanNumber }}</span
          >
          <h2 class="justify-center">{{ block.span }}</h2>
        </div>
      </div>

      <div class="mt-6 flex items-center space-x-3">
        <button
          v-if="!isRestarted"
          class="bg-zinc-200 py-2 px-6 rounded-full"
          @click.prevent="prevHandle"
          :disabled="activeIndex === 0"
        >
          НАЗАД
        </button>
        <button
          v-if="!isRestarted && activeIndex + 1 === blocks.length"
          class="bg-green-500 py-2 px-6 rounded-full"
          @click.prevent="restartHandle"
        >
          {{ buttonTitle }}
        </button>
        <button
          v-else-if="!isRestarted"
          class="bg-green-500 py-2 px-6 rounded-full"
          @click.prevent="nextHandle"
        >
          ВПЕРЕД
        </button>
        <button
          v-if="isRestarted"
          class="bg-blue-500 py-2 px-6 rounded-full"
          @click.prevent="reset"
        >
          ПОЧАТИ ЗНОВУ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueCard",
  data() {
    return {
      blocks: [
        {
          text: "В блоці ви познайомитеся з основами Vue js на практиці. На протязі цього блока ми напишемо реактивну програму.",
          span: "Основи",
          spanNumber: "1",
        },
        {
          text: "В блоці ви познайомитеся з компонентами Vue js на практиці. На протязі цього блока ми напишемо реактивну компоненти.",
          span: "Компоненти",
          spanNumber: "2",
        },
        {
          text: "В блоці ви познайомитеся з роутами Vue js на практиці.",
          span: "Роутер",
          spanNumber: "3",
        },
        {
          text: "В блоці ви познайомитеся з Vuex Vue js на практиці. На протязі цього блока ми напишемо власний стор.",
          span: "Vuex",
          spanNumber: "4",
        },
        {
          text: "В блоці ви познайомитеся з Composition Vue js на практиці.",
          span: "Composition",
          spanNumber: "5",
        },
      ],
      activeIndex: 0,
      buttonTitle: "ЗАКІНЧИТИ",
      isRestarted: false,
    };
  },
  computed: {
    activeItem() {
      return this.blocks[this.activeIndex];
    },
  },
  methods: {
    nextHandle() {
      if (this.activeIndex < this.blocks.length - 1) {
        this.activeIndex++;
      }
    },
    prevHandle() {
      if (this.activeIndex > 0) {
        this.activeIndex--;
      }
    },
    restartHandle() {
      this.isRestarted = true;
    },
    reset() {
      this.isRestarted = false;
      this.activeIndex = 0;
      this.buttonTitle = "ЗАКІНЧИТИ";
    },
  },
};
</script>

<style scoped></style>
