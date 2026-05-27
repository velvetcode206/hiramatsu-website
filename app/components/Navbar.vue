<script setup lang="ts">
const links: ILink[] = [
  {
    to: '/',
    name: 'home',
  },
  {
    to: 'about',
    name: 'about',
  },
  {
    to: 'arts',
    name: 'arts',
  },
  {
    to: 'classes',
    name: 'classes',
  },
  {
    to: 'contact',
    name: 'contact',
  },
]

const showMobileMenu = ref(false)

function toggleShowMobileMenu(value?: boolean) {
  showMobileMenu.value = value ?? !showMobileMenu.value
}

const target = useTemplateRef('target')

onClickOutside(target, () => toggleShowMobileMenu(false))
</script>

<template>
  <div ref="target" class="top-0 sticky flex flex-col bg-white shadow-sm">
    <div class="flex justify-between items-center gap-2 p-2 lg:justify-start lg:gap-8 lg:w-full lg:max-w-7xl lg:mx-auto lg:p-8">
      <NuxtImg
        src="/logo.jpg"
        alt="Musashi"
        width="128"
        height="128"
        preload
        class="w-12 h-12 lg:w-16 lg:h-16"
      />
      <h1 class="leading-none text-center text-2xl font-bold font-syuku lg:text-4xl lg:text-start">
        {{ $t('title') }}
      </h1>
      <button class="lg:hidden" @click="toggleShowMobileMenu()">
        <Icon name="custom:menu" class="text-5xl transition-transform" :class="{ '-rotate-90 opacity-50': showMobileMenu }" />
      </button>
      <!-- DESKTOP MENU -->
      <ul class="hidden gap-2 items-center ms-auto lg:flex">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="$localePath(link.to)"
            class="px-4 py-2 text-2xl font-syuku transition-colors rounded-sm border-b-2 border-white hover:text-accent"
            exact-active-class="!border-accent text-accent pointer-events-none"
          >
            {{ $t(`pages.${link.name}.title`) }}
          </NuxtLink>
        </li>
        <LanguageSelector />
      </ul>
    </div>
    <!-- MOBILE MENU -->
    <Transition name="fade-up">
      <ul v-if="showMobileMenu" class="flex flex-col">
        <li
          v-for="link in links"
          :key="link.to"
          class="px-2 py-2"
        >
          <NuxtLink
            :to="$localePath(link.to)"
            class="px-2 text-xl font-syuku rounded-sm border-l-2 border-white hover:text-accent active:text-accent"
            exact-active-class="font-bold text-accent !border-accent pointer-events-none"
            @click="toggleShowMobileMenu()"
          >
            {{ $t(`pages.${link.name}.title`) }}
          </NuxtLink>
        </li>
        <LanguageSelector />
      </ul>
    </Transition>
  </div>
</template>

<style scoped></style>
