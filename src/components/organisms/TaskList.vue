<template>
  <div :class="$style.content">
    <template v-if="!isEmpty">
      <Task
        v-for="task in listTasks"
        :key="task.id"
        :taskChecked="task.isChecked"
        :taskId="task.id"
        :taskText="task.text"
      />
    </template>
    <template v-else>
      <h2>добавьте задачи к выполнению!!!</h2>
    </template>
  </div>
</template>

<script>
import Task from "../molecules/Task";
import { mapGetters } from "vuex";
export default {
  components: {
    Task,
  },
  computed: {
    ...mapGetters(["listTasks"]),
    isEmpty() {
      return !this.listTasks.length;
    },
  },
};
</script>

<style lang="scss" module>
@import "src/assets/style.scss";
.content {
  margin: 0 0 2rem 0;
  & h2 {
    text-align: center;
    color: $color-text;
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
    padding: 1rem 0;
  }
}
</style>
