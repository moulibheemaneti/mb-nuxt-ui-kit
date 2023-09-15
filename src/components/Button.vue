<template>
  <button :style="{ backgroundColor: color }">
    <!-- Dynamic Content -->
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineProps({
  color: {
    type: String,
    required: false,
    default: "#2fa",
  },
});
</script>

<style>
button{
  background-color: blanchedalmond;
  border: none;
}
</style>
