export const artItems = [
  {
    id: 1,
    name: "Interestelar",
    img: "/img/interestelar.jpg",
    section: "Grande",
    description: "Pintura al óleo sobre base de tela",
    price: 25000,
  },
  {
    id: 2,
    name: "Metamorfosis",
    img: "/img/metamorfosis.jpg",
    section: "Grande",
    description: "Pintura al óleo sobre base de tela",
    price: 23000,
  },
  {
    id: 3,
    name: "Pulsación",
    img: "/img/pulsacion.jpg",
    section: "Grande",
    description: "Pintura al óleo sobre base de tela",
    price: 23000,
  },
  {
    id: 4,
    name: "Maremagnum",
    img: "/img/maremagnum.jpg",
    section: "Grande",
    description: "Pintura al óleo sobre base de tela",
    price: 22000,
  },
  {
    id: 5,
    name: "Pasional",
    img: "/img/pasional.jpg",
    section: "Mediano",
    description: "Pintura al óleo sobre base de tela",
    price: 16000,
  },
  {
    id: 6,
    name: "Laberinto",
    img: "/img/laberinto del alma.jpg",
    section: "Mediano",
    description: "Pintura al óleo sobre base de tela",
    price: 14000,
  },
  {
    id: 7,
    name: "Renacer",
    img: "/img/reanacer.jpg",
    section: "Mediano",
    description: "Pintura al óleo sobre base de tela",
    price: 16000,
  },
  {
    id: 8,
    name: "Avatar",
    img: "/img/avatar.jpg",
    section: "Chico",
    description: "Pintura al óleo sobre base de tela",
    price: 9000,
  },
  {
    id: 9,
    name: "Itinerario",
    img: "/img/itinerario.jpg",
    section: "Chico",
    description: "Pintura al óleo sobre base de tela",
    price: 7000,
  },
];

export const arraySections = [
  {
    section: "Grande",
  },

  {
    section: "Mediano",
  },

  {
    section: "Chico",
  },
];

export const Arts = artItems.reduce((res, art) => {
  if (!res[art.section]) {
    res[art.section] = [];
  }
  res[art.section] = [...res[art.section], art];

  return res;
}, {});
