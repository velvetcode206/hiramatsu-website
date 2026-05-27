<script setup lang="ts">
const links: ILink[] = [
  {
    to: 'https://web.facebook.com/associacaohiramatsu',
    name: 'facebook',
  },
  {
    to: 'https://www.instagram.com/escola_samurai',
    name: 'instagram',
  },
  {
    to: 'https://www.youtube.com/channel/UCdj_dmfO7c2470OzweQM9XA',
    name: 'youtube',
  },
]
</script>

<template>
  <div class="flex mt-auto bg-white shadow-sm">
    <div class="flex flex-col gap-4 px-4 py-8 lg:gap-8 lg:px-8 lg:py-16 desktop-container">
      <ul class="flex gap-2 lg:gap-4">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            target="_blank"
          >
            <Icon :name="`custom:socials-${link.name}`" class="text-4xl lg:text-4xl" />
          </NuxtLink>
        </li>
      </ul>
      <p class="lg:text-lg">
        {{ $t('components.footer.rights') }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
