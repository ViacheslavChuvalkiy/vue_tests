<template>
  <div id="app">
    <Content />
  </div>
</template>

<script>
import Content from "./components/organisms/Content.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    Content,
  },
  methods: {
    ...mapMutations(["getTasksFromLocalStorage"]),
  },
  mounted() {
    if (localStorage.tasksList) {
      this.getTasksFromLocalStorage();
    }
  },
};
</script>

<style lang="scss">
@import "src/assets/style.scss";
body {
  margin: 0;
  padding: 0;
  user-select: none;
  height: 100vh;
  background: linear-gradient(to right, #ff7e5f, #feb567);
}
#app {
  display: flex;
  flex-direction: column;
  width: auto;
}
</style>
