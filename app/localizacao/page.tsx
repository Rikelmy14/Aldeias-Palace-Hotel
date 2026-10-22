import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Location from "@/components/Location";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Localização",
  description: "Veja como chegar ao Pluma's Hotel, em Tucumã, Pará.",
};

export default function LocalizacaoPage() {
  return (
    <>
      <section className="pt-40 pb-4 md:pt-48 bg-sand-50">
        <div className="container-edit">
          <Reveal>
            <h1 className="font-display text-4xl md:text-6xl text-graphite-900">Localização</h1>
          </Reveal>
        </div>
      </section>
      <Location />
      <CTA />
    </>
  );
}
