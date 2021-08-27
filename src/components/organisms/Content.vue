<template>
  <div :class="$style.container">
    <Header />
    <img src="@/assets/img/bg-note.png" />
    <div :class="$style.wrapper">
      <TaskList />
      <TaskInput />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import TaskList from "./TaskList";
import TaskInput from "../atoms/TaskInput";
import Footer from "./Footer.vue";

export default {
  components: {
    Header,
    TaskList,
    TaskInput,
    Footer,
  },
};
</script>

<style lang="scss" module>
@import "src/assets/style.scss";
.container {
  max-width: 35rem;
  height: auto;
  margin: 0 auto;
  padding: 6rem 1rem 1rem 1rem;
  position: relative;
  font-family: $ff-main;
  z-index: 1;
  & img {
    position: absolute;
    width: 30rem;
    height: 40rem;
    top: 1rem;
    left: 50%;
    opacity: 0.8;
    z-index: -1;
  }
  .wrapper {
    padding: 2rem 0;
    background: $color_white;
    & div :last-child {
      margin-bottom: 0;
    }
  }
}
@media (max-width: 1010px) {
  .container {
    & img {
      width: 25rem;
      height: 35rem;
    }
  }
}
@media (max-width: 820px) {
  .container {
    & img {
      width: 20rem;
      height: 33rem;
    }
  }
}
@media (max-width: 660px) {
  .container {
    max-width: 25rem;
    margin: 0 auto;
    padding: 4rem 0.5rem;
    & img {
      left: 43%;
    }
  }
}
@media (max-width: 600px) {
  .container {
    margin: 0 2rem 0 4rem;
    & img {
      left: 40%;
    }
  }
}
@media (max-width: 580px) {
  .container {
    margin: 0 auto;
    & img {
      display: none;
    }
  }
}
@media (max-width: 500px) {
  .container {
    max-width: 20rem;
  }
}
</style>
