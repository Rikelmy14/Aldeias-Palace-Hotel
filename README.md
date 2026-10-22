# Aldeias Palace Hotel — Website

Website institucional do Aldeias Palace Hotel (Tucumã, Pará), desenvolvido
pela Code Craft Lab.

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Como rodar
\`\`\`bash
npm install
npm run dev
\`\`\`

Acesse http://localhost:3000

## Conteúdo a confirmar antes de publicar

Todo o conteúdo editável está centralizado em `/data`:

- `data/hotel.ts` — telefone, WhatsApp, e-mail, endereço, mapa, check-in/out
- `data/rooms.ts` — acomodações (nomes, descrições, fotos reais)
- `data/reviews.ts` — avaliações reais do Google (atualmente placeholders)
- `data/gallery.ts` — fotografia profissional real do hotel
- `data/faq.ts` — respostas confirmadas pelo hotel

Todas as imagens atuais são placeholders de banco de imagens (Unsplash) e
devem ser substituídas pela fotografia profissional real do hotel antes da
publicação.

## Build
\`\`\`bash
npm run build
npm run start
\`\`\`
