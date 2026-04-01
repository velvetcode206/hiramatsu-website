<script setup lang="ts">
const soukeShowcase: IImageData[] = [
  {
    src: '/about/souke/1.jpg',
    alt: 'souke-1',
  },
  {
    src: '/about/souke/2.jpg',
    alt: 'souke-2',
  },
  {
    src: '/about/souke/3.jpg',
    alt: 'souke-3',
  },
]

const historyShowcase: IImageData[] = [
  {
    src: '/about/history/1.jpg',
    alt: 'history-1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus est sit amet elit blandit dictum. Curabitur fermentum metus dui, ut sollicitudin dui rutrum sed. Fusce facilisis lacus justo, vulputate gravida nisi cursus quis.',
  },
  {
    src: '/about/history/2.jpg',
    alt: 'history-2',
    text: 'Praesent dictum turpis eu dui placerat finibus. Donec commodo porta elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
  },
  {
    src: '/about/history/3.jpg',
    alt: 'history-3',
    text: 'Ut condimentum volutpat porta. Ut tempus at ex vel fringilla. Vestibulum ullamcorper lorem vel elit auctor ultrices. Vivamus aliquam urna quam, nec sodales ipsum mollis efficitur.',
  },
]

const senseiShowcase: IImageData[] = [
  {
    src: '/about/sensei/1.jpg',
    alt: 'sensei-1',
    text: 'Cras dolor neque, dignissim vitae urna quis, rutrum pharetra ex. Cras ac purus nec purus euismod auctor eu id lectus. Mauris vel velit facilisis, pharetra ligula ut, imperdiet risus.',
  },
  {
    src: '/about/sensei/2.jpg',
    alt: 'sensei-2',
    text: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer mattis lectus quam, ac elementum odio finibus at. Suspendisse tristique diam dapibus tempor eleifend.',
  },
  {
    src: '/about/sensei/3.jpg',
    alt: 'sensei-3',
    text: 'Fusce dignissim, tellus nec laoreet aliquam, mi quam eleifend arcu, nec lobortis nunc enim eget enim. Proin a tincidunt ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
]
</script>

<template>
  <div>
    <div>
      <h1>About</h1>
      <h2>A small introduction about the association, where it came from, where it passed through and where it stands currently. A bit more in depth than the home introduction.</h2>
      <p>Duis nisl erat, hendrerit non tincidunt sit amet, varius quis nisi. In placerat risus eros. Fusce risus metus, eleifend id orci ut, molestie elementum turpis. Aenean non mi eget velit rutrum euismod.</p>
      <p>Praesent porttitor est vitae dui laoreet commodo. Nunc sed interdum dolor. Mauris ac urna vestibulum, consequat odio a, placerat neque. Donec et lobortis ante. Curabitur eu elit quis mauris ultricies rutrum.</p>
      <p>Duis imperdiet risus elit, vel ultricies sem scelerisque imperdiet. Nunc sagittis ipsum suscipit egestas tincidunt. Integer faucibus libero felis, ut pellentesque massa pretium sed.</p>
      <p>Praesent eu gravida diam. Fusce at nibh risus. Proin fermentum iaculis enim, eget interdum est scelerisque id.</p>
      <p><i>A flattering photo of school, preferentially with a lot of students...</i></p>
      <NuxtImg
        src="/about/hero.jpg"
        alt="hero"
        class="img-hero"
        sizes="sm:100vw lg:1280px"
        preload
      />
    </div>
    <div>
      <h1>Souke</h1>
      <h2>Details about the current Souke (宗家), the head of the association. Where it studied the arts, from whom and how he came to be the head. Also other personal accomplishments.</h2>
      <p>Morbi neque sapien, suscipit id auctor id, aliquet id felis. Sed risus mauris, convallis vitae lorem eu, imperdiet scelerisque lacus. Ut elit nunc, feugiat sed sodales scelerisque, faucibus id purus.</p>
      <p>Etiam tristique est varius porttitor lacinia. Nulla sed interdum ante, vestibulum mattis leo. Donec ullamcorper felis sit amet ligula egestas, eu laoreet arcu efficitur.</p>
      <p>ellentesque enim est, sollicitudin sit amet ante ac, blandit faucibus nunc. Sed quam urna, faucibus et magna quis, aliquet luctus leo.</p>
      <p>Aenean viverra sapien consectetur nibh consequat vehicula. Sed faucibus interdum aliquam. Duis eu porta sapien.</p>
      <div>
        <p><i>One or more photos of the Souke, showing in and out of his dougi and his certifications.</i></p>
        <NuxtImg
          v-for="item in soukeShowcase"
          :key="item.src"
          :src="item.src"
          :alt="item.alt"
          class="img-hero"
          sizes="sm:100vw lg:1280px"
        />
      </div>
    </div>
    <div>
      <h1>History</h1>
      <h2>A small description and historical timeline of all the other schools and important figures that brought hiramatsu to fruition.</h2>
      <p>Pellentesque eu nibh a est suscipit vehicula eu sed dui. Etiam iaculis ligula eget libero ultricies, ut fermentum nunc elementum. Aliquam quis nibh nisl. Nulla facilisi.</p>
      <p>estibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec mollis sapien id vehicula commodo. Nullam sed lectus quis est placerat pulvinar.</p>
      <p>Ut vitae tempus augue, a faucibus dolor. Sed maximus libero non est tempus, pulvinar cursus sem condimentum. Nulla volutpat diam orci, vel vulputate elit interdum et.</p>
      <div
        v-for="item in historyShowcase"
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
      <h1>Senseis</h1>
      <h2>A small note of the importance of being a sensei and its responsabilities, then a list of the current senseis.</h2>
      <p>Duis nec rhoncus metus. Donec elementum arcu ac lorem pretium, et tristique purus luctus. Ut commodo, orci eu mattis pharetra, justo dolor volutpat quam, a vestibulum arcu ex et metus.</p>
      <p>Integer rutrum hendrerit risus, nec faucibus enim elementum at. Nulla maximus consectetur nibh, condimentum varius nulla. Proin lacinia odio sit amet ipsum posuere dapibus.</p>
      <div
        v-for="item in senseiShowcase"
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
