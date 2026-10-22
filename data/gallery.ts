export type GalleryCategory = "Hotel" | "Quartos" | "Café da manhã" | "Restaurante" | "Áreas comuns";

export type GalleryImage = {
  src: string;
  alt: string;
  category: GalleryCategory;
};

// PLACEHOLDER: substituir por fotografia profissional real do hotel.
export const galleryImages: GalleryImage[] = [
  { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400&auto=format&fit=crop", alt: "Fachada do hotel", category: "Hotel" },
  { src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1400&auto=format&fit=crop", alt: "Área comum do hotel", category: "Áreas comuns" },
  { src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1400&auto=format&fit=crop", alt: "Quarto do hotel", category: "Quartos" },
  { src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1400&auto=format&fit=crop", alt: "Detalhe do quarto", category: "Quartos" },
  { src: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1400&auto=format&fit=crop", alt: "Mesa de café da manhã", category: "Café da manhã" },
  { src: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1400&auto=format&fit=crop", alt: "Café da manhã servido", category: "Café da manhã" },
  { src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1400&auto=format&fit=crop", alt: "Ambiente do restaurante", category: "Restaurante" },
  { src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1400&auto=format&fit=crop", alt: "Mesas do restaurante", category: "Restaurante" },
  { src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1400&auto=format&fit=crop", alt: "Jardim do hotel", category: "Áreas comuns" },
  { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop", alt: "Suíte superior", category: "Quartos" },
  { src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1400&auto=format&fit=crop", alt: "Recepção do hotel", category: "Hotel" },
  { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1400&auto=format&fit=crop", alt: "Corredor do hotel", category: "Hotel" },
];
