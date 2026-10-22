import type { Metadata } from "next";
import * as Icons from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { amenities } from "@/data/amenities";

export const metadata: Metadata = {
  title: "Comodidades",
  description: "Confira as comodidades do Pluma's Hotel em Tucumã, Pará.",
};

export default function ComodidadesPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-graphite-950">
        <div className="container-edit">
          <Reveal>
            <h1 className="font-display text-4xl md:text-6xl text-sand-50">Comodidades</h1>
          </Reveal>
          <SectionHeading title="Tudo o que você precisa em um só lugar" dark className="mt-10" />

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-graphite-800/60">
            {amenities.map((item, i) => {
              const Icon = (Icons as any)[item.icon] ?? Icons.Sparkles;
              return (
                <Reveal key={item.label} delay={i * 0.05} className="bg-graphite-950 px-6 py-10 flex flex-col items-center text-center gap-4">
                  <Icon size={26} className="text-champagne-400" strokeWidth={1.5} />
                  <span className="text-sand-100 text-sm">{item.label}</span>
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
