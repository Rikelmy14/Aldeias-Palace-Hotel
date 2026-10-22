// ============================================================================
// DADOS OFICIAIS DO HOTEL — CENTRALIZADOS AQUI
// Todo campo marcado com "// PLACEHOLDER" contém um dado fictício/genérico
// e DEVE ser substituído pela informação real e confirmada pelo Aldeias
// Palace Hotel antes da publicação do site. Nenhum dos valores abaixo foi
// inventado como fato real, são apenas valores de demonstração no mesmo
// formato do dado real, para que o layout e os links funcionem durante o
// desenvolvimento.
// ============================================================================

export const hotel = {
  name: "Aldeias Palace Hotel",
  shortName: "Aldeias Palace",
  city: "Tucumã",
  state: "Pará",
  road: "PA-279",

  // PLACEHOLDER — endereço completo (rua, número, bairro, CEP) a confirmar
  address: "PA-279, Tucumã - PA, Brasil (endereço completo a confirmar)",
  addressIsPlaceholder: true,

  // PLACEHOLDER — telefone fixo/comercial real do hotel
  phone: "+55 (94) 0000-0000",
  phoneIsPlaceholder: true,
  // Versão só-números do telefone, usada no link "tel:"
  phoneDialCode: "+559400000000",

  // PLACEHOLDER — número de WhatsApp real, formato internacional sem símbolos
  whatsapp: "5594000000000",
  whatsappIsPlaceholder: true,

  // PLACEHOLDER — e-mail oficial de reservas/contato
  email: "contato@aldeiaspalacehotel.com.br",
  emailIsPlaceholder: true,

  // PLACEHOLDER — nota de reservas enviada por e-mail (mailto) usa este endereço
  reservationsEmail: "reservas@aldeiaspalacehotel.com.br",

  // Nota: manter a nota de rating/reviewCount só é válida se vier do
  // Google Meu Negócio real do hotel, substituir quando confirmado.
  rating: 4.3,
  reviewCount: 300,
  ratingIsPlaceholder: true,

  // PLACEHOLDER — link direto para a página de avaliações do Google do hotel
  googleReviewsUrl: "https://www.google.com/maps",

  // PLACEHOLDER — trocar pelo endereço/coordenadas exatos assim que confirmados.
  // Nenhuma coordenada foi inventada: o embed atual usa apenas a busca por
  // texto "Tucumã, Pará", sem latitude/longitude fictícias.
  mapsEmbedUrl: "https://www.google.com/maps?q=Tucum%C3%A3,+Par%C3%A1&output=embed",
  mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Tucum%C3%A3,Par%C3%A1",
  mapsIsPlaceholder: true,

  // PLACEHOLDER — horários reais de check-in/check-out
  checkIn: "A confirmar",
  checkOut: "A confirmar",

  // PLACEHOLDER — perfis reais. Enquanto forem null, os ícones não são
  // renderizados no site (evita botões quebrados apontando para "#").
  socials: {
    instagram: null as string | null,
    facebook: null as string | null,
  },

  seo: {
    title: "Aldeias Palace Hotel | Hotel em Tucumã - PA",
    description:
      "Hospede-se no Aldeias Palace Hotel em Tucumã, Pará. Conheça nossas acomodações, comodidades e estrutura. Consulte disponibilidade e reserve pelo WhatsApp.",
    keywords: [
      "Hotel em Tucumã",
      "Hotel Tucumã PA",
      "Hotéis em Tucumã",
      "Hospedagem em Tucumã",
      "Hotel no Pará",
      "Hotel PA-279",
      "Hospedagem corporativa em Tucumã",
    ],
  },
};
