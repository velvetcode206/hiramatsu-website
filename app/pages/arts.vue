<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({ title: t('pages.arts.title') })

const kenjutsuShowcase: IImageData[] = [
  {
    src: '/arts/kenjutsu/1.jpg',
    alt: 'kenjutsu-1',
  },
  {
    src: '/arts/kenjutsu/2.jpg',
    alt: 'kenjutsu-2',
  },
  {
    src: '/arts/kenjutsu/3.jpg',
    alt: 'kenjutsu-3',
  },
]

const bojutsuShowcase: IImageData[] = [
  {
    src: '/arts/bojutsu/1.jpg',
    alt: 'bojutsu-1',
  },
  {
    src: '/arts/bojutsu/2.jpg',
    alt: 'bojutsu-2',
  },
  {
    src: '/arts/bojutsu/3.jpg',
    alt: 'bojutsu-3',
  },
]

const doryuShowcase: IImageData[] = [
  {
    src: '/arts/doryu/1.jpg',
    alt: 'doryu-1',
  },
  {
    src: '/arts/doryu/2.jpg',
    alt: 'doryu-2',
  },
  {
    src: '/arts/doryu/3.jpg',
    alt: 'doryu-3',
  },
]
</script>

<template>
  <div class="page">
    <div class="container-content bg-white">
      <div class="wrapper-content wrapper-desktop">
        <h1>{{ $t('pages.arts.title') }}</h1>
        <span class="element-description">
          Uma breve descrição de como a escola possui diferentes estilos para atender a diferentes necessidades e como esses estilos interagem entre si...
        </span>
        <p>
          Proin posuere molestie imperdiet. Vivamus in enim placerat, fermentum mi quis, laoreet purus. Mauris interdum libero sit amet lacinia euismod. Maecenas sit amet turpis vel mi auctor luctus.
        </p>
        <p>
          Mauris vitae sollicitudin sapien. Nunc leo dui, ullamcorper non tellus ac, finibus lobortis nibh. Nunc ac nunc est. Suspendisse ullamcorper tincidunt egestas.
        </p>
      </div>
    </div>
    <div class="container-content">
      <div class="wrapper-content wrapper-desktop">
        <h1>{{ $t('arts.kenjutsu.name') }}</h1>
        <span class="element-description">
          Uma imagem chamativa mostrando o estilo...
        </span>
        <NuxtImg
          :src="kenjutsuShowcase[0]?.src"
          :alt="kenjutsuShowcase[0]?.alt"
          sizes="sm:100vw lg:1280px"
          class="w-full object-cover rounded-sm shadow-sm"
        />
        <span class="element-description">
          Detalhes sobre a arte, como história, origens, usos físicos e espirituais, graduações, certificações, etc...
        </span>
        <p>
          Nam nec quam tincidunt, volutpat felis vitae, venenatis felis. Aliquam non eros eros. Integer dictum turpis eu massa suscipit pulvinar. Vivamus quis risus ac quam imperdiet lobortis.
        </p>
        <p>
          Cras vel tellus nec ligula vulputate iaculis in eu neque. Sed consectetur tempus nunc. Cras aliquet leo quis lacus pretium laoreet. Sed neque justo, aliquam eu egestas fermentum, placerat et arcu.
        </p>
        <p>
          Etiam vel dignissim odio, in ullamcorper turpis. Donec vehicula dolor a ipsum scelerisque sodales. Praesent maximus eget sapien dui.
        </p>
        <span class="element-description">
          Uma ou mais fotos do estilo, mostrando-o suas diferentes aplicações...
        </span>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3">
        <NuxtImg
          v-for="item in kenjutsuShowcase"
          :key="item.src"
          :src="item.src"
          :alt="item.alt"
          sizes="sm:100vw lg:1280px"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
    <div class="container-content bg-white">
      <div class="wrapper-content wrapper-desktop">
        <h1>{{ $t('arts.bojutsu.name') }}</h1>
        <span class="element-description">
          Uma imagem chamativa mostrando o estilo...
        </span>
        <NuxtImg
          :src="bojutsuShowcase[0]?.src"
          :alt="bojutsuShowcase[0]?.alt"
          sizes="sm:100vw lg:1280px"
          class="w-full object-cover rounded-sm shadow-sm"
        />
        <span class="element-description">
          Detalhes sobre a arte, como história, origens, usos físicos e espirituais, graduações, certificações, etc...
        </span>
        <p>
          Aliquam non lectus vehicula, lacinia ante vitae, scelerisque odio. Nullam ultricies fermentum nisi, at posuere lacus sollicitudin at. Mauris congue ornare enim suscipit mattis.
        </p>
        <p>
          Nulla nunc dolor, malesuada et justo auctor, tincidunt volutpat lectus. Donec pharetra, tellus id ultricies suscipit, est turpis semper elit, quis sagittis augue lorem eget arcu.
        </p>
        <p>
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sodales aliquam luctus. Aenean sodales et leo non feugiat. Sed convallis ac leo cursus mi.
        </p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3">
        <NuxtImg
          v-for="item in bojutsuShowcase"
          :key="item.src"
          :src="item.src"
          :alt="item.alt"
          sizes="sm:100vw lg:1280px"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
    <div class="container-content">
      <div class="wrapper-content wrapper-desktop">
        <h1>{{ $t('arts.doryu.name') }}</h1>
        <span class="element-description">
          Uma imagem chamativa mostrando o estilo...
        </span>
        <NuxtImg
          :src="doryuShowcase[0]?.src"
          :alt="doryuShowcase[0]?.alt"
          sizes="sm:100vw lg:1280px"
          class="w-full object-cover rounded-sm shadow-sm"
        />
        <span class="element-description">
          Detalhes sobre a arte, como história, origens, usos físicos e espirituais, graduações, certificações, etc...
        </span>
        <p>
          Mauris non dolor mauris. Sed quis ante orci. Proin laoreet tortor at fermentum ultricies. Aliquam quis aliquet risus. Quisque facilisis, elit at tempus facilisis, odio lacus consequat lectus, in venenatis neque ipsum egestas nisl.
        </p>
        <p>
          Quisque nec odio sed elit rhoncus placerat. Duis id nisl velit. Vestibulum congue mauris eu blandit auctor. Maecenas sed molestie lorem.
        </p>
        <p>
          Morbi leo libero, vehicula vel sollicitudin vitae, facilisis eget magna. Maecenas nec risus felis. Sed ligula diam, faucibus nec nisi eget cras.
        </p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3">
        <NuxtImg
          v-for="item in doryuShowcase"
          :key="item.src"
          :src="item.src"
          :alt="item.alt"
          sizes="sm:100vw lg:1280px"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
