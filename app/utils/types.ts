export type WeekDay = typeof WEEK_DAYS[keyof typeof WEEK_DAYS]

export type Art = typeof ARTS[keyof typeof ARTS]

export type Locales = typeof LOCALES[keyof typeof LOCALES]

export interface ILink {
  to: string
  name: string
}

export interface IImageData {
  src: string
  alt: string
  text?: string
}

export type SenseiId = typeof SENSEI_IDS[keyof typeof SENSEI_IDS]

export interface ISocials {
  facebook?: string
  instagram?: string
  tiktok?: string
}

export interface IContacts {
  phones?: string[]
  emails?: string[]
  socials?: ISocials
}

export interface ISensei {
  id: SenseiId
  name: string
  images: {
    profile: IImageData
    showcase: IImageData
  }
  contacts: IContacts
  introduction?: Record<Locales, string>
}

export type DojoId = typeof DOJO_IDS[keyof typeof DOJO_IDS]

export interface IDojo {
  id: DojoId
  name: string
  main: boolean
  address: string
  mapSrc: string
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
}

export interface IClass {
  dojo: IDojo
  sensei: ISensei
  art: Art
  enrollmentFee: number
  monthlyFee: number
  feeDetails?: string
  schedules: IClassSchedule[]
  experimental: boolean
}
