import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import RoomCard from "@/components/RoomCard";
import CTA from "@/components/CTA";
import { rooms } from "@/data/rooms";

export const metadata: Metadata = {
  title: "Acomodações",
  description:
    "Conheça as acomodações do Pluma's Hotel em Tucumã, Pará, e consulte disponibilidade pelo WhatsApp.",
};

export default function AcomodacoesPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 bg-sand-50">
        <div className="container-edit">
          <Reveal>
            <h1 className="font-display text-4xl md:text-6xl text-graphite-900">Acomodações</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading title="Encontre o quarto ideal para sua estadia" className="mt-10" />
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32 bg-sand-50">
        <div className="container-edit grid md:grid-cols-3 gap-10">
          {rooms.map((room, i) => (
            <RoomCard key={room.slug} room={room} delay={i * 0.1} />
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
