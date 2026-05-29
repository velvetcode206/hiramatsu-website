<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({ title: t('pages.contact.title') })
</script>

<template>
  <div class="page">
    <div class="container-content bg-white">
      <div class="wrapper-content wrapper-desktop">
        <h1>{{ $t('pages.contact.title') }}</h1>
        <span class="element-description">
          Texto dizendo sobre os diferentes dojos e os senseis responsáveis...
        </span>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc id molestie odio. Vestibulum consequat interdum orci, eu viverra dolor. Donec dapibus malesuada accumsan. Curabitur quis lobortis tellus. Fusce eu sem turpis duis.
        </p>
        <span class="element-description">
          Informações do sensei principal para contato...
        </span>
        <div v-for="sensei in [SENSEIS_MAP[SENSEI_IDS.RUBEN_SPINOZA]]" :key="sensei.id" class="flex flex-col gap-1 lg:gap-2">
          <span class="sensei-name">
            {{ $t('pages.contact.sensei', { name: sensei.name }) }}
          </span>
          <span v-for="phone in sensei.contacts.phones" :key="phone" class="contact">
            {{ phone }}
          </span>
          <span v-for="email in sensei.contacts.emails" :key="email" class="contact">
            {{ email }}
          </span>
          <span v-if="sensei.contacts.socials?.facebook" class="contact">
            Facebook: {{ sensei.contacts.socials?.facebook }}
          </span>
          <span v-if="sensei.contacts.socials?.instagram" class="contact">
            Instagram: {{ sensei.contacts.socials?.instagram }}
          </span>
          <span v-if="sensei.contacts.socials?.tiktok" class="contact">
            TikTok: {{ sensei.contacts.socials?.tiktok }}
          </span>
        </div>
      </div>
    </div>
    <div v-for="dojo in DOJOS_MAP" :key="dojo.id" class="container-content odd:bg-white">
      <div class="wrapper-content wrapper-desktop">
        <div class="grid gap-4 lg:grid-cols-2 lg:gap-8">
          <div class="flex flex-col gap-2 lg:gap-4">
            <div class="flex flex-col gap-1 lg:gap-2">
              <span class="dojo-title">
                {{ $t(`pages.contact.dojo`, {
                  type: dojo.main ? $t('dojo-type.main') : $t('dojo-type.branch'),
                  name: dojo.name,
                }) }}
              </span>
              <span class="dojo-address">{{ dojo.address }}</span>
              <span class="dojo-address italic">{{ dojo.details }}</span>
            </div>
            <div v-for="sensei in dojo.senseis" :key="sensei.id" class="flex flex-col gap-1 lg:gap-2">
              <span class="sensei-name">
                {{ $t('pages.contact.sensei', { name: sensei.name }) }}
              </span>
              <span v-for="phone in sensei.contacts.phones" :key="phone" class="contact">
                {{ phone }}
              </span>
              <span v-for="email in sensei.contacts.emails" :key="email" class="contact">
                {{ email }}
              </span>
              <span v-if="sensei.contacts.socials?.facebook" class="contact">
                Facebook: {{ sensei.contacts.socials?.facebook }}
              </span>
              <span v-if="sensei.contacts.socials?.instagram" class="contact">
                Instagram: {{ sensei.contacts.socials?.instagram }}
              </span>
              <span v-if="sensei.contacts.socials?.tiktok" class="contact">
                TikTok: {{ sensei.contacts.socials?.tiktok }}
              </span>
            </div>
          </div>
          <iframe
            :src="dojo.mapSrcStreet"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full h-64 lg:h-[400px] border rounded-sm shadow-sm"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dojo-title {
  @apply text-2xl font-medium lg:text-4xl;
}

.dojo-address {
  @apply text-lg lg:text-xl;
}

.sensei-name {
  @apply text-xl font-medium lg:text-2xl;
}

.contact {
  @apply text-lg lg:text-xl;
}
</style>
