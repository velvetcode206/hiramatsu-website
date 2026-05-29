<script setup lang="ts">
const { locale } = useI18n()

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

const senseisList: ISensei[] = [
  SENSEIS_MAP[SENSEI_IDS.RUBEN_SPINOZA],
  SENSEIS_MAP[SENSEI_IDS.PAULO_KOMATSU],
  SENSEIS_MAP[SENSEI_IDS.BRUNO_CONTARDI],
]
</script>

<template>
  <div class="page">
    <div class="container-content bg-white">
      <div class="wrapper-content wrapper-desktop">
        <span class="element-description">
          Uma breve introdução sobre a associação, sua origem, trajetória e situação atual. Um pouco mais detalhada do que a introdução na página inicial...
        </span>
        <h1>{{ $t('pages.about.introduction') }}</h1>
        <p>
          Duis nisl erat, hendrerit non tincidunt sit amet, varius quis nisi. In placerat risus eros. Fusce risus metus, eleifend id orci ut, molestie elementum turpis. Aenean non mi eget velit rutrum euismod.
        </p>
        <p>
          Praesent porttitor est vitae dui laoreet commodo. Nunc sed interdum dolor. Mauris ac urna vestibulum, consequat odio a, placerat neque. Donec et lobortis ante. Curabitur eu elit quis mauris ultricies rutrum.
        </p>
        <p>
          Duis imperdiet risus elit, vel ultricies sem scelerisque imperdiet. Nunc sagittis ipsum suscipit egestas tincidunt. Integer faucibus libero felis, ut pellentesque massa pretium sed.
        </p>
        <p>
          Praesent eu gravida diam. Fusce at nibh risus. Proin fermentum iaculis enim, eget interdum est scelerisque id.
        </p>
        <span class="element-description">
          Uma foto escolar lisonjeira, de preferência com muitos alunos...
        </span>
        <NuxtImg
          src="/about/hero.jpg"
          alt="hero"
          sizes="sm:100vw lg:1280px"
          preload
        />
      </div>
    </div>
    <div class="container-content">
      <div class="wrapper-content wrapper-desktop">
        <h1>{{ $t('pages.about.souke') }}</h1>
        <span class="element-description">
          Detalhes sobre o atual Souke (宗家), o chefe da associação. Onde estudou artes, com quem e como chegou à chefia. Também outras realizações pessoais...
        </span>
        <p>
          Morbi neque sapien, suscipit id auctor id, aliquet id felis. Sed risus mauris, convallis vitae lorem eu, imperdiet scelerisque lacus. Ut elit nunc, feugiat sed sodales scelerisque, faucibus id purus.
        </p>
        <p>
          Etiam tristique est varius porttitor lacinia. Nulla sed interdum ante, vestibulum mattis leo. Donec ullamcorper felis sit amet ligula egestas, eu laoreet arcu efficitur.
        </p>
        <p>
          ellentesque enim est, sollicitudin sit amet ante ac, blandit faucibus nunc. Sed quam urna, faucibus et magna quis, aliquet luctus leo.
        </p>
        <p>
          Aenean viverra sapien consectetur nibh consequat vehicula. Sed faucibus interdum aliquam. Duis eu porta sapien.
        </p>
        <span class="element-description">
          Uma ou mais fotos do Souke, mostrando-o dentro e fora de seu dougi e suas certificações...
        </span>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3">
        <NuxtImg
          v-for="item in soukeShowcase"
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
        <h1>{{ $t('pages.about.history') }}</h1>
        <span class="element-description">
          Uma breve descrição e cronologia e histórica de todas as outras escolas e figuras importantes que contribuíram para a formação da escola Hiramatsu...
        </span>
        <p>
          Pellentesque eu nibh a est suscipit vehicula eu sed dui. Etiam iaculis ligula eget libero ultricies, ut fermentum nunc elementum. Aliquam quis nibh nisl. Nulla facilisi.
        </p>
        <p>
          estibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec mollis sapien id vehicula commodo. Nullam sed lectus quis est placerat pulvinar.
        </p>
        <p>
          Ut vitae tempus augue, a faucibus dolor. Sed maximus libero non est tempus, pulvinar cursus sem condimentum. Nulla volutpat diam orci, vel vulputate elit interdum et.
        </p>
        <div
          v-for="(item, index) in historyShowcase"
          :key="item.src"
          class="flex flex-col gap-4 lg:flex-row lg:items-center"
          :class="{ 'lg:flex-row-reverse': index % 2 !== 0 }"
        >
          <NuxtImg
            :src="item.src"
            :alt="item.alt"
            class="lg:w-1/2"
            sizes="sm:100vw lg:1280px"
          />
          <p class="lg:w-1/2">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
    <div class="container-content">
      <div class="wrapper-content wrapper-desktop">
        <h1>{{ $t('pages.about.senseis') }}</h1>
        <span class="element-description">
          Uma breve nota sobre a importância de ser um sensei e suas responsabilidades...
        </span>
        <p>
          Duis nec rhoncus metus. Donec elementum arcu ac lorem pretium, et tristique purus luctus. Ut commodo, orci eu mattis pharetra, justo dolor volutpat quam, a vestibulum arcu ex et metus.
        </p>
        <p>
          Integer rutrum hendrerit risus, nec faucibus enim elementum at. Nulla maximus consectetur nibh, condimentum varius nulla. Proin lacinia odio sit amet ipsum posuere dapibus.
        </p>
        <span class="element-description">
          Uma lista dos senseis atuais...
        </span>
        <div class="grid gap-4 lg:grid-cols-3">
          <div
            v-for="sensei in senseisList"
            :key="sensei.id"
            class="flex flex-col gap-2 text-lg lg:text-xl"
          >
            <NuxtImg
              :src="sensei.images.showcase.src"
              :alt="sensei.images.showcase.alt"
              sizes="sm:100vw lg:1280px"
              class="w-full h-[300px] object-cover"
            />
            <span class="font-semibold">{{ sensei.name }}</span>
            <span>
              {{ sensei.introduction?.[locale] }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
