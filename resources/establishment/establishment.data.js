const collectingPoints = [
  {
    code: 'kedge',
    name: 'KEDGE Business School',
    address: {
      street: 'Domaine de Luminy, Rue Antoine Bourdelle',
      city: 'Marseille',
      zip: '13009',
    },
    coordinates: {
      latitude: 43.236455,
      longitude: 5.433549,
    },
    image: 'kedge-textile.jpg',
    logo: 'logo_kedge.png',
  },
  {
    code: 'cabesto',
    name: 'CABESTO',
    isUpComing: true,
    address: {
      street: "Zone commerciale d'Auchan ZAC Le, 2 Avenue du Pastre",
      city: 'Aubagne',
      zip: '13400',
    },
    coordinates: {
      latitude: 43.297438,
      longitude: 5.596059,
    },
    image: 'cabesto_aubagne.jpg',
    logo: 'LOGO_CABESTO.jpg',
  },
  {
    code: 'lilly_p',
    name: 'Lily Paillettes',
    declarativeValidation: true,
    address: {
      street: '83 Avenue de la Corse',
      city: 'Marseille',
      zip: '13007',
    },
    coordinates: {
      latitude: 43.288675,
      longitude: 5.359795,
    },
    image: 'Lily-Paillettes.jpg',
    logo: 'LOGO_Lily-Paillettes.png',
  },
  {
    code: 'atao',
    name: 'For Atao',
    isUpComing: true,
    address: {
      street: '8 rue du chantier',
      city: 'Marseille',
      zip: '13007',
    },
    coordinates: {
      latitude: 43.292859,
      longitude: 5.368629,
    },
    image: 'FOR-ATAO.jpg',
    logo: 'LOGO_FOR-ATAO.jpg',
  },
  {
    code: 'azul',
    name: 'Azul',
    isUpComing: true,
    address: {
      street: '73 Rue Francis Davso',
      city: 'Marseille',
      zip: '13001',
    },
    coordinates: {
      latitude: 43.292923,
      longitude: 5.375277,
    },
    image: 'AZUL.jpg',
    logo: 'LOGO_AZUL.jpg',
  },
  {
    code: 'aussih',
    name: 'AUSSIH',
    isUpComing: true,
    address: {
      street: '9 rue Chateaubriand',
      city: 'Marseille',
      zip: '13007',
    },
    coordinates: {
      latitude: 43.288148,
      longitude: 5.359171,
    },
    image: 'AUSSIH.jpg',
    logo: 'LOGO_AUSSIH.jpg',
  },
  {
    code: 'happesmoke_istres',
    name: 'HappeSmoke',
    address: {
      street: 'Forum des Carmes, Boulevard de la République',
      city: 'Istres',
      zip: '13800',
    },
    coordinates: {
      latitude: 43.513333,
      longitude: 4.987145,
    },
    image: 'HAPPESMOKE-ISTRES.jpg',
    logo: 'LOGO_HAPPESMOKE.png',
  },
  {
    code: 'happesmoke_chateauneuf',
    name: 'HappeSmoke',
    address: {
      street: 'Avenue Emile Cotte, Centre Commercial Carrefour',
      city: 'Chateauneuf-les-Martigues',
      zip: '13220',
    },
    coordinates: {
      latitude: 43.393648,
      longitude: 5.134843,
    },
    image: 'HAPPESMOKE-CHATEAU-NEUF-MARTIGUES.jpg',
    logo: 'LOGO_HAPPESMOKE.png',
  },
  {
    code: 'happesmoke_martigues',
    name: 'HappeSmoke',
    address: {
      street: 'Boulevard Paul Eluard Centre Commercial AUCHAN',
      city: 'Martigues',
      zip: '13500',
    },
    coordinates: {
      latitude: 43.423453,
      longitude: 5.051049,
    },
    image: 'HAPPESMOKE-MARTIGUES.jpg',
    logo: 'LOGO_HAPPESMOKE.png',
  },
  {
    code: 'happesmoke_uzes',
    name: 'HappeSmoke',
    address: {
      street: 'ZAC, Pont des Charrettes',
      city: 'Uzes',
      zip: '30700',
    },
    coordinates: {
      latitude: 43.990414,
      longitude: 4.429492,
    },
    image: 'HAPPESMOKE-UZES.jpg',
    logo: 'LOGO_HAPPESMOKE.png',
  },
  {
    code: 'happesmoke_beaucaire',
    name: 'HappeSmoke',
    address: {
      street: 'Centre Commercial Carrefour Beaucaire Route de Nîmes - Lieu-dit Genestet',
      city: 'Beaucaire',
      zip: '30300',
    },
    coordinates: {
      latitude: 43.816618,
      longitude: 4.614025,
    },
    image: 'HAPPESMOKE-BEAUCAIRE.jpg',
    logo: 'LOGO_HAPPESMOKE.png',
  },
  {
    code: 'happesmoke_marseille_bonneveine',
    name: 'HappeSmoke',
    address: {
      street: '112 avenue de Hambourg, Centre Commercial Carrefour Bonneveine',
      city: 'Marseille',
      zip: '13008',
    },
    coordinates: {
      latitude: 43.248968,
      longitude: 5.389613,
    },
    image: 'HAPPESMOKE-BONNEVAINE.jpg',
    logo: 'LOGO_HAPPESMOKE.png',
  },
  {
    code: 'happesmoke_marseille_bourse',
    name: 'HappeSmoke',
    address: {
      street: 'Centre Commercial Centre Bourse, 17 Cours Belsunce',
      city: 'Marseille',
      zip: '13001',
    },
    coordinates: {
      latitude: 43.297774,
      longitude: 5.376046,
    },
    image: 'HAPPESMOKE-MARSEILLE.jpg',
    logo: 'LOGO_HAPPESMOKE.png',
  },
  {
    code: 'happesmoke_mirabeau',
    name: 'HappeSmoke',
    address: {
      street: 'Centre Commercial Géant Barneoud, Avenue du Plan de Campagne',
      city: 'Les Pennes-Mirabeau',
      zip: '13170',
    },
    coordinates: {
      latitude: 43.415042,
      longitude: 5.362548,
    },
    image: 'HAPPESMOKE-PLANDECAMPAGNE.jpg',
    logo: 'LOGO_HAPPESMOKE.png',
  },
  {
    code: 'happesmoke_venelles',
    name: 'HappeSmoke',
    address: {
      street: '46 Chemin de la Petite Bastide',
      city: 'Venelles',
      zip: '13770',
    },
    coordinates: {
      latitude: 43.58577,
      longitude: 5.475701,
    },
    image: 'HAPPESMOKE-VENELLES.jpg',
    logo: 'LOGO_HAPPESMOKE.png',
  },
  {
    code: 'happesmoke_bouc',
    name: 'HappeSmoke',
    address: {
      street: 'Centre Commercial Carrefour Port de Bouc Route Nationale Fos Martigues',
      city: 'Port-de-Bouc',
      zip: '13110',
    },
    coordinates: {
      latitude: 43.412302,
      longitude: 5.001674,
    },
    image: 'HAPPESMOKE-PORTDEBOUC.jpg',
    logo: 'LOGO_HAPPESMOKE.png',
  },
  {
    code: 'happesmoke_aubagne',
    name: 'HappeSmoke',
    address: {
      street: 'Route de Gémenos, Centre Commercial Auchan ',
      city: 'Aubagne',
      zip: '13400',
    },
    coordinates: {
      latitude: 43.294064,
      longitude: 5.591581,
    },
    image: 'HAPPESMOKE-AUBAGNE.jpg',
    logo: 'LOGO_HAPPESMOKE.png',
  },
  {
    code: 'office_depot_montgrand',
    name: 'Office Dépôt Montgrand',
    declarativeValidation: true,
    address: {
      street: '26 rue Montgrand',
      city: 'Marseille',
      zip: '13006',
    },
    coordinates: {
      latitude: 43.2911857,
      longitude: 5.3625064,
    },
    image: 'OFFICE_DEPOT_MONGRAND.jpg',
    logo: 'LOGO_OFFICE_DEPOT.jpg',
  },
  {
    code: 'office_depot_cantini',
    name: 'Office Dépôt Cantini',
    declarativeValidation: true,
    address: {
      street: '65 avenue Jules Cantini',
      city: 'Marseille',
      zip: '13006',
    },
    coordinates: {
      latitude: 43.2838366,
      longitude: 5.3862223,
    },
    image: 'OFFICE_DEPOT_MARSEILLE.jpg',
    logo: 'LOGO_OFFICE_DEPOT.jpg',
  },
  {
    code: 'office_depot_aubagne',
    name: 'Office Dépôt Aubagne',
    declarativeValidation: true,
    address: {
      street: '328, Route de la Ciotat, RD 559A, Quartier Les Vaux, Rond point Lakanal',
      city: 'Aubagne',
      zip: '13400',
    },
    coordinates: {
      latitude: 43.2849592,
      longitude: 5.578939,
    },
    image: 'OFFICE_DEPOT_AUBAGNE.jpg',
    logo: 'LOGO_OFFICE_DEPOT.jpg',
  },
  {
    code: 'office_depot_toulon',
    name: 'Office Dépôt Toulon',
    declarativeValidation: true,
    address: {
      street: 'Avenue de l’Université',
      city: 'La Valette du Var',
      zip: '83160',
    },
    coordinates: {
      latitude: 43.1377739,
      longitude: 6.0072467,
    },
    image: 'OFFICE_DEPOT_TOULON.jpg',
    logo: 'LOGO_OFFICE_DEPOT.jpg',
  },
  {
    code: 'office_depot_avignon',
    name: 'Office Dépôt Avignon',
    declarativeValidation: true,
    address: {
      street: '19 chemin de la Cristole',
      city: 'Monfavet',
      zip: '84140',
    },
    coordinates: {
      latitude: 43.9255499,
      longitude: 4.8468325,
    },
    image: 'OFFICE_DEPOT_AVIGNON.jpg',
    logo: 'LOGO_OFFICE_DEPOT.jpg',
  },
  {
    code: 'pantagruel',
    name: 'Librairie Pantagruel',
		isUpComing: true,
    address: {
      street: '44 rue Paul Codaccioni',
      city: 'Marseille',
      zip: '13007',
    },
    coordinates: {
      latitude: 43.2878138,
      longitude: 5.3571988,
    },
    image: 'PANTAGRUEL.jpg',
    logo: 'PANTAGRUEL_LOGO.jpg',
  },
	{
    code: 'odeur_du_temps',
    name: "Librairie L'Odeur du Temps",
		isUpComing: true,
    address: {
      street: '35 rue Pavillon',
      city: 'Marseille',
      zip: '13001',
    },
    coordinates: {
      latitude: 43.2926707,
      longitude: 5.3616611,
    },
    image: 'ODEUR_DU_TEMPS.jpg',
    logo: 'LOGO_ODEUR_DU_TEMPS.jpg',
  },
  {
    code: 'so_smoke',
    name: 'So Smoke',
    address: {
      street: '68 Avenue de la Corse',
      city: 'Marseille',
      zip: '13007',
    },
    coordinates: {
      latitude: 43.2889975,
      longitude: 5.3602915,
    },
    image: 'SO_SMOKE.jpg',
    logo: 'SO_SMOKE_LOGO.jpg',
  },
  {
    code: 'prink',
    name: 'Prink',
    address: {
      street: '66 Avenue de la Corse',
      city: 'Marseille',
      zip: '13007',
    },
    coordinates: {
      latitude: 43.2889922,
      longitude: 5.3581931,
    },
    image: 'PRINK.jpg',
    logo: 'PRINK_LOGO.png',
  },
];

module.exports = collectingPoints;
