import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { amenities } from "@/data/amenities";
import * as Icons from "lucide-react";

export const metadata: Metadata = {
  title: "O Hotel",
  description:
    "Conheça a estrutura, a proposta e a hospitalidade do Pluma's Hotel em Tucumã, Pará.",
};

export default function HotelPage() {
  return (
    <>
      <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2400&auto=format&fit=crop"
          alt="Interior do Pluma's Hotel"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-graphite-950/50" />
        <div className="relative z-10 h-full container-edit flex items-end pb-16">
          <Reveal>
            <h1 className="font-display text-4xl md:text-6xl text-sand-50">O Hotel</h1>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-sand-50">
        <div className="container-edit grid md:grid-cols-2 gap-16 items-start">
          <Reveal>
            <SectionHeading title="Hospitalidade no coração de Tucumã" />
            <p className="mt-7 text-graphite-800/85 leading-relaxed max-w-prose2">
              O Pluma's Hotel foi pensado para quem busca uma estadia
              tranquila, prática e confortável em Tucumã. Cada detalhe da
              nossa estrutura existe para tornar a passagem do hóspede pela
              cidade mais simples e agradável, seja a trabalho, em família
              ou em trânsito.
            </p>
            <p className="mt-5 text-graphite-800/85 leading-relaxed max-w-prose2">
              Nossa equipe está disponível para atender o hóspede a qualquer
              hora, garantindo praticidade do check-in ao check-out.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="relative aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1600&auto=format&fit=crop"
              alt="Recepção do hotel"
              fill
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-sand-100">
        <div className="container-edit">
          <SectionHeading title="Estrutura e comodidades" />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {amenities.map((item, i) => {
              const Icon = (Icons as any)[item.icon] ?? Check;
              return (
                <Reveal key={item.label} delay={i * 0.05} className="flex flex-col items-center text-center gap-3">
                  <Icon size={24} className="text-champagne-600" strokeWidth={1.5} />
                  <span className="text-sm text-graphite-900">{item.label}</span>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
