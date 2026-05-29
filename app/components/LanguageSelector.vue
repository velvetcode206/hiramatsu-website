<script setup lang="ts">
const {
  localeProperties,
  locales,
  setLocale,
} = useI18n()

const showLanguageMenu = ref(false)

function toggleShowLanguageMenu(value?: boolean) {
  showLanguageMenu.value = value ?? !showLanguageMenu.value
}

const target = useTemplateRef('target')

onClickOutside(target, () => toggleShowLanguageMenu(false))

const availableLocales = computed(() => locales.value.filter(locale => locale.code !== localeProperties.value.code))
</script>

<template>
  <div ref="target" class="relative flex flex-col">
    <button class="flex items-center gap-2 p-2 lg:p-4" @click="toggleShowLanguageMenu()">
      <Icon :name="`custom:flags-${localeProperties.code}`" class="text-2xl" />
      <span class="font-medium lg:hidden">{{ localeProperties.name }}</span>
      <Icon name="custom:chevron-down" class="ms-auto text-2xl transition-transform" :class="{ 'rotate-180 opacity-50': showLanguageMenu }" />
    </button>
    <Transition name="fade-up">
      <div v-if="showLanguageMenu" class="flex flex-col lg:absolute lg:top-full lg:right-0 lg:bg-white lg:rounded-sm lg:shadow-sm">
        <button
          v-for="item in availableLocales" :key="item.code" class="flex items-center gap-2 px-4 py-2 lg:p-4"
          @click="() => {
            setLocale(item.code)
            toggleShowLanguageMenu(false)
          }"
        >
          <Icon :name="`custom:flags-${item.code}`" class="text-2xl" />
          <span class="text-nowrap">{{ item.name }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped></style>
