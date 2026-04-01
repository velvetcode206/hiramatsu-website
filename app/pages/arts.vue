<script setup lang="ts">
const kenjutsuData: IImageData[] = [
  {
    src: '/arts/kenjutsu/1.jpg',
    alt: 'kenjutsu-1',
    text: 'Nam nec quam tincidunt, volutpat felis vitae, venenatis felis. Aliquam non eros eros. Integer dictum turpis eu massa suscipit pulvinar. Vivamus quis risus ac quam imperdiet lobortis.',
  },
  {
    src: '/arts/kenjutsu/2.jpg',
    alt: 'kenjutsu-2',
    text: 'Cras vel tellus nec ligula vulputate iaculis in eu neque. Sed consectetur tempus nunc. Cras aliquet leo quis lacus pretium laoreet. Sed neque justo, aliquam eu egestas fermentum, placerat et arcu.',
  },
  {
    src: '/arts/kenjutsu/3.jpg',
    alt: 'kenjutsu-3',
    text: 'Etiam vel dignissim odio, in ullamcorper turpis. Donec vehicula dolor a ipsum scelerisque sodales. Praesent maximus eget sapien dui.',
  },
]

const bojutsuData: IImageData[] = [
  {
    src: '/arts/bojutsu/1.jpg',
    alt: 'bojutsu-1',
    text: 'Aliquam non lectus vehicula, lacinia ante vitae, scelerisque odio. Nullam ultricies fermentum nisi, at posuere lacus sollicitudin at. Mauris congue ornare enim suscipit mattis.',
  },
  {
    src: '/arts/bojutsu/2.jpg',
    alt: 'bojutsu-2',
    text: 'Nulla nunc dolor, malesuada et justo auctor, tincidunt volutpat lectus. Donec pharetra, tellus id ultricies suscipit, est turpis semper elit, quis sagittis augue lorem eget arcu.',
  },
  {
    src: '/arts/bojutsu/3.jpg',
    alt: 'bojutsu-3',
    text: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sodales aliquam luctus. Aenean sodales et leo non feugiat. Sed convallis ac leo cursus mi.',
  },
]

const doryuData: IImageData[] = [
  {
    src: '/arts/doryu/1.jpg',
    alt: 'doryu-1',
    text: 'Mauris non dolor mauris. Sed quis ante orci. Proin laoreet tortor at fermentum ultricies. Aliquam quis aliquet risus. Quisque facilisis, elit at tempus facilisis, odio lacus consequat lectus, in venenatis neque ipsum egestas nisl.',
  },
  {
    src: '/arts/doryu/2.jpg',
    alt: 'doryu-2',
    text: 'Quisque nec odio sed elit rhoncus placerat. Duis id nisl velit. Vestibulum congue mauris eu blandit auctor. Maecenas sed molestie lorem.',
  },
  {
    src: '/arts/doryu/3.jpg',
    alt: 'doryu-3',
    text: 'Morbi leo libero, vehicula vel sollicitudin vitae, facilisis eget magna. Maecenas nec risus felis. Sed ligula diam, faucibus nec nisi eget cras.',
  },
]
</script>

<template>
  <div>
    <div>
      <h1>Arts</h1>
      <h2>A small description on how the school have different art styles for different needs, and how they interact with one another.</h2>
      <p>Proin posuere molestie imperdiet. Vivamus in enim placerat, fermentum mi quis, laoreet purus. Mauris interdum libero sit amet lacinia euismod. Maecenas sit amet turpis vel mi auctor luctus.</p>
      <p>Mauris vitae sollicitudin sapien. Nunc leo dui, ullamcorper non tellus ac, finibus lobortis nibh. Nunc ac nunc est. Suspendisse ullamcorper tincidunt egestas. </p>
    </div>
    <div>
      <h1>Kenjutsu</h1>
      <h2>Details about the art like the history, origins, physical and spiritual uses, graduations, certifications, etc.</h2>
      <div
        v-for="item in kenjutsuData"
        :key="item.src"
      >
        <NuxtImg
          :src="item.src"
          :alt="item.alt"
          class="img-hero"
          sizes="sm:100vw lg:1280px"
        />
        <p>{{ item.text }}</p>
      </div>
    </div>
    <div>
      <h1>Bojutsu</h1>
      <h2>Details about the art like the history, origins, physical and spiritual uses, graduations, certifications, etc.</h2>
      <div
        v-for="item in bojutsuData"
        :key="item.src"
      >
        <NuxtImg
          :src="item.src"
          :alt="item.alt"
          class="img-hero"
          sizes="sm:100vw lg:1280px"
        />
        <p>{{ item.text }}</p>
      </div>
    </div>
    <div>
      <h1>Doryu</h1>
      <h2>Details about the art like the history, origins, physical and spiritual uses, graduations, certifications, etc.</h2>
      <div
        v-for="item in doryuData"
        :key="item.src"
      >
        <NuxtImg
          :src="item.src"
          :alt="item.alt"
          class="img-hero"
          sizes="sm:100vw lg:1280px"
        />
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
