<template>
  <form
    @submit.prevent="store.addNewTodo"
    class="flex-col card bg-white p-5 mt-5 rounded-2xl w-full"
  >
    <div class="flex-col w-full flex justify-center space-y-2 mt-5">
      <div class="w-full">
        <label for="title" class="flex justify-start">Name</label>
        <input
          id="title"
          v-model="store.todo.name"
          class="flex border-2 p-1 border-neutral-900 w-full"
          :class="{
            'border-red-600': store.v$.name.$error,
            'border-neutral-900': !store.v$.name.$error,
          }"
        />
        <div v-if="store.v$.name.$error">
          <p
            class="text-red-500 text-xs font-thin"
            v-for="error of store.v$.name.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
        </div>
      </div>

      <div class="w-full">
        <label for="description" class="flex justify-start">Description</label>
        <textarea
          id="description"
          v-model="store.todo.description"
          class="flex border-2 p-1 border-neutral-900 w-full"
          :class="{
            'text-fields-error': store.v$.description.$error,
            'text-fields': !store.v$.description.$error,
          }"
        ></textarea>
        <div v-if="store.v$.description.$error">
          <p
            class="text-red-500 text-xs font-thin"
            v-for="error of store.v$.description.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
        </div>
      </div>
    </div>

    <button
      type="submit"
      class="mt-5 flex items-center justify-center rounded-full border border-transparent bg-blue-500 px-8 py-2 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      Add
    </button>
  </form>
</template>

<script>
import { useTodoStore } from "../../store/todoStore";

export default {
  props: ["showModal"],
  setup() {
    const store = useTodoStore();

    return { store };
  },
  // data() {
  //   return {
  //     v$: useVuelidate(),
  //     values: {
  //       name: "",
  //       description: "",
  //     },
  //   };
  // },
  // methods: {
  //   ...mapActions("taskModule", ["createNewTask"]),
  //   async saveHandle() {
  //     const isFormCorrect = await this.v$.$validate();
  //     if (!isFormCorrect) {
  //       return;
  //     } else {
  //       alert("Form successfully submitted");
  //       const currentDate = new Date();
  //       const taskDate = new Date(this.values.date);
  //       if (taskDate < currentDate) {
  //         this.values.status = "Closed";
  //       } else {
  //         this.values.status = "Active";
  //       }
  //       if (this.values.date) {
  //         this.values.date = Timestamp.fromDate(new Date(this.values.date));
  //       }
  //       this.createNewTask(this.values).then(() => {
  //         this.values = {
  //           title: "",
  //           date: null,
  //           status: "Active",
  //           description: "",
  //         };
  //         this.$router.push("/");
  //       });
  //     }
  //   },
  // },
  // validations() {
  //   return {
  //     values: {
  //       title: {
  //         required: helpers.withMessage("Title is required", required),
  //         minLength: helpers.withMessage(
  //           "Title must be at least 6 characters long",
  //           minLength(6)
  //         ),
  //       },
  //       date: {
  //         required: helpers.withMessage("Date is required", required),
  //       },
  //       description: {
  //         required: helpers.withMessage("Description is required", required),
  //         minLength: helpers.withMessage(
  //           "Description must be at least 6 characters long",
  //           minLength(6)
  //         ),
  //       },
  //     },
  //   };
  // },
};
</script>

<style scoped>
.text-fields-error {
  border-color: red;
}
.text-fields {
  border-color: initial;
}
</style>
