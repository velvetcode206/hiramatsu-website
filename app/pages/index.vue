<script setup lang="ts">
interface IShowcaseImage {
  src: string
  alt: string
}

const showcaseImages: IShowcaseImage[] = [
  {
    src: 'showcase-1.jpg',
    alt: 'showcase-1',
  },
  {
    src: 'showcase-2.png',
    alt: 'showcase-2',
  },
  {
    src: 'showcase-3.jpg',
    alt: 'showcase-3',
  },
]
</script>

<template>
  <div>
    <h1>Home</h1>
    <p><i>Captivating image that should show what the school is about...</i></p>
    <NuxtImg
      src="/home/hero.jpg"
      alt="Musashi"
      sizes="sm:100vw lg:1280px"
      preload
    />
    <div>
      <h2>Small description about the school complementing the image.</h2>
      <p>Fusce varius augue dolor, non laoreet nisi egestas eu. Phasellus odio justo, consequat ac cursus non, finibus nec dolor. Sed blandit sodales enim.</p>
      <p>Nulla facilisi. Curabitur at mauris non quam facilisis blandit. Integer condimentum ante nisl, at gravida eros tempus vitae. Nam convallis interdum hendrerit.</p>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec in malesuada mauris.</p>
      <p>Donec pharetra ex neque, quis imperdiet metus pretium ut. Fusce sollicitudin lacinia nulla, in efficitur nisl pharetra eget.</p>
    </div>
    <div>
      <hr>
      <h2>A historical quote that the school is backed upon, with a nice background</h2>
      <hr>
    </div>
    <div>
      <p><i>One or more images showcasing the different aspects of the school...</i></p>
      <NuxtImg
        v-for="image in showcaseImages"
        :key="image.src"
        :src="`/home/${image.src}`"
        :alt="image.alt"
        sizes="sm:100vw lg:1280px"
      />
    </div>
    <div>
      <h2>Call to action, a text incentivizing to join the school.</h2>
      <p>Fusce varius augue dolor, non laoreet nisi egestas eu. Phasellus odio justo, consequat ac cursus non, finibus nec dolor. Sed blandit sodales enim.</p>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
}
</style>
