<template>
  <div :class="$style.root">
    <app />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import App from "./app/app.vue";

export default defineComponent({
  name: "root",
  components: {
    App,
  },
});
</script>

<style lang="scss" module>
.root {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>
