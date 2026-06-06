<script setup lang="ts">
const { t, locale } = useI18n()
const dataStore = useDataStore()
const { showTips, CLASSES } = storeToRefs(dataStore)

useSeoMeta({ title: t('pages.classes.title') })

function getFormattedTime(schedule: IClassSchedule) {
  function leadingZero(time: number) {
    return time >= 10 ? time : `0${time}`
  }
  return `${leadingZero(schedule.timeStart.hour)}:${leadingZero(schedule.timeStart.minute)} às ${leadingZero(schedule.timeEnd.hour)}:${leadingZero(schedule.timeEnd.minute)}`
}
</script>

<template>
  <div class="page">
    <div class="container-content bg-white">
      <div class="wrapper-content wrapper-desktop">
        <h1>{{ $t('pages.classes.title') }}</h1>
        <span v-if="showTips" class="element-description">
          Um aviso sobre a escola ter diferentes filiais, cada uma com seus próprios senseis...
        </span>
        <p>Nam suscipit eu elit nec tempus. Suspendisse suscipit a elit at consequat. Integer purus metus, finibus ac enim et, dignissim cursus arcu.</p>
        <p>Donec cursus consequat nibh, sed aliquam massa rutrum sed. Vivamus posuere ut tellus eu tincidunt. In ultricies orci.</p>
        <span v-if="showTips" class="element-description">
          Lista todos os dojos e os detalhes das aulas...
        </span>
      </div>
    </div>
    <div v-for="item in CLASSES" :key="item.id" class="container-content odd:bg-white">
      <div class="wrapper-content wrapper-desktop">
        <div class="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-8">
          <div class="flex flex-col gap-4 lg:gap-6">
            <span class="art">
              <span class="art-name">
                {{ $t(`arts.${item.art}.name`) }}
              </span>
              {{ $t(`arts.${item.art}.description`) }}
            </span>
            <div class="flex flex-col">
              <span class="fee">
                {{ $t('pages.classes.enrollment') }}
                <span class="fee-price">R${{ item.enrollmentFee }},00</span>
              </span>
              <span class="fee">
                {{ $t('pages.classes.monthly') }}
                <span class="fee-price">R${{ item.monthlyFee }},00</span>
              </span>
              <span v-if="item.details" class="fee italic">
                {{ item.details?.[locale] }}
              </span>
            </div>
            <div class="flex flex-col gap-4 lg:gap-6">
              <div
                v-for="schedule in item.schedules"
                :key="`${schedule.weekDay}-${schedule.timeStart}-${schedule.timeEnd}`" class="schedule"
              >
                <span>
                  {{ $t('pages.classes.schedule', {
                    weekday: $t(`weekdays.${schedule.weekDay}`),
                    classType: schedule.inPerson ? $t('class-type.in-person') : $t('class-type.online'),

                  }) }}
                </span>
                <span class="font-medium">
                  {{ $t('pages.classes.time', {
                    time: getFormattedTime(schedule),
                  }) }}
                </span>
              </div>
            </div>
            <span v-if="item.experimental" class="experimental">
              {{ $t('pages.classes.experimental') }}
            </span>
          </div>
          <div class="flex flex-col gap-4 lg:gap-6">
            <div class="flex flex-col gap-1 lg:gap-2">
              <span class="sensei-name">
                {{ $t('general.sensei', { name: item.sensei.name }) }}
              </span>
              <span v-for="phone in item.sensei.contacts.phones" :key="phone" class="contact">
                {{ phone }}
              </span>
              <span v-for="email in item.sensei.contacts.emails" :key="email" class="contact">
                {{ email }}
              </span>
            </div>
            <NuxtImg
              :src="`/sensei/${item.sensei.id}/profile.jpg`"
              :alt="$t('general.sensei', { name: item.sensei.name })"
              width="512"
              height="512"
              sizes="sm:100vw lg:1280px"
              class="w-full h-full object-cover rounded-sm shadow-sm"
            />
          </div>
          <div class="flex flex-col gap-4 lg:gap-6">
            <div class="flex flex-col gap-1 lg:gap-2">
              <span class="dojo-title">
                {{ $t(`general.dojo`, {
                  type: item.dojo.main ? $t('dojo-type.main') : $t('dojo-type.branch'),
                  name: item.dojo.name,
                }) }}
              </span>
              <span class="dojo-address">
                {{ item.dojo.address }}
              </span>
              <span v-if="item.dojo.details" class="dojo-details italic">
                {{ item.dojo.details?.[locale] }}
              </span>
            </div>
            <iframe
              :src="item.dojo.mapSrc"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="w-full h-64 rounded-sm shadow-sm lg:h-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dojo-title {
  @apply text-xl font-medium lg:text-2xl;
}

.dojo-address {
  @apply text-lg lg:text-xl;
}

.dojo-details {
  @apply lg:text-lg;
}

.sensei-name {
  @apply text-xl font-medium lg:text-2xl;
}

.contact {
  @apply text-lg lg:text-xl;
}

.art {
  @apply flex flex-col text-xl font-medium  lg:text-2xl;
}

.art-name {
  @apply text-2xl lg:text-4xl;
}

.fee {
  @apply flex items-end gap-1 text-lg lg:text-xl;
}

.fee-price {
  @apply text-lg font-medium lg:text-xl;
}

.schedule {
  @apply flex flex-col text-lg lg:text-xl;
}

.experimental {
  @apply self-start px-4 py-2 text-lg text-accent border-l-4 border-accent rounded-sm lg:text-xl;
}
</style>
