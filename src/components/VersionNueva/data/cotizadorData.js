
export const CATEGORIES = [
  { id: "auto", label: "Auto", icon: "directions_car" },
  { id: "moto", label: "Moto", icon: "two_wheeler" },
  { id: "hogar", label: "Hogar", icon: "roofing" },
  { id: "maquinaria", label: "Maquinaria Agricola", icon: "agriculture" },
  { id: "cultivos", label: "Cultivos", icon: "wheat" },
  { id: "art", label: "ART", icon: "factory" },
  {
    id: "accidentes",
    label: "Accidentes Personales",
    mobileLabel: "Accidentes",
    icon: "personal_injury",
  },
];

export const BRANDS = [
  "Toyota",
  "Volkswagen",
  "Ford",
  "Chevrolet",
  "Peugeot",
];

export const COVERAGES = [
  {
    id: "terceros",
    name: "Terceros Completo",
    mobileName: "Terceros Completo",
    badge: "Recomendado",
    description:
      "Robo, incendio total/parcial, cristales laterales y cobertura integral de granizo.",
    mobileDescription:
      "Robo, incendio total/parcial, cristales y granizo",
    franchiseLabel: "Franquicia",
    franchiseValue: "Sin costo adicional",
    basePrice: 14500,
  },
  {
    id: "todo-riesgo",
    name: "Todo Riesgo",
    mobileName: "Todo Riesgo con Franquicia",
    badge: "Con franquicia",
    description:
      "Máxima protección integral ante cualquier daño material propio, terceros y accidentes.",
    mobileDescription:
      "Máxima protección integral ante cualquier daño",
    franchiseLabel: "Franquicia fija",
    franchiseValue: "$95.000 fijada",
    basePrice: 22800,
  },
];

export const COMMERCIAL_SURCHARGE = 4400;

export const BENEFITS = [
  "Sin trámites presenciales ni fotos complicadas",
  "Emisión y póliza digital al instante en tu celular",
  "Atención y peritaje 24/7 ante siniestros vía app",
];

export const PARTNERS = [
  "ALLIANZ",
  "ZURICH",
  "MAPFRE",
  "SANCOR",
];

export const formatPrice = (value) =>
  `$${Number(value).toLocaleString("es-AR")}`;
