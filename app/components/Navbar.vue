<script setup lang="ts">
interface ILink {
  name: string
  label: string
}

const links: ILink[] = [
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
    <NuxtImg
      src="/logo.jpg"
      alt="Musashi"
      width="64px"
      height="64px"
      preload
    />
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

<style scoped></style>
