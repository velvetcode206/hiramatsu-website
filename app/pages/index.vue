<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({ title: t('pages.home.title') })

const schoolImageData: IImageData[] = [
  {
    src: '/home/school/paulo-sensei.jpg',
    alt: t('images.home.school.paulo-sensei.alt'),
  },
  {
    src: '/home/school/douglas-and-joao.jpg',
    alt: t('images.home.school.douglas-and-joao.alt'),
  },
  {
    src: '/home/school/ruben-sensei.jpg',
    alt: t('images.home.school.ruben-sensei.alt'),
  },
]

const heroImageData = computed<IImageData>(() => ({
  src: '/home/hero.jpg',
  alt: t('images.home.hero.alt'),
}))

const quoteImageData = computed<IImageData>(() => ({
  src: '/home/painting.jpg',
  alt: t('images.home.quote.alt'),
}))
</script>

<template>
  <div class="page">
    <ContentContainer :highlighted="true">
      <ContentWrapper :desktop-wrapper="true">
        <p class="content-title">
          {{ $t('pages.home.hero-title') }}
        </p>
        <p class="content-body">
          {{ $t('pages.home.hero-body') }}
        </p>
      </ContentWrapper>
      <NuxtImg
        :src="heroImageData.src"
        :alt="heroImageData.alt"
        :title="heroImageData.alt"
        width="1920"
        height="800"
        sizes="sm:100vw lg:1280px"
        class="w-full min-h-[512px] object-cover object-center"
        preload
      />
      <ContentWrapper :desktop-wrapper="true">
        <h1 class="content-title">
          {{ $t('pages.home.school-title') }}
        </h1>
        <p class="content-body">
          {{ $t('pages.home.school-body') }}
        </p>
      </ContentWrapper>
    </ContentContainer>
    <ContentContainer class="z-0 relative shadow-inner">
      <span class="wrapper-desktop text-3xl z-10 px-6 py-12 text-center font-bold lg:p-24 lg:text-5xl lg:leading-tight">
        {{ $t('pages.home.quote') }}
      </span>
      <NuxtImg
        :src="quoteImageData.src"
        :alt="quoteImageData.alt"
        :title="quoteImageData.alt"
        width="1080"
        height="675"
        sizes="sm:100vw lg:1280px"
        class="absolute top-0 w-full h-full object-cover opacity-40"
      />
    </ContentContainer>
    <ContentContainer>
      <ContentWrapper :desktop-wrapper="true">
        <h1 class="content-title">
          {{ $t('pages.home.principles-title') }}
        </h1>
        <p class="content-body">
          {{ $t('pages.home.principles-body') }}
        </p>
      </ContentWrapper>
      <div class="grid lg:grid-cols-3">
        <NuxtImg
          v-for="item in schoolImageData"
          :key="item.src"
          :src="item.src"
          :alt="item.alt"
          :title="item.alt"
          width="512"
          height="512"
          sizes="sm:100vw lg:1280px"
          class="w-full h-[512px] object-cover"
        />
      </div>
      <ContentWrapper :desktop-wrapper="true">
        <h1 class="content-title">
          {{ $t('pages.home.emotional-title') }}
        </h1>
        <p class="content-body">
          {{ $t('pages.home.emotional-body') }}
        </p>
      </ContentWrapper>
    </ContentContainer>
    <ContentContainer :highlighted="true">
      <ContentWrapper :desktop-wrapper="true">
        <h1 class="content-title">
          {{ $t('pages.home.cta-title') }}
        </h1>
        <p class="content-body">
          {{ $t('pages.home.cta-body') }}
        </p>
        <NuxtLink
          :to="$localePath('contact')"
          class="content-body self-start p-4 border border-accent bg-accent text-secondary rounded-sm transition-colors hover:bg-secondary hover:text-accent"
        >
          {{ $t('pages.home.cta-button') }}
        </NuxtLink>
      </ContentWrapper>
    </ContentContainer>
  </div>
</template>

<style scoped></style>
