import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Galeria",
  description: "Fotos do Aldeias Palace Hotel: quartos, café da manhã, restaurante e áreas comuns.",
};

export default function GaleriaPage() {
  return (
    <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-sand-50">
      <div className="container-edit">
        <Reveal>
          <h1 className="font-display text-4xl md:text-6xl text-graphite-900">Galeria</h1>
          <p className="mt-4 text-sm text-graphite-800/60 max-w-xl">
            As fotografias abaixo são imagens de demonstração e serão
            substituídas pela fotografia profissional real do hotel antes da
            publicação do site.
          </p>
        </Reveal>
        <div className="mt-14">
          <Gallery />
        </div>
      </div>
    </section>
  );
}
