export const SENSEI_IDS = {
  RUBEN_SPINOZA: 'ruben-espinoza',
  PAULO_KOMATSU: 'paulo-komatsu',
  BRUNO_CONTARDI: 'bruno-contardi',
} as const

export const SENSEIS_MAP: Record<
  SenseiId,
  ISensei
> = {
  [SENSEI_IDS.RUBEN_SPINOZA]: {
    id: SENSEI_IDS.RUBEN_SPINOZA,
    name: 'Ruben Spinoza',
    images: {
      profile: {
        src: `/sensei/${SENSEI_IDS.RUBEN_SPINOZA}/profile.png`,
        alt: 'Sensei Ruben Spinoza',
      },
      showcase: {
        src: `/sensei/${SENSEI_IDS.RUBEN_SPINOZA}/showcase.jpg`,
        alt: 'Sensei Ruben Spinoza',
      },
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
      profile: {
        src: `/sensei/${SENSEI_IDS.PAULO_KOMATSU}/profile.png`,
        alt: 'Sensei Paulo Komatsu',
      },
      showcase: {
        src: `/sensei/${SENSEI_IDS.PAULO_KOMATSU}/showcase.png`,
        alt: 'Sensei Paulo Komatsu',
      },
    },
    contacts: { phones: ['+55 (11) 97329-9660'] },
    introduction: {
      [LOCALES.PT_BR]: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer mattis lectus quam, ac elementum odio finibus at. Suspendisse tristique diam dapibus tempor eleifend.',
      [LOCALES.EN_US]: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer mattis lectus quam, ac elementum odio finibus at. Suspendisse tristique diam dapibus tempor eleifend.',
      [LOCALES.JA_JP]: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer mattis lectus quam, ac elementum odio finibus at. Suspendisse tristique diam dapibus tempor eleifend.',
    },
  },
  [SENSEI_IDS.BRUNO_CONTARDI]: {
    id: SENSEI_IDS.BRUNO_CONTARDI,
    name: 'Bruno Contardi',
    images: {
      profile: {
        src: `/sensei/${SENSEI_IDS.BRUNO_CONTARDI}/profile.png`,
        alt: 'Sensei Bruno Contardi',
      },
      showcase: {
        src: `/sensei/${SENSEI_IDS.BRUNO_CONTARDI}/showcase.png`,
        alt: 'Sensei Bruno Contardi',
      },
    },
    contacts: { phones: ['+55 (11) 93467-5745'] },
    introduction: {
      [LOCALES.PT_BR]: 'Fusce dignissim, tellus nec laoreet aliquam, mi quam eleifend arcu, nec lobortis nunc enim eget enim. Proin a tincidunt ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      [LOCALES.EN_US]: 'Fusce dignissim, tellus nec laoreet aliquam, mi quam eleifend arcu, nec lobortis nunc enim eget enim. Proin a tincidunt ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      [LOCALES.JA_JP]: 'Fusce dignissim, tellus nec laoreet aliquam, mi quam eleifend arcu, nec lobortis nunc enim eget enim. Proin a tincidunt ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
  },
}

export const DOJO_IDS = {
  MAIN_LIBERDADE: 'main-liberdade',
  BRANCH_LIBERDADE: 'branch-liberdade',
  BRANCH_VILA_MARIANA: 'branch-vila-mariana',
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
    ],
  },
  [DOJO_IDS.BRANCH_VILA_MARIANA]: {
    id: DOJO_IDS.BRANCH_VILA_MARIANA,
    name: 'Vila Mariana',
    main: false,
    address: 'Av. Lins de Vasconcelos, 3382 - Vila Mariana, São Paulo - SP, 04112-002',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.430301186471!2d-46.6361202236186!3d-23.588895978780936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b1a66331b%3A0xb45b00c44dec597b!2sAv.%20Lins%20de%20Vasconcelos%2C%203382%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004112-002!5e0!3m2!1sen!2sbr!4v1779952086442!5m2!1sen!2sbr',
    mapSrcStreet: 'https://www.google.com/maps/embed?pb=!4v1780022777589!6m8!1m7!1sWAH46OdHhajqtRTsUgDijQ!2m2!1d-23.58904878582535!2d-46.63345791685705!3f351.2725616864325!4f6.278855679881445!5f0.8538206096041024',
    details: '(Prédio Akita Kaikan)',
    senseis: [
      SENSEIS_MAP[SENSEI_IDS.BRUNO_CONTARDI],
    ],
  },
}
