<script setup lang="ts">
defineProps<{
  highlighted?: boolean
}>()
</script>

<template>
  <div class="flex flex-col gap-4 py-4 lg:gap-12 lg:py-12" :class="{ 'bg-white': highlighted }">
    <slot />
  </div>
</template>

<style scoped></style>
