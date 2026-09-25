// =============================================================
// DONNÉES OFFICIELLES — 24 communes de La Réunion
// Population : INSEE RP 2023 (décret 26/12/2025)
// Parc social : ARMOS OI / RPLS 01/01/2026
// Prix immobilier : Notaires / Figaro Immobilier avril 2026
// =============================================================

export interface Commune {
  name: string;
  code: string;
  population: number;            // INSEE RP 2023
  region: string;
  lat: number;
  lng: number;
  parcSocial: number;            // ARMOS OI / RPLS 01/01/2026
  partLogementsSociaux: number;  // % des résidences principales
  prixMedian: number | null;     // Figaro Immobilier avril 2026 (null si N/D)
  evolutionPrix1an: number | null; // % sur 1 an
}

export const COMMUNES_DATA: Commune[] = [
  // ---------- NORD ----------
  { name: "Saint-Denis",         code: "97411", population: 154765, region: "Nord",  lat: -20.878, lng: 55.448, parcSocial: 23685, partLogementsSociaux: 35, prixMedian: 2950, evolutionPrix1an: -2 },
  { name: "Sainte-Marie",        code: "97438", population:  34344, region: "Nord",  lat: -20.897, lng: 55.549, parcSocial:  4188, partLogementsSociaux: 29, prixMedian: 2739, evolutionPrix1an: -1 },
  { name: "Sainte-Suzanne",      code: "97441", population:  24293, region: "Nord",  lat: -20.906, lng: 55.607, parcSocial:  2442, partLogementsSociaux: 25, prixMedian: 2348, evolutionPrix1an:  1 },

  // ---------- OUEST ----------
  { name: "Saint-Paul",          code: "97411", population: 105240, region: "Ouest", lat: -21.010, lng: 55.270, parcSocial:  6986, partLogementsSociaux: 16, prixMedian: 4672, evolutionPrix1an:  1 },
  { name: "Le Port",             code: "97420", population:  33336, region: "Ouest", lat: -20.939, lng: 55.293, parcSocial:  7177, partLogementsSociaux: 56, prixMedian: 2329, evolutionPrix1an: -7 },
  { name: "La Possession",       code: "97419", population:  35245, region: "Ouest", lat: -20.925, lng: 55.336, parcSocial:  4663, partLogementsSociaux: 32, prixMedian: 3052, evolutionPrix1an:  0 },
  { name: "Saint-Leu",           code: "97416", population:  34893, region: "Ouest", lat: -21.165, lng: 55.288, parcSocial:  1766, partLogementsSociaux: 12, prixMedian: 3896, evolutionPrix1an:  0 },
  { name: "Les Trois-Bassins",   code: "97426", population:   6899, region: "Ouest", lat: -21.104, lng: 55.299, parcSocial:   304, partLogementsSociaux: 11, prixMedian: null, evolutionPrix1an: null },
  { name: "L'Étang-Salé",        code: "97427", population:  13836, region: "Ouest", lat: -21.263, lng: 55.384, parcSocial:  1038, partLogementsSociaux: 17, prixMedian: 3928, evolutionPrix1an:  2 },
  { name: "Les Avirons",         code: "97425", population:  11434, region: "Ouest", lat: -21.241, lng: 55.339, parcSocial:   649, partLogementsSociaux: 13, prixMedian: 3124, evolutionPrix1an: -3 },

  // ---------- SUD ----------
  { name: "Saint-Pierre",        code: "97410", population:  84077, region: "Sud",   lat: -21.339, lng: 55.478, parcSocial:  7483, partLogementsSociaux: 20, prixMedian: 3281, evolutionPrix1an:  3 },
  { name: "Le Tampon",           code: "97418", population:  81943, region: "Sud",   lat: -21.278, lng: 55.518, parcSocial:  6258, partLogementsSociaux: 18, prixMedian: 2341, evolutionPrix1an:  1 },
  { name: "Saint-Louis",         code: "97421", population:  53935, region: "Sud",   lat: -21.286, lng: 55.411, parcSocial:  3942, partLogementsSociaux: 19, prixMedian: 2355, evolutionPrix1an: -5 },
  { name: "Saint-Joseph",        code: "97480", population:  38807, region: "Sud",   lat: -21.378, lng: 55.620, parcSocial:  2119, partLogementsSociaux: 13, prixMedian: 2247, evolutionPrix1an:  4 },
  { name: "Petite-Île",          code: "97429", population:  12617, region: "Sud",   lat: -21.353, lng: 55.564, parcSocial:   370, partLogementsSociaux:  7, prixMedian: 2768, evolutionPrix1an:  5 },
  { name: "Saint-Philippe",      code: "97442", population:   5074, region: "Sud",   lat: -21.359, lng: 55.767, parcSocial:   190, partLogementsSociaux:  9, prixMedian: null, evolutionPrix1an: null },
  { name: "Entre-Deux",          code: "97414", population:   7105, region: "Sud",   lat: -21.250, lng: 55.472, parcSocial:   277, partLogementsSociaux:  9, prixMedian: null, evolutionPrix1an: null },
  { name: "Cilaos",              code: "97413", population:   5390, region: "Sud",   lat: -21.134, lng: 55.472, parcSocial:    62, partLogementsSociaux:  3, prixMedian: null, evolutionPrix1an: null },

  // ---------- EST ----------
  { name: "Saint-André",         code: "97440", population:  57150, region: "Est",   lat: -20.963, lng: 55.651, parcSocial:  5472, partLogementsSociaux: 25, prixMedian: 2051, evolutionPrix1an: -1 },
  { name: "Saint-Benoît",        code: "97437", population:  37023, region: "Est",   lat: -21.034, lng: 55.715, parcSocial:  4683, partLogementsSociaux: 31, prixMedian: 1878, evolutionPrix1an: -1 },
  { name: "Bras-Panon",          code: "97412", population:  13344, region: "Est",   lat: -21.002, lng: 55.677, parcSocial:  1679, partLogementsSociaux: 32, prixMedian: 2022, evolutionPrix1an:  1 },
  { name: "Sainte-Rose",         code: "97439", population:   6343, region: "Est",   lat: -21.124, lng: 55.796, parcSocial:   343, partLogementsSociaux: 14, prixMedian: null, evolutionPrix1an: null },
  { name: "La Plaine-des-Palmistes", code: "97431", population: 6821, region: "Est", lat: -21.134, lng: 55.636, parcSocial: 447, partLogementsSociaux: 16, prixMedian: null, evolutionPrix1an: null },
  { name: "Salazie",             code: "97433", population:   7243, region: "Est",   lat: -21.027, lng: 55.539, parcSocial:    70, partLogementsSociaux:  3, prixMedian: null, evolutionPrix1an: null }
];

// =============================================================
// INDICATEURS DÉPARTEMENTAUX (données officielles)
// =============================================================

export const INDICATEURS_DEPARTEMENTAUX = {
  population: 889679,             // INSEE RP 2023
  communes: 24,
  superficie: 2512,               // km²
  densite: 354,                   // hab/km²
  parcSocial: 86293,              // ARMOS OI 2026
  tauxLogementsSociaux: 24,       // % des résidences principales
  tauxChomage: 16,                // % (INSEE T2 2025)
  loyerMedian: 10.90,             // €/m² (Observatoire ADIL 2024)
  prixMedianAppartement: 2700,    // €/m² (Notaires 2025)
  prixMedianAppartementNeuf: 5230,// €/m² (Notaires 2025)
  croissanceAnnuelle: 0.7,        // %/an
  logementsSociauxPlus30Ans: 25000,
  financementBanqueTerritoires: 340 // M€ en 2025
};

// =============================================================
// MARCHÉ & FONCIER
// =============================================================

export const MARKET_DATA = {
  construction: {
    autorises: 6910, evolutionAutorises: 18,
    misesEnChantier: 5020, evolutionMisesEnChantier: -19,
    collectifsAutorises: 3880, collectifsCommences: 2410,
    individuelsPurs: 1820, individuelsGroupes: 1200,
    permis2020: 5800, permis2021: 6100, permis2022: 6400, permis2023: 5850, permis2024: 6910,
    misesEnChantier2020: 5400, misesEnChantier2021: 5800, misesEnChantier2022: 6100, misesEnChantier2023: 6200, misesEnChantier2024: 5020,
    surfaceMoyenneLogement: 88, coutMoyenConstruction: 1850
  },
  transactions: {
    prixMedianAppartement: 2700, prixMedianMaison: 240000, prixMedianTerrain: 94700,
    volumeTransactions: 4800, evolutionVolume: -8,
    volume2020: 5200, volume2021: 6100, volume2022: 6800, volume2023: 5200, volume2024: 4800,
    delaiVenteMoyen: 92, partInvestisseurs: 28, partPrimoAccedants: 42
  },
  vacance: { logementsVacants2Ans: 12500, tauxVacance: 8.2, evolution: -3, vacanceCourteDuree: 4200, vacanceLongueDuree: 8300, tauxMeubleTouristique: 3.1 },
  friches: { nombre: 42, surfaceTotale: 185, surfaceReconvertible: 120, frichesIndustrielles: 18, frichesCommerciales: 12, frichesAdministratives: 8, frichesAutres: 4 },
  loyers: {
    medianGlobal: 10.90, medianCINOR: 11.90, medianTCO: 12.70, medianCIVIS: 10.40, medianCASUD: 9.80, medianCIREST: 9.20,
    parType: { "T1": 16.10, "T2": 13.00, "T3": 10.70, "T4": 9.90, "T5+": 8.90 },
    parAnciennete: { "avant 1991": 9.40, "apres 2005": 11.70 },
    evolution1an: 3.8, evolution5ans: 18.5, loyerMoyenM2: 11.20, loyerMoyenMaison: 1250, loyerMoyenAppartement: 890
  }
};

// =============================================================
// SOCIÉTÉ
// =============================================================

export const SOCIETY_DATA = {
  demographie: {
    population: 889679, naissances: 11790, deces: 6110, fecondite: 2.14,
    esperanceVieFemmes: 84.5, esperanceVieHommes: 78.2, croissanceAnnuelle: 0.7,
    population2010: 828000, population2015: 852000, population2020: 880000, population2025: 889679,
    soldeNaturel: 5680, soldeMigratoire: -2400,
    pyramideAges: { "0-14": 19.5, "15-29": 18.2, "30-44": 19.8, "45-59": 20.1, "60-74": 14.2, "75+": 8.2 },
    indiceVieillissement: 68.4, ageMoyen: 36.8
  },
  menages: {
    tailleMoyenne: 2.4, couplesAvecEnfants: 38, famillesMonoparentales: 34, personnesSeules: 28,
    evolutionMonoparentales: 2.1, nombreMenages: 380000,
    menages1Personne: 28, menages2Personnes: 26, menages3Personnes: 20, menages4Personnes: 15, menages5Plus: 11,
    partProprietaires: 58, partLocataires: 37, partLogesGratuit: 5, partHLM: 24
  },
  emploi: {
    tauxChomage: 16, tauxChomageFemmes: 16, tauxChomageHommes: 14,
    haloChomage: 57300, haloPourcentage: 10,
    sansEmploiSouhaitantTravailler: 116900, tauxEmploiSeniors: 57,
    tauxChomage2015: 22.5, tauxChomage2020: 17.8, tauxChomage2025: 16.0,
    tauxChomageJeunes: 28.5, tauxChomageSeniors: 12.4, tauxChomageLongueDuree: 6.8,
    emploisSalaries: 285000, emploisIndependants: 42000,
    partCDI: 78, partCDD: 15, partInterim: 7
  }
};

// =============================================================
// ÉCONOMIE & EMPLOI
// =============================================================

export const ECONOMY_DATA = {
  emploiSalarie: {
    evolutionTrimestrielle: 0.2,
    secteursEnCroissance: ["Construction", "Hébergement-restauration", "Services aux entreprises", "Numérique", "Énergies renouvelables"],
    secteursEnBaisse: ["Intérim", "Commerce de détail", "Agriculture", "Textile"],
    secteursDetail: {
      "Agriculture": 3.2, "Industrie": 5.1, "Construction": 8.4, "Commerce": 14.2,
      "Transport": 5.8, "Hébergement-restauration": 6.9, "Information-communication": 2.8,
      "Finance-assurance": 3.5, "Services aux entreprises": 9.8, "Services aux particuliers": 6.2,
      "Administration publique": 22.1, "Autres": 12.0
    }
  },
  marcheTravail: {
    chomeursBIT: 11, sousEmploi: 4, personnesEnEmploi: 49, inactifsHalo: 10, etudiants: 11,
    populationActive: 420000, tauxActivite: 72.5, tauxActiviteFemmes: 68.2, tauxActiviteHommes: 76.8,
    partTempsPartiel: 18.5, partTempsPartielSubi: 7.2
  },
  mobilites: {
    vehiculesLegers: 512538, vehiculesNeufsImportes: 29892, voyagesTransportCollectif: 45000000,
    trajetsCovoiturage: 554823, kmAmenagementsCyclables: 367, bornesRecharge: 572, voyageursAeriens: 2600000,
    tauxMotorisation: 78.5, partTransportCommun: 8.2, partVoiture: 78.5, partDeuxRoues: 5.8, partVelo: 1.2, partMarche: 6.3,
    tempsTrajetMoyen: 32, congestionHeuresPointe: 45, kmReseauRoutier: 2850, lignesTC: 145, arretsTC: 4200,
    budgetMenageTransport: 5800
  }
};

// =============================================================
// RISQUES & ENVIRONNEMENT
// =============================================================

export const RISK_DATA = {
  risques: {
    mouvementsTerrain: { nombreEvenements: 3086, diagnosticsPostGarance: 130, glissements: 1820, eboulements: 620, effondrements: 340, couleesBoue: 306 },
    cyclones: {
      saison: "Novembre à mai",
      derniersCyclones: [
        { nom: "Garance", date: "Fév 2025", rafales: 220, degats: "Plusieurs centaines de M€", categorie: 4 },
        { nom: "Chido", date: "Déc 2024", rafales: 240, degats: "Mayotte dévastée", categorie: 5 },
        { nom: "Belal", date: "Jan 2024", rafales: 180, degats: "Dégâts modérés", categorie: 3 },
        { nom: "Freddy", date: "Fév 2023", rafales: 200, degats: "Dégâts importants", categorie: 4 }
      ],
      frequenceCategorie3Plus: 2.8, coutMoyenParCyclone: 180
    },
    submersionMarine: { communesConcernees: 15, pourcentageLittoral: 30 },
    inondations: { communesConcernees: 18, arretesCatNat: 245, nombrePPRI: 24 },
    incendies: { surfaceBrulee2024: 1250, nombreDepartsFeu2024: 380 }
  },
  contraintes: {
    parcNational: 40, penteSuperieure30: 60, loiLittoral: 35, zonesUNESCO: 25, zonesAgricoles: 45,
    zonesNatura2000: 22, reservesBiologiques: 8, zonesRamsar: 2, surfaceTotale: 2512
  },
  environnement: {
    temperatureMoyenne: 23.5, ecartNormale: 0.8, pluviometrieAnnuelle: 4200, joursPluie: 165, joursEnsoleillement: 2100,
    qualiteAir: 78, partEnergieRenouvelable: 42.5, consommationElectrique: 4100,
    productionSolaire: 58, productionEolienne: 4, productionHydraulique: 12, partVehiculesElectriques: 3.8
  }
};

// =============================================================
// DÉMOGRAPHIE DÉTAILLÉE
// =============================================================

export const DEMOGRAPHY_DETAILED = {
  populationParTranche: [
    { tranche: "0-14 ans",  hommes: 92000, femmes: 87500 },
    { tranche: "15-29 ans", hommes: 85000, femmes: 81500 },
    { tranche: "30-44 ans", hommes: 91500, femmes: 89000 },
    { tranche: "45-59 ans", hommes: 93500, femmes: 91000 },
    { tranche: "60-74 ans", hommes: 62000, femmes: 68000 },
    { tranche: "75+ ans",   hommes: 31500, femmes: 43500 }
  ],
  evolutionQuinquennale: [
    { annee: 2000, population: 706300 }, { annee: 2005, population: 763000 },
    { annee: 2010, population: 828000 }, { annee: 2015, population: 852000 },
    { annee: 2020, population: 880000 }, { annee: 2025, population: 889679 }
  ],
  projections: [
    { annee: 2025, central: 889679, bas: 889679, haut: 889679 },
    { annee: 2030, central: 920000, bas: 900000, haut: 945000 },
    { annee: 2040, central: 960000, bas: 920000, haut: 1000000 },
    { annee: 2050, central: 990000, bas: 940000, haut: 1050000 }
  ]
};
