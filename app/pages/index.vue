<script setup lang="ts">
const schoolShowcase: IImageData[] = [
  {
    src: '/home/school/1.jpg',
    alt: 'school-1',
  },
  {
    src: '/home/school/2.jpg',
    alt: 'school-2',
  },
  {
    src: '/home/school/3.jpg',
    alt: 'school-3',
  },
]
</script>

<template>
  <div class="flex flex-col">
    <div class="relative flex flex-col">
      <p class="absolute m-2 detail-message">
        Uma imagem cativante que demonstra a essência da escola...
      </p>
      <NuxtImg
        src="/home/hero.jpg"
        alt="Hero"
        preload
        class="w-full object-cover max-h-[512px]"
      />
    </div>
    <div class="flex flex-col gap-4 p-4 lg:p-8 desktop-container">
      <p class="detail-message text-base">
        Pequena descrição sobre a escola complementando a imagem...
      </p>
      <p class="text-lg indent-8 lg:text-xl lg:leading-10">
        Nulla facilisi. Nullam fringilla massa mauris, quis viverra mi pharetra vitae. Curabitur tincidunt tristique aliquet. In in aliquam nulla, non molestie ante. Vestibulum ligula nisl, ultricies vel arcu sit amet, luctus euismod sapien. Aenean quis aliquet mi. Nulla at urna velit. Donec dignissim massa sit amet lacus ornare ornare. Pellentesque et iaculis risus. Mauris ullamcorper nisl ac lorem sodales feugiat. Sed elementum ante massa, in interdum leo gravida a. Duis metus elit, ullamcorper vel metus ut, condimentum hendrerit ante. Quisque in orci nisl. Donec pharetra elit condimentum, pharetra ante vel, aliquet turpis.
      </p>
    </div>
    <div class="z-0 relative flex flex-col shadow-inner">
      <p class="z-10 px-6 py-12 text-2xl text-center font-syuku font-bold lg:px-12 lg:py-24 lg:text-6xl desktop-container">
        Uma citação histórica que serve de base para a escola, com um belo pano de fundo...
      </p>
      <NuxtImg
        src="/home/painting.jpg"
        alt="Painting"
        preload
        class="absolute w-full h-full object-cover opacity-50 max-h-[512px] "
      />
    </div>
    <div class="flex flex-col gap-4 p-4 lg:p-8 desktop-container">
      <p class="detail-message text-base">
        Chamada à ação, um texto para incentivar as pessoas a se inscreverem na escola...
      </p>
      <p class="text-lg indent-8 lg:text-xl lg:leading-10">
        Morbi vel interdum magna. Mauris vel nibh maximus, maximus nunc a, interdum ipsum. In purus ligula, finibus non rutrum id, semper ut arcu. Sed vestibulum risus velit, vitae venenatis velit porttitor et. Donec at porttitor erat. Nullam eu rutrum eros justo.
      </p>
    </div>
    <div class="relative grid grid-cols-1 lg:grid-cols-3">
      <p class="absolute m-2 detail-message">
        Uma ou mais imagens que mostrem os diferentes aspectos da escola...
      </p>
      <NuxtImg
        v-for="item in schoolShowcase"
        :key="item.src"
        :src="item.src"
        :alt="item.alt"
        class="w-full object-cover object-top max-h-[512px]"
      />
    </div>
  </div>
</template>

<style scoped></style>
