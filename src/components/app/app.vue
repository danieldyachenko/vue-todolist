<template>
  <main :class="$style.app">
    <label>
      <input
        type="text"
        v-model="value"
        placeholder="Add new item"
        @keyup.enter="add"
      />
    </label>
    <button @click="add">Add</button>
    <ul v-if="items.length">
      <item
        v-for="item in items"
        :key="item.id"
        :item="item"
        :editModeId="editModeId"
        @setEditModeId="setEditModeId"
        @remove="remove"
        @save="save"
      />
    </ul>
    <div v-else>The list is empty</div>
  </main>
</template>

<script lang="ts" src="./app.ts"></script>

<style lang="scss" module>
.app {
  margin-top: 50px;
}
</style>
