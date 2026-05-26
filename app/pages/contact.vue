<script setup lang="ts"></script>

<template>
  <div>
    <h1>Contact</h1>
    <div>
      <div v-for="dojo in DOJOS_MAP" :key="dojo.id">
        <strong><p>{{ dojo.name }}</p></strong>
        <p>{{ dojo.address }}</p>
        <p>{{ dojo.details }}</p>
        <div>
          <div v-for="sensei in dojo.senseis" :key="sensei.id">
            <p>Sensei {{ sensei.name }}</p>
            <div v-if="sensei.contacts.phones?.length">
              <p>Phones</p>
              <p v-for="phone in sensei.contacts.phones" :key="phone">
                {{ phone }}
              </p>
            </div>
            <div v-if="sensei.contacts.emails?.length">
              <p>E-mails</p>
              <p v-for="email in sensei.contacts.emails" :key="email">
                {{ email }}
              </p>
            </div>
            <div v-if="sensei.contacts.socials">
              <p v-if="sensei.contacts.socials.facebook">
                Facebook: {{ sensei.contacts.socials.facebook }}
              </p>
              <p v-if="sensei.contacts.socials.instagram">
                Instagram: {{ sensei.contacts.socials.instagram }}
              </p>
              <p v-if="sensei.contacts.socials.tiktok">
                TikTok: {{ sensei.contacts.socials.tiktok }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
