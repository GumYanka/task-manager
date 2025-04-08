<template>
  <div class="flex flex-col items-center w-full justify-center">
    <div
      v-if="activeTask"
      class="flex-col card w-1/2 bg-white p-5 mt-5 rounded-2xl"
    >
      <div class="flex-row flex justify-between space-y-1">
        <h3 class="flex text-xl font-semibold justify-start">
          {{ activeTask.title }}
        </h3>
      </div>
      <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
      <div class="flex-col flex justify-start space-y-4 mt-2">
        <div class="flex flex-row space-x-4">
          <strong>Status: </strong>
          <status-button :status="activeTask.status" />
        </div>
        <h3>
          <strong>Deadline: </strong>
          {{ formatDate(activeTask.date) }}
        </h3>
        <h3>
          <strong>Description: </strong>
          {{ activeTask.description }}
        </h3>
        <div class="flex fle-row space-x-5">
          <button
            @click.prevent="updateStatusTask(activeTask, 'Pending')"
            class="mt-5 w-1/4 flex items-center justify-center rounded-full border border-green-700 bg-white px-8 py-2 text-base font-medium text-green-700 hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:text-green-500"
          >
            Start Work
          </button>
          <button
            @click.prevent="updateStatusTask(activeTask, 'Ended')"
            class="mt-5 w-1/4 flex items-center justify-center rounded-full border border-transparent bg-green-500 px-8 py-2 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            End
          </button>
          <button
            @click.prevent="updateStatusTask(activeTask, 'Closed')"
            class="mt-5 w-1/4 flex items-center justify-center rounded-full border border-transparent bg-red-500 px-8 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    <div v-else>No task</div>
  </div>
</template>

<script>
import StatusButton from "../components/StatusButton.vue";
import { useStore } from "vuex";
import { parseDate } from "../utils";
import { computed, watch, ref } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "TaskInfo",
  components: { StatusButton },
  setup(props) {
    const store = useStore();
    const route = useRoute();

    const id = ref(props.id || route.params.id);

    const fetchTaskDetails = (newId) => {
      if (newId) store.dispatch("taskModule/fetchTaskDetails", newId);
    };

    const updateStatus = (task, newStatus) => {
      const updatedTask = { task, status: newStatus };
      store.dispatch("taskModule/updateStatus", updatedTask);
    };

    function formatDate(firebaseTimestamp) {
      const parsedDate = parseDate(firebaseTimestamp);
      if (!parsedDate) return "";

      const options = { year: "numeric", month: "long", day: "numeric" };
      return parsedDate.toLocaleDateString("en-US", options);
    }

    const activeTask = computed(() => store.state.taskModule.activeTask);

    watch(
      () => id.value,
      (newId) => {
        fetchTaskDetails(newId);
      },
      { immediate: true }
    );

    return {
      fetchTaskDetails,
      updateStatusTask: updateStatus,
      formatDate,
      activeTask,
    };
  },
  //   props: ["id"],
  //   components: { StatusButton },
  //   methods: {
  //     ...mapActions("taskModule", ["fetchTaskDetails", "updateStatus"]),
  //     updateStatusTask(task, newStatus) {
  //       const updatedTask = { task, status: newStatus };
  //       this.updateStatus(updatedTask);
  //     },
  //     formatDate(firebaseTimestamp) {
  //       const parsedDate = parseDate(firebaseTimestamp);
  //       if (!parsedDate) return "";

  //       const options = { year: "numeric", month: "long", day: "numeric" };
  //       return parsedDate.toLocaleDateString("en-US", options);
  //     },
  //   },
  //   computed: {
  //     ...mapState("taskModule", ["activeTask"]),
  //   },
  //   watch: {
  //     id: {
  //       handler(newId) {
  //         if (newId) this.fetchTaskDetails(newId);
  //       },
  //       immediate: true,
  //     },
  //   },
};
</script>

<style lang="scss" scoped></style>
