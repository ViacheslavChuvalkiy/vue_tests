<template>
  <div :class="$style.footer">
    <div :class="$style.info">
      <p>{{ Tittle }}</p>
    </div>
    <Filters />
  </div>
</template>

<script>
import Filters from "./Filters";
import { mapGetters } from "vuex";

export default {
  components: {
    Filters,
  },
  computed: {
    ...mapGetters([
      "countTask",
      "countActiveTask",
      "countCompletedTask",
      "getActiveFilter",
    ]),
    Tittle() {
      let tittle = "";
      if (this.getActiveFilter === "completed") {
        tittle =
          this.countCompletedTask + " / " + this.countTask + " completed";
      } else {
        tittle = this.countActiveTask + " / " + this.countTask + " left";
      }
      return tittle;
    },
  },
};
</script>

<style lang="scss" module>
@import "src/assets/style.scss";
.footer {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background: $color_bg_brown;
  color: $color-text;
  .info {
    display: flex;
    align-self: center;
    & p {
      padding: 0;
      margin: 0;
      opacity: 0.42;
    }
  }
}
@media (max-width: 500px) {
  .footer {
    padding: 1rem 1rem;
    font-size: 1rem;
  }
}
</style>
