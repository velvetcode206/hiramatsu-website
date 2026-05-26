export type WeekDay = typeof WEEK_DAYS[keyof typeof WEEK_DAYS]

export type Art = typeof ARTS[keyof typeof ARTS]

export type Sensei = typeof SENSEIS[keyof typeof SENSEIS]

export interface IImageData {
  src: string
  alt: string
  text?: string
}

export interface IClassInstructor {
  name: Sensei
  image: IImageData
}

export interface IClassSchedule {
  weekDay: WeekDay
  inPerson: boolean
  timeStart: {
    hour: number
    minute: number
  }
  timeEnd: {
    hour: number
    minute: number
  }
  experimental: boolean
}

export interface IClass {
  title: string
  address: string
  contacts: string[]
  instructor: IClassInstructor
  art: Art
  enrollmentFee: number
  monthlyFee: number
  feeDetails?: string
  schedules: IClassSchedule[]
}
