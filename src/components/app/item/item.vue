<template>
  <li>
    <slot></slot>
    <button @click="deleteItem">X</button>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "item",
  props: ["id"],
  emits: ["remove"],
  methods: {
    deleteItem() {
      this.$emit("remove", this.$props.id);
    },
  },
});
</script>
