export const SENSEI_IDS = {
  RUBEN_SPINOZA: 'ruben-espinoza',
  PAULO_KOMATSU: 'paulo-komatsu',
  LUCAS: 'lucas',
  UBIRAJARA: 'ubirajara',
} as const

export const SENSEIS_MAP: Record<
  SenseiId,
  ISensei
> = {
  [SENSEI_IDS.RUBEN_SPINOZA]: {
    id: SENSEI_IDS.RUBEN_SPINOZA,
    name: 'Ruben Spinoza',
    images: {
      profile: `/sensei/${SENSEI_IDS.RUBEN_SPINOZA}/profile.png`,
      showcase: `/sensei/${SENSEI_IDS.RUBEN_SPINOZA}/showcase.jpg`,
    },
    contacts: {
      phones: ['+55 (11) 99710-1979'],
      emails: ['hkenjutsu@gmail.com'],
    },
    introduction: {
      [LOCALES.PT_BR]: 'Cras dolor neque, dignissim vitae urna quis, rutrum pharetra ex. Cras ac purus nec purus euismod auctor eu id lectus. Mauris vel velit facilisis, pharetra ligula ut, imperdiet risus.',
      [LOCALES.EN_US]: 'Cras dolor neque, dignissim vitae urna quis, rutrum pharetra ex. Cras ac purus nec purus euismod auctor eu id lectus. Mauris vel velit facilisis, pharetra ligula ut, imperdiet risus.',
      [LOCALES.JA_JP]: 'Cras dolor neque, dignissim vitae urna quis, rutrum pharetra ex. Cras ac purus nec purus euismod auctor eu id lectus. Mauris vel velit facilisis, pharetra ligula ut, imperdiet risus.',
    },
  },
  [SENSEI_IDS.PAULO_KOMATSU]: {
    id: SENSEI_IDS.PAULO_KOMATSU,
    name: 'Paulo Komatsu',
    images: {
      profile: `/sensei/${SENSEI_IDS.PAULO_KOMATSU}/profile.png`,
      showcase: `/sensei/${SENSEI_IDS.PAULO_KOMATSU}/showcase.png`,
    },
    contacts: { phones: ['+55 (11) 97329-9660'] },
    introduction: {
      [LOCALES.PT_BR]: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer mattis lectus quam, ac elementum odio finibus at. Suspendisse tristique diam dapibus tempor eleifend.',
      [LOCALES.EN_US]: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer mattis lectus quam, ac elementum odio finibus at. Suspendisse tristique diam dapibus tempor eleifend.',
      [LOCALES.JA_JP]: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer mattis lectus quam, ac elementum odio finibus at. Suspendisse tristique diam dapibus tempor eleifend.',
    },
  },
  [SENSEI_IDS.LUCAS]: {
    id: SENSEI_IDS.LUCAS,
    name: 'Lucas',
    images: {
      profile: `/sensei/${SENSEI_IDS.LUCAS}/profile.png`,
      showcase: `/sensei/${SENSEI_IDS.LUCAS}/showcase.png`,
    },
    contacts: { phones: ['+55 (11) 95460-4869'] },
    introduction: {
      [LOCALES.PT_BR]: 'Fusce dignissim, tellus nec laoreet aliquam, mi quam eleifend arcu, nec lobortis nunc enim eget enim. Proin a tincidunt ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      [LOCALES.EN_US]: 'Fusce dignissim, tellus nec laoreet aliquam, mi quam eleifend arcu, nec lobortis nunc enim eget enim. Proin a tincidunt ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      [LOCALES.JA_JP]: 'Fusce dignissim, tellus nec laoreet aliquam, mi quam eleifend arcu, nec lobortis nunc enim eget enim. Proin a tincidunt ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
  },
  [SENSEI_IDS.UBIRAJARA]: {
    id: SENSEI_IDS.UBIRAJARA,
    name: 'Ubirajara',
    images: {
      profile: `/sensei/${SENSEI_IDS.UBIRAJARA}/profile.png`,
      showcase: `/sensei/${SENSEI_IDS.UBIRAJARA}/showcase.png`,
    },
    contacts: { phones: ['+55 (91) 98561-4772'] },
    introduction: {
      [LOCALES.PT_BR]: 'Cras nisl est, vestibulum ut sollicitudin vel, ullamcorper in ligula. Etiam eget odio vitae turpis pellentesque tincidunt fusce. ',
      [LOCALES.EN_US]: 'Cras nisl est, vestibulum ut sollicitudin vel, ullamcorper in ligula. Etiam eget odio vitae turpis pellentesque tincidunt fusce. ',
      [LOCALES.JA_JP]: 'Cras nisl est, vestibulum ut sollicitudin vel, ullamcorper in ligula. Etiam eget odio vitae turpis pellentesque tincidunt fusce. ',
    },
  },
}

export const DOJO_IDS = {
  MAIN_LIBERDADE: 'main-liberdade',
  BRANCH_LIBERDADE: 'branch-liberdade',
  BRANCH_BELEM: 'branch-belem',
} as const

export const DOJOS_MAP: Record<
  DojoId,
  IDojo
> = {
  [DOJO_IDS.MAIN_LIBERDADE]: {
    id: DOJO_IDS.MAIN_LIBERDADE,
    name: 'Liberdade',
    main: true,
    address: 'R. Thomaz Gonzaga, 95 - Liberdade, São Paulo - SP, 01506-020',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.300100539985!2d-46.63805692361926!3d-23.557662978802448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a898920739%3A0xba51baf2d6101d2!2sR.%20Thomaz%20Gonzaga%2C%2095%20-%20Liberdade%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001506-020!5e0!3m2!1sen!2sbr!4v1779945841154!5m2!1sen!2sbr',
    mapSrcStreet: 'https://www.google.com/maps/embed?pb=!4v1780022671994!6m8!1m7!1s1BoK9NcaPCaOivn04Bvxmg!2m2!1d-23.55776672182558!2d-46.63549492988123!3f24.95248611926823!4f-7.13161386349681!5f0.7820865974627469',
    details: '(Prédio da Associação Iwate Kenjinkai do Brasil)',
    senseis: [
      SENSEIS_MAP[SENSEI_IDS.RUBEN_SPINOZA],
      SENSEIS_MAP[SENSEI_IDS.PAULO_KOMATSU],
    ],
  },
  [DOJO_IDS.BRANCH_LIBERDADE]: {
    id: DOJO_IDS.BRANCH_LIBERDADE,
    name: 'ACAL',
    main: false,
    address: 'Av. da Liberdade, 365 - Liberdade, São Paulo - SP, 01503-000',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3423833975185!2d-46.638596623619364!3d-23.556143678803398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a918aba5b1%3A0x181f42651c5019c0!2sAv.%20da%20Liberdade%2C%20365%20-%20S%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001503-000!5e0!3m2!1sen!2sbr!4v1779952039592!5m2!1sen!2sbr',
    mapSrcStreet: 'https://www.google.com/maps/embed?pb=!4v1780022734297!6m8!1m7!1s3UjvSdh_NpPTnGwf_7-UrA!2m2!1d-23.55613672741573!2d-46.63614644115901!3f96.63962630937864!4f5.122092208698248!5f1.38054748956749',
    details: '(Prédio da Associação Cultural Assistencial Liberdade)',
    senseis: [
      SENSEIS_MAP[SENSEI_IDS.PAULO_KOMATSU],
      SENSEIS_MAP[SENSEI_IDS.LUCAS],

    ],
  },
  [DOJO_IDS.BRANCH_BELEM]: {
    id: DOJO_IDS.BRANCH_BELEM,
    name: 'Sede do Paysandu',
    main: false,
    address: 'Av. Nª Sra. de Nazaré, 404 - Nazaré, Belém - PA, 66035-115',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.464492779921!2d-48.48951792119059!3d-1.4532606840037046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48e8ff707bcfd%3A0xd591e0fe10197db1!2sSede%20do%20Paysandu!5e0!3m2!1sen!2sbr!4v1780261572304!5m2!1sen!2sbr',
    mapSrcStreet: 'https://www.google.com/maps/embed?pb=!4v1780261613989!6m8!1m7!1sManMUC24MY7rdEY9BX0Gpg!2m2!1d-1.453044140885811!2d-48.4893616092976!3f146.12447701989163!4f8.176983776954529!5f0.7820865974627469',
    details: '(Prédio da Sede Social Paysandu)',
    senseis: [
      SENSEIS_MAP[SENSEI_IDS.UBIRAJARA],

    ],
  },
}

export const CLASSES: IClass[] = [
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
    dojo: DOJOS_MAP[DOJO_IDS.BRANCH_LIBERDADE],
    sensei: SENSEIS_MAP[SENSEI_IDS.LUCAS],
    art: ARTS.KENJUTSU,
    enrollmentFee: 200,
    monthlyFee: 260,
    schedules: [
      {
        weekDay: WEEK_DAYS.THURSDAY,
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
  {
    dojo: DOJOS_MAP[DOJO_IDS.BRANCH_LIBERDADE],
    sensei: SENSEIS_MAP[SENSEI_IDS.PAULO_KOMATSU],
    art: ARTS.BOJUTSU,
    enrollmentFee: 200,
    monthlyFee: 260,
    schedules: [
      {
        weekDay: WEEK_DAYS.THURSDAY,
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
  {
    dojo: DOJOS_MAP[DOJO_IDS.BRANCH_BELEM],
    sensei: SENSEIS_MAP[SENSEI_IDS.UBIRAJARA],
    art: ARTS.KENJUTSU,
    enrollmentFee: 200,
    monthlyFee: 260,
    schedules: [
      {
        weekDay: WEEK_DAYS.SATURDAY,
        inPerson: true,
        timeStart: {
          hour: 14,
          minute: 0,
        },
        timeEnd: {
          hour: 16,
          minute: 0,
        },
      },
    ],
    experimental: true,
  },
] as const
