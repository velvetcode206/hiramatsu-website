<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({ title: t('pages.home.title') })

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
  <div class="page">
    <div class="container-content bg-white">
      <div class="wrapper-content wrapper-desktop">
        <span class="element-description">
          Uma imagem cativante que demonstra a essência da escola...
        </span>
      </div>
      <NuxtImg
        src="/home/hero.jpg"
        alt="Hero"
        width="1920"
        height="1080"
        sizes="sm:100vw lg:1280px"
        class="w-full object-cover max-h-[600px]"
      />
      <div class="wrapper-content wrapper-desktop">
        <span class="element-description">
          Pequena descrição sobre a escola complementando a imagem...
        </span>
        <h1>{{ $t('pages.home.school') }}</h1>
        <p>
          Donec ligula lorem, fermentum et sem sed, fermentum efficitur lorem. Curabitur id lorem lorem. Sed lectus mi, vehicula vitae dolor ac, tristique feugiat quam. Etiam aliquet mi eu odio scelerisque porttitor. Sed at ipsum posuere, laoreet urna aliquam nulla.
        </p>
        <p>
          Integer nunc enim, aliquet non urna eu, porttitor bibendum mauris. In tristique blandit magna ac vestibulum. Donec suscipit at ante quis mattis. Sed bibendum purus at ipsum imperdiet, et lobortis dolor viverra. Praesent finibus, quam vitae consequat velit.
        </p>
        <span class="element-description">
          Uma citação histórica que serve de base para a escola, com um belo pano de fundo...
        </span>
      </div>
    </div>
    <div class="container-content z-0 relative shadow-inner">
      <span class="wrapper-desktop text-2xl z-10 px-6 py-12 text-center font-bold lg:p-24 lg:text-4xl lg:leading-tight">
        {{ $t('pages.home.quote') }}
      </span>
      <NuxtImg
        src="/home/painting.jpg"
        alt="Painting"
        width="1080"
        height="675"
        sizes="sm:100vw lg:1280px"
        class="absolute top-0 w-full h-full object-cover opacity-40"
      />
    </div>
    <div class="container-content">
      <div class="wrapper-content wrapper-desktop">
        <span class="element-description">
          Chamada à ação, um texto para incentivar as pessoas a se inscreverem na escola...
        </span>
        <p>
          Mauris sollicitudin urna mollis viverra tincidunt. Sed condimentum ullamcorper eleifend. Donec porta blandit sem suscipit imperdiet. Pellentesque et sagittis orci. Ut sapien enim, lobortis eget leo non, finibus tempus lorem. Nullam dapibus, justo id velit.
        </p>
        <span class="element-description">
          Uma ou mais imagens que mostrem os diferentes aspectos da escola...
        </span>
      </div>
      <div class="grid lg:grid-cols-3">
        <NuxtImg
          v-for="item in schoolShowcase"
          :key="item.src"
          :src="item.src"
          :alt="item.alt"
          width="512"
          height="512"
          sizes="sm:100vw lg:1280px"
          class="w-full h-[512px] object-cover"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
