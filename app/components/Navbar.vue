<script setup lang="ts">
interface Link {
  name: string
  label: string
}

const links: Link[] = [
  {
    name: '/',
    label: 'Home',
  },
  {
    name: 'about',
    label: 'About',
  },
  {
    name: 'arts',
    label: 'Arts',
  },
  {
    name: 'classes',
    label: 'Classes',
  },
  {
    name: 'contact',
    label: 'Contact',
  },
]
</script>

<template>
  <div>
    <h1>Associação Hiramatsu</h1>
    <ul>
      <li v-for="link in links" :key="link.name">
        <NuxtLink :to="link.name">
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style></style>
