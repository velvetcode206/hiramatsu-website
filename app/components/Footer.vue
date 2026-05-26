<script setup lang="ts">
interface ILink {
  name: string
  label: string
}

const links: ILink[] = [
  {
    name: '/',
    label: 'Facebook',
  },
  {
    name: '/',
    label: 'Instagram',
  },
  {
    name: '/',
    label: 'Youtube',
  },
]
</script>

<template>
  <div>
    <ul>
      <li v-for="link in links" :key="link.name">
        <NuxtLink :to="link.name">
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
    <p>© 2008-2026 Associação Hiramatsu. All Rights Reserved.</p>
  </div>
</template>

<style scoped></style>
