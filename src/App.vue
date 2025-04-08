<template>
  <div class="bg-blue-900 min-h-min h-screen">
    <!-- <nav class="bg-white">
      <div class="flex items-center justify-between px-10">
        <div href="/" class="space-x-3">
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap text-black"
            >Study</span
          >
        </div>
        <div class="" id="navbar-default">
          <ul class="font-medium flex flex-row p-4 mt-4">
            <li>
              <router-link
                to="/"
                class="block py-2 px-3 text-black rounded-sm link"
                >All task</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'newCard' }"
                class="block py-2 px-3 text-gray-900 rounded-sm link"
                >Create new</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav> -->

    <div class="justify-start items-start flex flex-col space-x-4 w-full pb-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px;
}

.link.active {
  color: rgb(23, 170, 1);
}
</style>
