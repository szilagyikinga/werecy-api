const collectingPoints = [
  {
    name: 'CABESTO',
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
        collecting: '1 combinaison néoprène',
        reward: "10€ pour 50€ d'achat",
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
        successLabel: 'Tes 2 kg de textile',
        collecting: '2 kg de textiles en vrac',
        reward: '10% sur toute la boutique',
      },
      {
        article: 'jean',
        successLabel: 'Ton jean',
        collecting: '1 jean',
        reward: '10% sur toute la boutique',
      },
    ],
  },
  {
    name: 'For Atao',
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
        successLabel: 'Tes 2 kg de textile',
        collecting: '2 kg de textiles en vrac',
        reward: '10% sur toute la boutique',
      },
      {
        article: 'jean',
        successLabel: 'Ton jean',
        collecting: '1 jean',
        reward: '10% sur toute la boutique',
      },
    ],
  },
  {
    name: 'Azul',
    address: {
      street: '73 Rue Francis Davso',
      city: 'Marseille',
      zip: '13001',
    },
    coordonates: {
      latitude: 43.292923,
      longitude: 5.375277,
    },
    image: 'AZUL.png',
    logo: 'LOGO_AZUL.jpg',
    collectings: [
      {
        article: 'bulk',
        successLabel: 'Tes 2 kg de textile',
        collecting: '2 kg de textiles en vrac',
        reward: '10% sur toute la boutique',
      },
      {
        article: 'jean',
        successLabel: 'Ton jean',
        collecting: '1 jean',
        reward: '10% sur toute la boutique',
      },
    ],
  },
  {
    name: 'AUSSIH',
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
        successLabel: 'Tes 2 kg de textile',
        collecting: '2 kg de textiles en vrac',
        reward: '10% sur toute la boutique',
      },
      {
        article: 'jean',
        successLabel: 'Ton jean',
        collecting: '1 jean',
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
        successLabel: 'Tes batteries de cigarette électronique',
        collecting: '4 batteries de cigarette électronique',
        reward: '5% sur la boutique',
      },
      {
        article: 'mod',
        successLabel: 'Ton MOD de cigarette électronique',
        collecting: '1 MOD de cigarette électronique',
        reward: "20% sur l'achat d'un nouveau MOD",
      },
      {
        article: 'smartphone',
        successLabel: 'Ton smartphone',
        collecting: '1 smartphone',
        reward: "20% sur l'achat d'un nouveau MOD",
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
        successLabel: 'Tes batteries de cigarette électronique',
        collecting: '4 batteries de cigarette électronique',
        reward: '5% sur la boutique',
      },
      {
        article: 'mod',
        successLabel: 'Ton MOD de cigarette électronique',
        collecting: '1 MOD de cigarette électronique',
        reward: "20% sur l'achat d'un nouveau MOD",
      },
      {
        article: 'smartphone',
        successLabel: 'Ton smartphone',
        collecting: '1 smartphone',
        reward: "20% sur l'achat d'un nouveau MOD",
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
        successLabel: 'Tes batteries de cigarette électronique',
        collecting: '4 batteries de cigarette électronique',
        reward: '5% sur la boutique',
      },
      {
        article: 'mod',
        successLabel: 'Ton MOD de cigarette électronique',
        collecting: '1 MOD de cigarette électronique',
        reward: "20% sur l'achat d'un nouveau MOD",
      },
      {
        article: 'smartphone',
        successLabel: 'Ton smartphone',
        collecting: '1 smartphone',
        reward: "20% sur l'achat d'un nouveau MOD",
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
        successLabel: 'Tes batteries de cigarette électronique',
        collecting: '4 batteries de cigarette électronique',
        reward: '5% sur la boutique',
      },
      {
        article: 'mod',
        successLabel: 'Ton MOD de cigarette électronique',
        collecting: '1 MOD de cigarette électronique',
        reward: "20% sur l'achat d'un nouveau MOD",
      },
      {
        article: 'smartphone',
        successLabel: 'Ton smartphone',
        collecting: '1 smartphone',
        reward: "20% sur l'achat d'un nouveau MOD",
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
        successLabel: 'Tes batteries de cigarette électronique',
        collecting: '4 batteries de cigarette électronique',
        reward: '5% sur la boutique',
      },
      {
        article: 'mod',
        successLabel: 'Ton MOD de cigarette électronique',
        collecting: '1 MOD de cigarette électronique',
        reward: "20% sur l'achat d'un nouveau MOD",
      },
      {
        article: 'smartphone',
        successLabel: 'Ton smartphone',
        collecting: '1 smartphone',
        reward: "20% sur l'achat d'un nouveau MOD",
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
        successLabel: 'Tes batteries de cigarette électronique',
        collecting: '4 batteries de cigarette électronique',
        reward: '5% sur la boutique',
      },
      {
        article: 'mod',
        successLabel: 'Ton MOD de cigarette électronique',
        collecting: '1 MOD de cigarette électronique',
        reward: "20% sur l'achat d'un nouveau MOD",
      },
      {
        article: 'smartphone',
        successLabel: 'Ton smartphone',
        collecting: '1 smartphone',
        reward: "20% sur l'achat d'un nouveau MOD",
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
        successLabel: 'Tes batteries de cigarette électronique',
        collecting: '4 batteries de cigarette électronique',
        reward: '5% sur la boutique',
      },
      {
        article: 'mod',
        successLabel: 'Ton MOD de cigarette électronique',
        collecting: '1 MOD de cigarette électronique',
        reward: "20% sur l'achat d'un nouveau MOD",
      },
      {
        article: 'smartphone',
        successLabel: 'Ton smartphone',
        collecting: '1 smartphone',
        reward: "20% sur l'achat d'un nouveau MOD",
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
        successLabel: 'Tes batteries de cigarette électronique',
        collecting: '4 batteries de cigarette électronique',
        reward: '5% sur la boutique',
      },
      {
        article: 'mod',
        successLabel: 'Ton MOD de cigarette électronique',
        collecting: '1 MOD de cigarette électronique',
        reward: "20% sur l'achat d'un nouveau MOD",
      },
      {
        article: 'smartphone',
        successLabel: 'Ton smartphone',
        collecting: '1 smartphone',
        reward: "20% sur l'achat d'un nouveau MOD",
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
        successLabel: 'Tes batteries de cigarette électronique',
        collecting: '4 batteries de cigarette électronique',
        reward: '5% sur la boutique',
      },
      {
        article: 'mod',
        successLabel: 'Ton MOD de cigarette électronique',
        collecting: '1 MOD de cigarette électronique',
        reward: "20% sur l'achat d'un nouveau MOD",
      },
      {
        article: 'smartphone',
        successLabel: 'Ton smartphone',
        collecting: '1 smartphone',
        reward: "20% sur l'achat d'un nouveau MOD",
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
        successLabel: 'Tes batteries de cigarette électronique',
        collecting: '4 batteries de cigarette électronique',
        reward: '5% sur la boutique',
      },
      {
        article: 'mod',
        successLabel: 'Ton MOD de cigarette électronique',
        collecting: '1 MOD de cigarette électronique',
        reward: "20% sur l'achat d'un nouveau MOD",
      },
      {
        article: 'smartphone',
        successLabel: 'Ton smartphone',
        collecting: '1 smartphone',
        reward: "20% sur l'achat d'un nouveau MOD",
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
        successLabel: 'Tes batteries de cigarette électronique',
        collecting: '4 batteries de cigarette électronique',
        reward: '5% sur la boutique',
      },
      {
        article: 'mod',
        successLabel: 'Ton MOD de cigarette électronique',
        collecting: '1 MOD de cigarette électronique',
        reward: "20% sur l'achat d'un nouveau MOD",
      },
      {
        article: 'smartphone',
        successLabel: 'Ton smartphone',
        collecting: '1 smartphone',
        reward: "20% sur l'achat d'un nouveau MOD",
      },
    ],
  },
];

module.exports = collectingPoints;
