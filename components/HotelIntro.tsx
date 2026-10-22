import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import Reveal from "./Reveal";

const highlights = [
  "Wi-Fi",
  "Ar-condicionado",
  "Café da manhã",
  "Estacionamento",
  "Frigobar",
  "TV",
  "Atendimento 24 horas",
];

export default function HotelIntro() {
  return (
    <section className="py-24 md:py-32 bg-sand-50">
      <div className="container-edit grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <Reveal className="relative aspect-[4/5] md:aspect-[4/5]">
          <Image
            // PLACEHOLDER: substituir por fotografia real da área interna do hotel
            src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1600&auto=format&fit=crop"
            alt="Área interna do Aldeias Palace Hotel"
            fill
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-[2.6rem] leading-tight text-graphite-900">
            Conforto, hospitalidade e praticidade
          </h2>
          <div className="mt-5 h-px w-16 bg-champagne-500" />
          <p className="mt-7 text-graphite-800/85 leading-relaxed max-w-prose2">
            O Aldeias Palace Hotel foi criado para receber bem quem passa por
            Tucumã, seja a trabalho, em família ou de passagem. Estrutura
            pensada para o dia a dia do hóspede, com atenção aos detalhes que
            fazem diferença em uma boa estadia.
          </p>

          <ul className="mt-9 grid grid-cols-2 gap-x-6 gap-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-graphite-900">
                <Check size={16} className="text-champagne-600 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/hotel"
            className="focus-ring inline-block mt-10 border border-graphite-900 text-graphite-900 px-8 py-3.5 text-sm tracking-wide hover:bg-graphite-900 hover:text-sand-50 transition-colors"
          >
            Conheça o hotel
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
