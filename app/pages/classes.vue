<script setup lang="ts">
const classes: IClass[] = [
  {
    dojo: DOJOS_MAP[DOJO_IDS.MAIN_LIBERDADE],
    sensei: SENSEIS_MAP[SENSEI_IDS.RUBEN_SPINOZA],
    art: ARTS.KENJUTSU,
    enrollmentFee: 200,
    monthlyFee: 260,
    schedules: [
      {
        weekDay: WEEK_DAYS.TUESDAY,
        inPerson: true,
        timeStart: {
          hour: 19,
          minute: 30,
        },
        timeEnd: {
          hour: 20,
          minute: 30,
        },
      },
      {
        weekDay: WEEK_DAYS.SATURDAY,
        inPerson: true,
        timeStart: {
          hour: 14,
          minute: 30,
        },
        timeEnd: {
          hour: 16,
          minute: 0,
        },
      },
    ],
    experimental: true,
  },
  {
    dojo: DOJOS_MAP[DOJO_IDS.MAIN_LIBERDADE],
    sensei: SENSEIS_MAP[SENSEI_IDS.PAULO_KOMATSU],
    art: ARTS.BOJUTSU,
    enrollmentFee: 200,
    monthlyFee: 260,
    feeDetails: `Mensalidade de R$62,00 se já for praticante do ${ARTS.KENJUTSU}.`,
    schedules: [
      {
        weekDay: WEEK_DAYS.TUESDAY,
        inPerson: true,
        timeStart: {
          hour: 20,
          minute: 30,
        },
        timeEnd: {
          hour: 21,
          minute: 30,
        },
      },
      {
        weekDay: WEEK_DAYS.SATURDAY,
        inPerson: true,
        timeStart: {
          hour: 13,
          minute: 0,
        },
        timeEnd: {
          hour: 14,
          minute: 30,
        },
      },
    ],
    experimental: true,

  },
  {
    dojo: DOJOS_MAP[DOJO_IDS.BRANCH_VILA_MARIANA],
    sensei: SENSEIS_MAP[SENSEI_IDS.BRUNO_CONTARDI],
    art: ARTS.KENJUTSU,
    enrollmentFee: 200,
    monthlyFee: 260,
    schedules: [
      {
        weekDay: WEEK_DAYS.MONDAY,
        inPerson: true,
        timeStart: {
          hour: 7,
          minute: 0,
        },
        timeEnd: {
          hour: 8,
          minute: 30,
        },
      },
      {
        weekDay: WEEK_DAYS.WEDNESDAY,
        inPerson: true,
        timeStart: {
          hour: 7,
          minute: 0,
        },
        timeEnd: {
          hour: 8,
          minute: 30,
        },
      },
      {
        weekDay: WEEK_DAYS.FRIDAY,
        inPerson: true,
        timeStart: {
          hour: 7,
          minute: 0,
        },
        timeEnd: {
          hour: 8,
          minute: 30,
        },
      },
    ],
    experimental: true,

  },
]

const keyedList = classes.map(item => ({
  ...item,
  key: JSON.stringify(item),
}))

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
        <span class="element-description">
          Um aviso sobre a escola ter diferentes filiais, cada uma com seus próprios senseis...
        </span>
        <p>Nam suscipit eu elit nec tempus. Suspendisse suscipit a elit at consequat. Integer purus metus, finibus ac enim et, dignissim cursus arcu.</p>
        <p>Donec cursus consequat nibh, sed aliquam massa rutrum sed. Vivamus posuere ut tellus eu tincidunt. In ultricies orci.</p>
        <span class="element-description">
          Lista todos os dojos e os detalhes das aulas...
        </span>
      </div>
    </div>
    <div v-for="item in keyedList" :key="item.key" class="container-content odd:bg-white">
      <div class="wrapper-content wrapper-desktop">
        <div class="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-8">
          <div class="flex flex-col gap-2 lg:gap-4">
            <span class="dojo-title">
              {{ $t(`pages.classes.dojo`, {
                type: item.dojo.main ? $t('dojo-type.main') : $t('dojo-type.branch'),
                name: item.dojo.name,
              }) }}
            </span>
            <span class="dojo-address">
              {{ item.dojo.address }}
            </span>
            <iframe
              :src="item.dojo.mapSrc"
              allowfullscreen="false"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="w-full h-64 lg:h-full"
            />
          </div>
          <div class="col-span-2 flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-8">
            <NuxtImg
              :src="item.sensei.images.profile.src"
              :alt="item.sensei.images.profile.alt"
              width="512"
              height="512"
              sizes="sm:100vw lg:1280px"
              class="w-full h-full object-cover rounded-sm"
            />
            <div class="flex flex-col gap-2 lg:gap-4">
              <div class="flex flex-col gap-2">
                <span class="sensei-name">
                  {{ $t('pages.classes.sensei', { name: item.sensei.name }) }}
                </span>
                <span v-for="phone in item.sensei.contacts.phones" :key="phone" class="contact">
                  {{ phone }}
                </span>
                <span v-for="email in item.sensei.contacts.emails" :key="email" class="contact">
                  {{ email }}
                </span>
              </div>
              <span class="art">
                <span class="art-name">
                  {{ $t(`arts.${item.art}.name`) }}
                </span>
                {{ $t(`arts.${item.art}.description`) }}
              </span>
              <div class="flex flex-col gap-2">
                <span class="fee">
                  Matrícula:
                  <span class="fee-price">R${{ item.enrollmentFee }},00</span>
                </span>
                <span class="fee">
                  Mensalidade:
                  <span class="fee-price">R${{ item.monthlyFee }},00</span>
                </span>
                <span v-if="item.feeDetails" class="fee italic">
                  {{ item.feeDetails }}
                </span>
              </div>
              <div class="flex flex-col gap-2 lg:gap-4">
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
          </div>
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
  @apply text-2xl font-medium lg:text-4xl;
}

.contact {
  @apply text-lg lg:text-xl;
}

.art {
  @apply flex flex-col gap-2 text-xl lg:text-2xl;
}

.art-name {
  @apply text-2xl font-medium lg:text-4xl;
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
  @apply self-start px-4 py-2 text-lg text-accent border border-accent rounded-sm lg:text-xl;
}
</style>
