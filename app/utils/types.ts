export type WeekDay = typeof WEEK_DAYS[keyof typeof WEEK_DAYS]

export type Art = typeof ARTS[keyof typeof ARTS]

export interface IImageData {
  src: string
  alt: string
  text?: string
}

export type SenseiId = typeof SENSEI_IDS[keyof typeof SENSEI_IDS]

export interface ISensei {
  id: SenseiId
  name: string
  images: {
    profile: IImageData
    showcase: IImageData
  }
  contacts: {
    phones: string[]
    emails?: string[]
    socials?: {
      facebook?: string
      instagram?: string
      tiktok?: string
    }
  }
}

export type DojoId = typeof DOJO_IDS[keyof typeof DOJO_IDS]

export interface IDojo {
  id: DojoId
  name: string
  main: boolean
  address: string
  details: string
  senseis: ISensei[]
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
  sensei: ISensei
  art: Art
  enrollmentFee: number
  monthlyFee: number
  feeDetails?: string
  schedules: IClassSchedule[]
}
