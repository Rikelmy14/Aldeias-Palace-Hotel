export type Room = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  capacity: string;
  bed: string;
  amenities: string[];
  images: string[];
};

// PLACEHOLDER: nomes, descrições, fotos e capacidades reais devem ser
// confirmados e substituídos pelo hotel antes da publicação.
export const rooms: Room[] = [
  {
    slug: "suite-standard",
    name: "Suíte Standard",
    tagline: "Conforto e praticidade para sua estadia.",
    description:
      "Um espaço acolhedor pensado para quem busca praticidade sem abrir mão do conforto. Ideal para estadias curtas ou viagens de trabalho em Tucumã.",
    capacity: "2 hóspedes",
    bed: "1 cama de casal",
    amenities: ["Wi-Fi", "Ar-condicionado", "TV", "Frigobar", "Banheiro privativo"],
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600&auto=format&fit=crop",
    ],
  },
  {
    slug: "suite-superior",
    name: "Suíte Superior",
    tagline: "Mais espaço para quem viaja em família.",
    description:
      "Ambiente amplo e bem iluminado, com espaço adicional de convivência. Uma boa escolha para famílias ou estadias mais longas.",
    capacity: "3 hóspedes",
    bed: "1 cama de casal + 1 solteiro",
    amenities: ["Wi-Fi", "Ar-condicionado", "TV", "Frigobar", "Área de estar"],
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
    ],
  },
  {
    slug: "suite-master",
    name: "Suíte Master",
    tagline: "A experiência mais completa do hotel.",
    description:
      "Nossa acomodação mais sofisticada, com acabamento premium e espaço generoso, pensada para quem busca o melhor da hospitalidade em Tucumã.",
    capacity: "2 a 4 hóspedes",
    bed: "1 cama king + sofá-cama",
    amenities: ["Wi-Fi", "Ar-condicionado", "Smart TV", "Frigobar", "Amenities premium"],
    images: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1600&auto=format&fit=crop",
    ],
  },
];
