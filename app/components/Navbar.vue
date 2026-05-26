<script setup lang="ts">
const {
  locale,
  locales,
  setLocale,

} = useI18n()

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
  <div class="top-0 sticky flex">
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
        <NuxtLink :to="$localePath(link.name)">
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
    <p>{{ locale }}</p>
    <button v-for="item in locales" :key="item.code" @click="setLocale(item.code)">
      {{ item.name }}
    </button>
  </div>
</template>

<style scoped></style>
