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
        src: `/sensei/${SENSEI_IDS.RUBEN_SPINOZA}/showcase.png`,
        alt: 'Sensei Ruben Spinoza',
      },
    },
    contacts: {
      phones: ['+55 (11) 99710-1979'],
      emails: ['hkenjutsu@gmail.com'],
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
    details: '(Prédio Akita Kaikan)',
    senseis: [
      SENSEIS_MAP[SENSEI_IDS.BRUNO_CONTARDI],
    ],
  },
}
