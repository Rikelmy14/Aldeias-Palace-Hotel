import Image from "next/image";
import Reveal from "./Reveal";

export default function BreakfastSection() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="absolute inset-0">
        <Image
          // PLACEHOLDER: substituir por fotografia real do café da manhã do hotel
          src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2400&auto=format&fit=crop"
          alt="Café da manhã do Aldeias Palace Hotel"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-graphite-950/55" />
      </div>

      <div className="relative container-edit">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-3xl md:text-[2.6rem] leading-tight text-sand-50">
            Comece o dia bem
          </h2>
          <div className="mt-5 h-px w-16 bg-champagne-400" />
          <p className="mt-7 text-sand-100/90 leading-relaxed">
            Desfrute de um café da manhã preparado para começar sua jornada
            com energia. Horários e itens do cardápio serão confirmados pelo
            hotel antes da publicação do site.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
