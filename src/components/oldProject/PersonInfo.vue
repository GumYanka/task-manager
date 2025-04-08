<template>
  <div
    v-if="personInfo && Object.keys(personInfo).length > 0"
    class="flex content-start bg-white p-5 mt-5 rounded-2xl flex-col space-y-3"
  >
    <h1 v-if="personInfo.title" class="font-bold self-start text-3xl">
      {{ personInfo.title }}
    </h1>
    <img
      v-if="personInfo.avatar"
      class="flex self-center rounded-full w-40 h-40"
      :src="personInfo.avatar"
    />
    <div v-for="(block, index) in personInfo.blocks" :key="index">
      <h3 v-if="block.type === 'subTitle'" class="font-bold text-xl">
        {{ block.value }}
      </h3>
      <p v-if="block.type === 'text'">
        {{ block.value }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonInfo",
  props: ["personInfo"],
};
</script>

<style lang="scss" scoped></style>
