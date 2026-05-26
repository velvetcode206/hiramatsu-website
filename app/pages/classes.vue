<script setup lang="ts">
const classes: IClass[] = [
  {
    title: 'Sede Liberdade',
    address: 'R. Thomaz Gonzaga, 95 - Liberdade, São Paulo - SP, 01506-020',
    contacts: [
      '+55 (11) 99710-1979',
    ],
    instructor: {
      name: SENSEIS.RUBEN_SPINOZA,
      image: {
        src: `/sensei/${SENSEIS.RUBEN_SPINOZA}/classes.png`,
        alt: `Sensei ${SENSEIS.RUBEN_SPINOZA}`,
        text: 'Descrição do Sensei.',
      },
    },
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
        experimental: true,
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
        experimental: true,
      },
    ],
  },
  {
    title: 'Sede Liberdade',
    address: 'R. Thomaz Gonzaga, 95 - Liberdade, São Paulo - SP, 01506-020',
    contacts: [
      '+55 (11) 97329-9660',
    ],
    instructor: {
      name: SENSEIS.PAULO_KOMATSU,
      image: {
        src: `/sensei/${SENSEIS.PAULO_KOMATSU}/classes.png`,
        alt: `Sensei ${SENSEIS.PAULO_KOMATSU}`,
        text: 'Descrição do Sensei.',
      },
    },
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
        experimental: true,
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
        experimental: true,
      },
    ],
  },
  {
    title: 'Filial Vila Mariana',
    address: 'Av. Lins de Vasconcelos, 3382 - Vila Mariana, São Paulo - SP, 04112-002',
    contacts: [
      '+55 (11) 93467-5745',
    ],
    instructor: {
      name: SENSEIS.BRUNO_CONTARDI,
      image: {
        src: `/sensei/${SENSEIS.BRUNO_CONTARDI}/classes.png`,
        alt: `Sensei ${SENSEIS.BRUNO_CONTARDI}`,
        text: 'Descrição do Sensei.',
      },
    },
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
        experimental: true,
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
        experimental: true,
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
        experimental: true,
      },
    ],
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
  <div>
    <div>
      <h1>Classes</h1>
      <h2>A disclaimer of the school different branches with different senseis, and how it is always expanding.</h2>
      <p>Nam suscipit eu elit nec tempus. Suspendisse suscipit a elit at consequat. Integer purus metus, finibus ac enim et, dignissim cursus arcu.</p>
      <p>Donec cursus consequat nibh, sed aliquam massa rutrum sed. Vivamus posuere ut tellus eu tincidunt. In ultricies orci. </p>
    </div>
    <div>
      <div v-for="item in keyedList" :key="item.key">
        <div>
          <p>{{ item.instructor.name }}</p>
          <div>
            <NuxtImg
              :src="item.instructor.image.src"
              :alt="item.instructor.image.alt"
              class="img-profile"
              sizes="sm:100vw lg:512px"
            />
            <p>{{ item.instructor.image.text }}</p>
          </div>
        </div>
        <div>
          <p>{{ item.title }}</p>
          <p>{{ item.address }}</p>
          <div>
            <p v-for="contact in item.contacts" :key="contact">
              {{ contact }}
            </p>
          </div>
          <p>{{ item.art }}</p>
          <p>Matrícula: R${{ item.enrollmentFee }},00</p>
          <p>Mensalidade: R${{ item.enrollmentFee }},00</p>
          <div>
            <div v-for="schedule in item.schedules" :key="`${schedule.weekDay}-${schedule.timeStart}-${schedule.timeEnd}`">
              <p>{{ $t(`weekdays.${schedule.weekDay}`) }}</p>
              <p>{{ schedule.inPerson }}</p>
              <p>Horário: {{ getFormattedTime(schedule) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
