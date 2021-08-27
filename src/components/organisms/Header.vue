<template>
  <div :class="$style.title">
    <h2>to do list</h2>
  </div>
</template>

<script></script>

<style lang="scss" module>
@import "src/assets/style.scss";
.title {
  text-align: center;
  background: $color_bg_brown;
  h2 {
    color: $color-text;
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
    padding: 1rem 0;
  }
}
@media (max-width: 500px) {
  .title {
    padding: 0;
  }
}
</style>
