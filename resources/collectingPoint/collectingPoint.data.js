const collectingPoints = [
  {
    name: 'KEDGE Business School',
    address: {
      street: 'Domaine de Luminy, Rue Antoine Bourdelle',
      city: 'Marseille',
      zip: '13009',
    },
    coordonates: {
      latitude: 43.236455,
      longitude: 5.433549,
    },
    image: 'kedge-textile.jpg',
    logo: 'logo_kedge.png',
    isTemporary: true,
    collectings: [
      {
        article: 'bulk',
        label: '1 tote-bag de textile',
        reward: 'Oups pardon ! TES récompenses',
        rewards: {
          title: 'Oups pardon ! TES récompenses',
          items: [
            { company: 'BackMarket', reward: "15€ sur 200€ d'achat" },
            { company: 'Pumpkin', reward: '10€ crédité sur ton compte' },
          ],
          note: 'Une fois ton dépôt effectué, tu recevras tes récompenses par mail.',
        },
        successLabel: 'Ton tote-bag de textile',
        successWhere: 'sur le CAMPUS HALL B',
        successWhen: 'Du 18 au 22 janvier',
        startDate: '2020-10-16',
        endDate: '2021-01-22',
      },
      {
        image: 'kedge-smartphone.jpg',
        article: 'smartphone',
        label: '1 smartphone',
        reward: 'Oups pardon ! TES récompenses',
        successLabel: 'Ton smartphone',
        successWhere: 'sur le CAMPUS HALL B',
        successWhen: 'Du 18 au 22 janvier',
        startDate: '2020-10-16',
        endDate: '2021-01-22',
      },
    ],
  },
  {
    name: 'CABESTO',
    isUpComing: true,
    address: {
      street: "Zone commerciale d'Auchan ZAC Le, 2 Avenue du Pastre",
      city: 'Aubagne',
      zip: '13400',
    },
    coordonates: {
      latitude: 43.297438,
      longitude: 5.596059,
    },
    image: 'cabesto_aubagne.jpg',
    logo: 'LOGO_CABESTO.jpg',
    collectings: [
      {
        article: 'wetsuit',
        label: '1 combinaison néoprène',
        reward: "10€ pour 80€ d'achat",
        successLabel: 'Ta combinaison néoprène',
      },
    ],
  },
  {
    name: 'Lily Paillettes',
    address: {
      street: '83 Avenue de la Corse',
      city: 'Marseille',
      zip: '13007',
    },
    coordonates: {
      latitude: 43.288675,
      longitude: 5.359795,
    },
    image: 'Lily-Paillettes.jpg',
    logo: 'LOGO_Lily-Paillettes.jpg',
    collectings: [
      {
        article: 'bulk',
        successLabel: 'Ton tote-bag de textile',
        label: '1 tote-bag de textile en vrac',
        reward: '10% sur toute la boutique',
      },
      {
        article: 'jean',
        successLabel: 'Tes 2 jeans',
        label: '2 jeans',
        reward: '10% sur toute la boutique',
      },
    ],
  },
  {
    name: 'For Atao',
    isUpComing: true,
    address: {
      street: '8 rue du chantier',
      city: 'Marseille',
      zip: '13007',
    },
    coordonates: {
      latitude: 43.292859,
      longitude: 5.368629,
    },
    image: 'FOR-ATAO.jpg',
    logo: 'LOGO_FOR-ATAO.jpg',
    collectings: [
      {
        article: 'bulk',
        successLabel: 'Ton tote-bag de textile',
        label: '1 tote-bag de textile en vrac',
        reward: '10% sur toute la boutique',
      },
      {
        article: 'jean',
        successLabel: 'Tes 2 jeans',
        label: '2 jeans',
        reward: '10% sur toute la boutique',
      },
    ],
  },
  {
    name: 'Azul',
    isUpComing: true,
    address: {
      street: '73 Rue Francis Davso',
      city: 'Marseille',
      zip: '13001',
    },
    coordonates: {
      latitude: 43.292923,
      longitude: 5.375277,
    },
    image: 'AZUL.jpg',
    logo: 'LOGO_AZUL.jpg',
    collectings: [
      {
        article: 'bulk',
        successLabel: 'Ton tote-bag de textile',
        label: '1 tote-bag de textile en vrac',
        reward: '10% sur toute la boutique',
      },
      {
        article: 'jean',
        successLabel: 'Tes 2 jeans',
        label: '2 jeans',
        reward: '10% sur toute la boutique',
      },
    ],
  },
  {
    name: 'AUSSIH',
    isUpComing: true,
    address: {
      street: '9 rue Chateaubriand',
      city: 'Marseille',
      zip: '13007',
    },
    coordonates: {
      latitude: 43.288148,
      longitude: 5.359171,
    },
    image: 'AUSSIH.jpg',
    logo: 'LOGO_AUSSIH.jpg',
    collectings: [
      {
        article: 'bulk',
        successLabel: 'Ton tote-bag de textile',
        label: '1 tote-bag de textile en vrac',
        reward: '10% sur toute la boutique',
      },
      {
        article: 'jean',
        successLabel: 'Tes 2 jeans',
        label: '2 jeans',
        reward: '10% sur toute la boutique',
      },
    ],
  },
  {
    name: 'HappeSmoke',
    address: {
      street: 'Forum des Carmes, Boulevard de la République',
      city: 'Istres',
      zip: '13800',
    },
    coordonates: {
      latitude: 43.513333,
      longitude: 4.987145,
    },
    image: 'HAPPESMOKE-ISTRES.jpg',
    logo: 'LOGO_HAPPESMOKE.png',
    collectings: [
      {
        article: 'battery',
        successLabel: 'Tes 4 batteries de cigarette électronique',
        label: '4 batteries de cigarette électronique',
        reward: '10% sur la boutique',
      },
      {
        article: 'mod',
        successLabel: 'Ta cigarette électronique',
        label: '1 cigarette électronique',
        reward: "20% sur l'achat d'un nouveau KIT ou liquide",
      },
      {
        article: 'smartphone',
        successLabel: 'Ton smartphone',
        label: '1 smartphone',
        reward: "20% sur l'achat d'un nouveau KIT ou liquide ",
      },
    ],
  },
  {
    name: 'HappeSmoke',
    address: {
      street: 'Avenue Emile Cotte, Centre Commercial Carrefour',
      city: 'Chateauneuf-les-Martigues',
      zip: '13220',
    },
    coordonates: {
      latitude: 43.393648,
      longitude: 5.134843,
    },
    image: 'HAPPESMOKE-CHATEAU-NEUF-MARTIGUES.jpg',
    logo: 'LOGO_HAPPESMOKE.png',
    collectings: [
      {
        article: 'battery',
        successLabel: 'Tes 4 batteries de cigarette électronique',
        label: '4 batteries de cigarette électronique',
        reward: '10% sur la boutique',
      },
      {
        article: 'mod',
        successLabel: 'Ta cigarette électronique',
        label: '1 cigarette électronique',
        reward: "20% sur l'achat d'un nouveau KIT ou liquide",
      },
      {
        article: 'smartphone',
        successLabel: 'Ton smartphone',
        label: '1 smartphone',
        reward: "20% sur l'achat d'un nouveau KIT ou liquide ",
      },
    ],
  },
  {
    name: 'HappeSmoke',
    address: {
      street: 'Boulevard Paul Eluard Centre Commercial AUCHAN',
      city: 'Martigues',
      zip: '13500',
    },
    coordonates: {
      latitude: 43.423453,
      longitude: 5.051049,
    },
    image: 'HAPPESMOKE-MARTIGUES.jpg',
    logo: 'LOGO_HAPPESMOKE.png',
    collectings: [
      {
        article: 'battery',
        successLabel: 'Tes 4 batteries de cigarette électronique',
        label: '4 batteries de cigarette électronique',
        reward: '10% sur la boutique',
      },
      {
        article: 'mod',
        successLabel: 'Ta cigarette électronique',
        label: '1 cigarette électronique',
        reward: "20% sur l'achat d'un nouveau KIT ou liquide",
      },
      {
        article: 'smartphone',
        successLabel: 'Ton smartphone',
        label: '1 smartphone',
        reward: "20% sur l'achat d'un nouveau KIT ou liquide ",
      },
    ],
  },
  {
    name: 'HappeSmoke',
    address: {
      street: 'ZAC, Pont des Charrettes',
      city: 'Uzes',
      zip: '30700',
    },
    coordonates: {
      latitude: 43.990414,
      longitude: 4.429492,
    },
    image: 'HAPPESMOKE-UZES.jpg',
    logo: 'LOGO_HAPPESMOKE.png',
    collectings: [
      {
        article: 'battery',
        successLabel: 'Tes 4 batteries de cigarette électronique',
        label: '4 batteries de cigarette électronique',
        reward: '10% sur la boutique',
      },
      {
        article: 'mod',
        successLabel: 'Ta cigarette électronique',
        label: '1 cigarette électronique',
        reward: "20% sur l'achat d'un nouveau KIT ou liquide",
      },
      {
        article: 'smartphone',
        successLabel: 'Ton smartphone',
        label: '1 smartphone',
        reward: "20% sur l'achat d'un nouveau KIT ou liquide ",
      },
    ],
  },
  {
    name: 'HappeSmoke',
    address: {
      street: 'Centre Commercial Carrefour Beaucaire Route de Nîmes - Lieu-dit Genestet',
      city: 'Beaucaire',
      zip: '30300',
    },
    coordonates: {
      latitude: 43.816618,
      longitude: 4.614025,
    },
    image: 'HAPPESMOKE-BEAUCAIRE.jpg',
    logo: 'LOGO_HAPPESMOKE.png',
    collectings: [
      {
        article: 'battery',
        successLabel: 'Tes 4 batteries de cigarette électronique',
        label: '4 batteries de cigarette électronique',
        reward: '10% sur la boutique',
      },
      {
        article: 'mod',
        successLabel: 'Ta cigarette électronique',
        label: '1 cigarette électronique',
        reward: "20% sur l'achat d'un nouveau KIT ou liquide",
      },
      {
        article: 'smartphone',
        successLabel: 'Ton smartphone',
        label: '1 smartphone',
        reward: "20% sur l'achat d'un nouveau KIT ou liquide ",
      },
    ],
  },
  {
    name: 'HappeSmoke',
    address: {
      street: '112 avenue de Hambourg, Centre Commercial Carrefour Bonneveine',
      city: 'Marseille',
      zip: '13008',
    },
    coordonates: {
      latitude: 43.248968,
      longitude: 5.389613,
    },
    image: 'HAPPESMOKE-BONNEVAINE.jpg',
    logo: 'LOGO_HAPPESMOKE.png',
    collectings: [
      {
        article: 'battery',
        successLabel: 'Tes 4 batteries de cigarette électronique',
        label: '4 batteries de cigarette électronique',
        reward: '10% sur la boutique',
      },
      {
        article: 'mod',
        successLabel: 'Ta cigarette électronique',
        label: '1 cigarette électronique',
        reward: "20% sur l'achat d'un nouveau KIT ou liquide",
      },
      {
        article: 'smartphone',
        successLabel: 'Ton smartphone',
        label: '1 smartphone',
        reward: "20% sur l'achat d'un nouveau KIT ou liquide ",
      },
    ],
  },
  {
    name: 'HappeSmoke',
    address: {
      street: 'Centre Commercial Centre Bourse, 17 Cours Belsunce',
      city: 'Marseille',
      zip: '13001',
    },
    coordonates: {
      latitude: 43.297774,
      longitude: 5.376046,
    },
    image: 'HAPPESMOKE-MARSEILLE.jpg',
    logo: 'LOGO_HAPPESMOKE.png',
    collectings: [
      {
        article: 'battery',
        successLabel: 'Tes 4 batteries de cigarette électronique',
        label: '4 batteries de cigarette électronique',
        reward: '10% sur la boutique',
      },
      {
        article: 'mod',
        successLabel: 'Ta cigarette électronique',
        label: '1 cigarette électronique',
        reward: "20% sur l'achat d'un nouveau KIT ou liquide",
      },
      {
        article: 'smartphone',
        successLabel: 'Ton smartphone',
        label: '1 smartphone',
        reward: "20% sur l'achat d'un nouveau KIT ou liquide ",
      },
    ],
  },
  {
    name: 'HappeSmoke',
    address: {
      street: 'Centre Commercial Géant Barneoud, Avenue du Plan de Campagne',
      city: 'Les Pennes-Mirabeau',
      zip: '13170',
    },
    coordonates: {
      latitude: 43.415042,
      longitude: 5.362548,
    },
    image: 'HAPPESMOKE-PLANDECAMPAGNE.jpg',
    logo: 'LOGO_HAPPESMOKE.png',
    collectings: [
      {
        article: 'battery',
        successLabel: 'Tes 4 batteries de cigarette électronique',
        label: '4 batteries de cigarette électronique',
        reward: '10% sur la boutique',
      },
      {
        article: 'mod',
        successLabel: 'Ta cigarette électronique',
        label: '1 cigarette électronique',
        reward: "20% sur l'achat d'un nouveau KIT ou liquide",
      },
      {
        article: 'smartphone',
        successLabel: 'Ton smartphone',
        label: '1 smartphone',
        reward: "20% sur l'achat d'un nouveau KIT ou liquide ",
      },
    ],
  },
  {
    name: 'HappeSmoke',
    address: {
      street: '46 Chemin de la Petite Bastide',
      city: 'Venelles',
      zip: '13770',
    },
    coordonates: {
      latitude: 43.58577,
      longitude: 5.475701,
    },
    image: 'HAPPESMOKE-VENELLES.jpg',
    logo: 'LOGO_HAPPESMOKE.png',
    collectings: [
      {
        article: 'battery',
        successLabel: 'Tes 4 batteries de cigarette électronique',
        label: '4 batteries de cigarette électronique',
        reward: '10% sur la boutique',
      },
      {
        article: 'mod',
        successLabel: 'Ta cigarette électronique',
        label: '1 cigarette électronique',
        reward: "20% sur l'achat d'un nouveau KIT ou liquide",
      },
      {
        article: 'smartphone',
        successLabel: 'Ton smartphone',
        label: '1 smartphone',
        reward: "20% sur l'achat d'un nouveau KIT ou liquide ",
      },
    ],
  },
  {
    name: 'HappeSmoke',
    address: {
      street: 'Centre Commercial Carrefour Port de Bouc Route Nationale Fos Martigues',
      city: 'Porc-de-Bouc',
      zip: '13110',
    },
    coordonates: {
      latitude: 43.412302,
      longitude: 5.001674,
    },
    image: 'HAPPESMOKE-PORTDEBOUC.jpg',
    logo: 'LOGO_HAPPESMOKE.png',
    collectings: [
      {
        article: 'battery',
        successLabel: 'Tes 4 batteries de cigarette électronique',
        label: '4 batteries de cigarette électronique',
        reward: '10% sur la boutique',
      },
      {
        article: 'mod',
        successLabel: 'Ta cigarette électronique',
        label: '1 cigarette électronique',
        reward: "20% sur l'achat d'un nouveau KIT ou liquide",
      },
      {
        article: 'smartphone',
        successLabel: 'Ton smartphone',
        label: '1 smartphone',
        reward: "20% sur l'achat d'un nouveau KIT ou liquide ",
      },
    ],
  },
  {
    name: 'HappeSmoke',
    address: {
      street: 'Route de Gémenos, Centre Commercial Auchan ',
      city: 'Aubagne',
      zip: '13400',
    },
    coordonates: {
      latitude: 43.294064,
      longitude: 5.591581,
    },
    image: 'HAPPESMOKE-AUBAGNE.jpg',
    logo: 'LOGO_HAPPESMOKE.png',
    collectings: [
      {
        article: 'battery',
        successLabel: 'Tes 4 batteries de cigarette électronique',
        label: '4 batteries de cigarette électronique',
        reward: '10% sur la boutique',
      },
      {
        article: 'mod',
        successLabel: 'Ta cigarette électronique',
        label: '1 cigarette électronique',
        reward: "20% sur l'achat d'un nouveau KIT ou liquide",
      },
      {
        article: 'smartphone',
        successLabel: 'Ton smartphone',
        label: '1 smartphone',
        reward: "20% sur l'achat d'un nouveau KIT ou liquide ",
      },
    ],
  },
  {
    name: 'Office Dépôt Montgrand',
    address: {
      street: '26 rue Montgrand',
      city: 'Marseille',
      zip: '13006',
    },
    coordonates: {
      latitude: 43.2911857,
      longitude: 5.3625064,
    },
    image: 'OFFICE_DEPOT_MONGRAND.jpg',
    logo: 'LOGO_OFFICE_DEPOT.png',
    collectings: [
      {
        article: 'toner',
        label: '5 cartouches ou 5 toners',
        reward: '2,5€ pour 5 cartouches ou 5€ pour 5 toners',
        successLabel: 'Tes 5 cartouches ou 5 toners',
      },
    ],
  },
  {
    name: 'Office Dépôt Cantini',
    address: {
      street: '65 avenue Jules Cantini',
      city: 'Marseille',
      zip: '13006',
    },
    coordonates: {
      latitude: 43.2838366,
      longitude: 5.3862223,
    },
    image: 'OFFICE_DEPOT_MARSEILLE.jpg',
    logo: 'LOGO_OFFICE_DEPOT.png',
    collectings: [
      {
        article: 'toner',
        label: '5 cartouches ou 5 toners',
        reward: '2,5€ pour 5 cartouches ou 5€ pour 5 toners',
        successLabel: 'Tes 5 cartouches ou 5 toners',
      },
    ],
  },
  {
    name: 'Office Dépôt Aubagne',
    address: {
      street: '328, Route de la Ciotat, RD 559A, Quartier Les Vaux, Rond point Lakanal',
      city: 'Aubagne',
      zip: '13400',
    },
    coordonates: {
      latitude: 43.2849592,
      longitude: 5.578939,
    },
    image: 'OFFICE_DEPOT_AUBAGNE.jpg',
    logo: 'LOGO_OFFICE_DEPOT.png',
    collectings: [
      {
        article: 'toner',
        label: '5 cartouches ou 5 toners',
        reward: '2,5€ pour 5 cartouches ou 5€ pour 5 toners',
        successLabel: 'Tes 5 cartouches ou 5 toners',
      },
    ],
  },
  {
    name: 'Office Dépôt Toulon',
    address: {
      street: 'Avenue de l’Université',
      city: 'La Valette du Var',
      zip: '83160',
    },
    coordonates: {
      latitude: 43.1377739,
      longitude: 6.0072467,
    },
    image: 'OFFICE_DEPOT_TOULON.jpg',
    logo: 'LOGO_OFFICE_DEPOT.png',
    collectings: [
      {
        article: 'toner',
        label: '5 cartouches ou 5 toners',
        reward: '2,5€ pour 5 cartouches ou 5€ pour 5 toners',
        successLabel: 'Tes 5 cartouches ou 5 toners',
      },
    ],
  },
  {
    name: 'Office Dépôt Avignon',
    address: {
      street: '19 chemin de la Cristole',
      city: 'Monfavet',
      zip: '84140',
    },
    coordonates: {
      latitude: 43.9255499,
      longitude: 4.8468325,
    },
    image: 'OFFICE_DEPOT_AVIGNON.jpg',
    logo: 'LOGO_OFFICE_DEPOT.png',
    collectings: [
      {
        article: 'toner',
        label: '5 cartouches ou 5 toners',
        reward: '2,5€ pour 5 cartouches ou 5€ pour 5 toners',
        successLabel: 'Tes 5 cartouches ou 5 toners',
      },
    ],
  },
  // {
  //   name: 'Librairie Pantagruel',
  //   address: {
  //     street: '44 rue Paul Codaccioni',
  //     city: 'Marseille',
  //     zip: '13007',
  //   },
  //   coordonates: {
  //     latitude: 43.2878138,
  //     longitude: 5.3571988,
  //   },
  //   image: 'IMAGE.jpg',
  //   logo: 'LOGO',
  //   collectings: [
  //     {
  //       article: 'textile',
  //       label: '1 tote-bag de textile en vrac',
  //       reward: "5% pour l'achat de 2 livres",
  //       successLabel: 'Ton tote-bag de textile',
  //     },
  //   ],
  // },
  // {
  //   name: 'So Smoke',
  //   address: {
  //     street: '68 Avenue de la Corse',
  //     city: 'Marseille',
  //     zip: '13007',
  //   },
  //   coordonates: {
  //     latitude: 43.2889975,
  //     longitude: 5.3602915,
  //   },
  //   image: 'IMAGE.jpg',
  //   logo: 'LOGO',
  //   collectings: [
  //     {
  //       article: 'battery',
  //       label: 'Tes 4 batteries de cigarette électronique',
  //       reward: '10% sur la boutique',
  //       successLabel: '4 batteries de cigarette électronique',
  //     },
  //     {
  //       article: 'mod',
  //       successLabel: 'Ta cigarette électronique',
  //       label: '1 cigarette électronique',
  //       reward: "20% sur l'achat d'un nouveau KIT ou liquide",
  //     },
  //   ],
  // },
];

module.exports = collectingPoints;
