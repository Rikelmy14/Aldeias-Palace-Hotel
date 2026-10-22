import { MetadataRoute } from "next";
import { rooms } from "@/data/rooms";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.pluma'shotel.com.br";

  const staticRoutes = [
    "",
    "/hotel",
    "/acomodacoes",
    "/comodidades",
    "/galeria",
    "/localizacao",
    "/contato",
    "/politica-de-privacidade",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const roomRoutes = rooms.map((room) => ({
    url: `${base}/acomodacoes/${room.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...roomRoutes];
}
