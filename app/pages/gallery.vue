<script setup lang="ts">
const { t } = useI18n()
const dataStore = useDataStore()
const { showTips } = storeToRefs(dataStore)

useSeoMeta({ title: t('pages.arts.title') })

const media: IMedia[] = [
  {
    type: 'image',
    src: 'https://placehold.net/1-600x800.png',
    span: 'lg:col-span-2 lg:row-span-2',
    alt: '1',
  },
  {
    type: 'image',
    src: 'https://placehold.net/2-600x800.png',
    alt: '2',
  },
  {
    type: 'youtube',
    src: 'https://www.youtube.com/embed/cE0wfjsybIQ?si=rk6S8xhsKpYeaMP4',
    alt: '6',
  },
  {
    type: 'image',
    src: 'https://placehold.net/4-600x800.png',
    alt: '4',
  },
  {
    type: 'image',
    src: 'https://placehold.net/5-600x800.png',
    span: 'lg:col-span-2',
    alt: '5',
  },
  {
    type: 'image',
    src: 'https://placehold.net/6-600x800.png',
    alt: '6',
  },
  {
    type: 'youtube',
    src: 'https://www.youtube.com/embed/ZZ5LpwO-An4?si=F2xfi4EtHKtaHjOS',
    alt: '6',
  },
  {
    type: 'image',
    src: 'https://placehold.net/7-600x800.png',
    span: 'lg:col-span-2 lg:row-span-2',
    alt: '7',
  },
  {
    type: 'image',
    src: 'https://placehold.net/8-600x800.png',
    alt: '8',
  },
  {
    type: 'youtube',
    src: 'https://www.youtube.com/embed/Cp6g3m0JlwE?si=769ps_Sg5JAWxPqy',
    alt: '6',
  },
]

const isViewerOpen = ref(false)
const selectedIndex = ref(0)

function openMedia(index: number) {
  selectedIndex.value = index
  isViewerOpen.value = true
}
</script>

<template>
  <div class="page">
    <div class="container-content bg-white">
      <div class="wrapper-content wrapper-desktop">
        <h1>{{ $t('pages.gallery.title') }}</h1>
        <span v-if="showTips" class="element-description">
          Descreve como o visitante pode ver fotos e vídeos de treinos, retiros e apresentações da escola...
        </span>
        <p>
          Donec bibendum nibh vel porta ultrices. Pellentesque gravida ac ante a congue. Praesent cursus mauris eget elit luctus, ac vehicula erat egestas. Suspendisse ultricies non est laoreet auctor. Praesent pharetra consectetur nisi, eget vehicula ex lacinia ut.
        </p>
      </div>
      <div class="columns-2 lg:columns-3 gap-1 p-1">
        <div
          v-for="(item, index) in media"
          :key="item.src"
          class="mb-1 break-inside-avoid"
          :class="[item.span]"
          @click="openMedia(index)"
        >
          <NuxtImg
            v-if="item.type === 'image'"
            :src="item.src"
            :alt="item.alt"
            sizes="sm:100vw lg:1280px"
            class="w-full object-cover"
          />
          <video
            v-else-if="item.type === 'video'"
            :src="item.src"
            :muted="item.muted"
            class="w-full object-cover"
          />
          <iframe
            v-else-if="item.type === 'youtube'"
            :src="item.src"
            title="YouTube video player"
            frameborder="0"
            allow="picture-in-picture"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            class="w-full h-48 lg:h-96"
          />
        </div>
      </div>
    </div>
    <MediaViewer
      v-model:open="isViewerOpen"
      :media="media"
      :initial-index="selectedIndex"
    />
  </div>
</template>

<style scoped></style>
