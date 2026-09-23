<script setup lang="ts">
defineProps<{
  desktopWrapper?: boolean
}>()
</script>

<template>
  <div class="flex flex-col gap-4 px-4 lg:gap-8" :class="{ 'lg:w-full lg:max-w-7xl lg:mx-auto': desktopWrapper }">
    <slot />
  </div>
</template>

<style scoped>
p {
  color: red;
}
</style>
