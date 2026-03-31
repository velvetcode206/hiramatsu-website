<script setup lang="ts">
const schoolShowcase: IImageData[] = [
  {
    src: '/home/school/1.jpg',
    alt: 'school-1',
  },
  {
    src: '/home/school/2.png',
    alt: 'school-2',
  },
  {
    src: '/home/school/3.jpg',
    alt: 'school-3',
  },
]
</script>

<template>
  <div>
    <h1>Home</h1>
    <p><i>Captivating image that should show what the school is about...</i></p>
    <NuxtImg
      src="/home/hero.jpg"
      alt="hero"
      class="img-hero"
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
        v-for="item in schoolShowcase"
        :key="item.src"
        :src="item.src"
        :alt="item.alt"
        class="img-hero"
        sizes="sm:100vw lg:1280px"
      />
    </div>
    <div>
      <h2>Call to action, a text to incentivize people to join the school.</h2>
      <p>Fusce varius augue dolor, non laoreet nisi egestas eu. Phasellus odio justo, consequat ac cursus non, finibus nec dolor. Sed blandit sodales enim.</p>
    </div>
  </div>
</template>

<style scoped></style>
