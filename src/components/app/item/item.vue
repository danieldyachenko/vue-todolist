<template>
  <li>
    <template v-if="!isEditMode">
      <span>{{ item.text }}</span>
      <button @click="deleteItem">Delete</button>
      <button @click="setEditMode">Edit</button>
    </template>
    <template v-else>
      <label>
        <input type="text" v-model="editText" />
      </label>
      <button @click="save">Save</button>
      <button @click="cancel">Cancel</button>
    </template>
  </li>
</template>

<script lang="ts" src="./item.ts"></script>
