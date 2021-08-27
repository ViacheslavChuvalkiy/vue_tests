<template>
  <div :class="$style.newTask">
    <input
      type="text"
      placeholder="Add a new task"
      v-model="value"
      @keypress.enter="addTask"
    />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data: () => ({
    value: "",
  }),
  methods: {
    ...mapMutations(["addNewTask", "saveDataLocalStorage"]),
    addTask() {
      this.addNewTask(this.value);
      this.value = "";
      this.saveDataLocalStorage();
    },
  },
};
</script>

<style lang="scss" module>
@import "src/assets/style.scss";
.newTask {
  margin: 0 2rem;
  text-align: center;
  background: $color_bg_light_brown;
  border-radius: 10px;
  border: 2px dashed $color_bg_brown;
  & input {
    width: 99%;
    padding: 0.5rem 0;
    margin: 0;
    font-size: 1.5rem;
    color: $color_text;
    border: none;
    background: transparent;
  }
  & input::placeholder {
    color: $color_bg_brown;
    font-size: 1.3rem;
    text-align: center;
  }
  & input:focus {
    outline: none;
  }
}
@media (max-width: 930px) {
  .newTask {
    margin: 2rem 2rem 0 2rem;
  }
}
</style>
