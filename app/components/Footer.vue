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
  <div class="flex mt-auto bg-white">
    <div class="wrapper-desktop flex flex-col gap-4 p-4 lg:flex-row lg:items-center lg:gap-6 lg:py-12">
      <ul class="flex gap-2 lg:gap-4">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            target="_blank"
          >
            <Icon :name="`custom:socials-${link.name}`" class="text-4xl" />
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
