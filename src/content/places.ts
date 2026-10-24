/** Translated names for the few stops that are words, not place names. */
export const extraPlaceNames: Record<string, Record<string, string>> = {
  "private-island": { fr: "Île privée", es: "Isla privada", ru: "Частный остров", ar: "جزيرة خاصة" },
  "siargao-islands": { fr: "Îles de Siargao", es: "Islas de Siargao", ru: "Острова Сиаргао", ar: "جزر سيارغاو" },
};

/** Display names for route stops that are not full destination pages. */
export const extraPlaces: Record<string, string> = {
  "port-barton": "Port Barton",
  "puerto-princesa": "Puerto Princesa",
  "private-island": "Private island",
  luzon: "Luzon",
  visayas: "Visayas",
  "siargao-islands": "Siargao islands",
  apo: "Apo Island",
  bantayan: "Bantayan",
  "san-vicente": "San Vicente",
  "balabac": "Balabac",
  "panglao": "Panglao",
  "bacolod": "Bacolod",
  vigan: "Vigan",
  donsol: "Donsol",
  linapacan: "Linapacan",
};

/** Approximate coordinates for route stops without a destination page (for route maps). */
export const extraCoords: Record<string, [number, number]> = {
  "port-barton": [10.405, 119.17],
  "puerto-princesa": [9.74, 118.74],
  "private-island": [11.3, 119.55], // illustrative: northern Palawan
  luzon: [14.6, 121.0],
  visayas: [10.3, 123.9],
  apo: [9.07, 123.27],
  bantayan: [11.17, 123.72],
  "san-vicente": [10.53, 119.25],
  balabac: [7.98, 117.06],
  panglao: [9.58, 123.75],
  bacolod: [10.68, 122.95],
  vigan: [17.574, 120.387],
  donsol: [12.908, 123.597],
  linapacan: [11.47, 119.87],
};
