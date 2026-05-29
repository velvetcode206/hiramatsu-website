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
  <div ref="target" class="z-10 sticky top-0 flex flex-col bg-white">
    <!-- HEADER -->
    <div class="wrapper-desktop flex gap-4 p-4 lg:justify-start lg:gap-6 lg:py-6">
      <NuxtImg
        src="/logo.jpg"
        :alt="$t('title')"
        width="256"
        height="256"
        preload
        class="w-12 h-12 lg:w-[72px] lg:h-[72px]"
      />
      <div class="flex flex-col justify-center text-2xl leading-none lg:text-4xl lg:leading-none">
        <span v-for="word in $t('title').split(' ')" :key="word" class="last:uppercase last:text-accent last:font-bold">
          {{ word }}
        </span>
      </div>
      <!-- DESKTOP MENU -->
      <ul class="hidden gap-2 ms-auto lg:flex">
        <li v-for="link in links" :key="link.to" class="desktop-menu-item">
          <NuxtLink
            :to="$localePath(link.to)"
            class="p-4 text-xl leading-none transition-colors rounded-sm border-b-4 border-white hover:text-accent"
            exact-active-class="!border-accent text-accent pointer-events-none"
          >
            {{ $t(`pages.${link.name}.title`) }}
          </NuxtLink>
        </li>
        <li class="desktop-menu-item">
          <LanguageSelector />
        </li>
      </ul>
      <!-- MOBILE MENU BUTTON -->
      <button class="ms-auto lg:hidden" @click="toggleShowMobileMenu()">
        <Icon name="custom:menu" class="text-4xl transition-transform" :class="{ '-rotate-90 opacity-50': showMobileMenu }" />
      </button>
    </div>
    <!-- MOBILE MENU -->
    <Transition name="fade-up">
      <ul v-if="showMobileMenu" class="flex flex-col pb-2">
        <li
          v-for="link in links"
          :key="link.to"
          class="mobile-menu-item"
        >
          <NuxtLink
            :to="$localePath(link.to)"
            class="p-2 text-xl rounded-sm border-l-2 border-white hover:text-accent active:text-accent"
            exact-active-class="font-bold text-accent !border-accent pointer-events-none"
            @click="toggleShowMobileMenu()"
          >
            {{ $t(`pages.${link.name}.title`) }}
          </NuxtLink>
        </li>
        <li class="mobile-menu-item">
          <LanguageSelector />
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
.desktop-menu-item {
  @apply flex items-center;
}

.mobile-menu-item {
  @apply flex flex-col px-4;
}
</style>
