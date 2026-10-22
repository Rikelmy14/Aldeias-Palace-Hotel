import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Users, BedDouble, Bath, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import PlaceholderBadge from "@/components/PlaceholderBadge";
import { rooms } from "@/data/rooms";
import { buildWhatsAppUrl, roomMessage } from "@/lib/whatsapp";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const room = rooms.find((r) => r.slug === params.slug);
  if (!room) return {};
  return {
    title: room.name,
    description: room.description,
  };
}

export default function RoomPage({ params }: { params: { slug: string } }) {
  const room = rooms.find((r) => r.slug === params.slug);
  if (!room) notFound();

  return (
    <>
      <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
        <Image src={room.images[0]} alt={room.name} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-graphite-950/45" />
        <div className="relative z-10 h-full container-edit flex items-end pb-16">
          <Reveal>
            <p className="text-sand-100 text-sm mb-3">
              <Link href="/acomodacoes" className="focus-ring hover:text-champagne-400">
                Acomodações
              </Link>{" "}
              / {room.name}
            </p>
            <h1 className="font-display text-4xl md:text-6xl text-sand-50">{room.name}</h1>
            <div className="mt-4">
              <PlaceholderBadge label="Fotos e descrição provisórias" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-sand-50">
        <div className="container-edit grid md:grid-cols-2 gap-16">
          <div>
            <Reveal className="grid grid-cols-2 gap-4">
              {room.images.map((img, i) => (
                <div key={i} className={`relative aspect-square ${i === 0 ? "col-span-2 aspect-[16/10]" : ""}`}>
                  <Image src={img} alt={`${room.name} — foto ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="text-champagne-600 text-sm">{room.tagline}</p>
              <p className="mt-5 text-graphite-800/85 leading-relaxed max-w-prose2">
                {room.description}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-6 text-sm text-graphite-900">
              <span className="flex items-center gap-2">
                <Users size={16} className="text-champagne-600" /> {room.capacity}
              </span>
              <span className="flex items-center gap-2">
                <BedDouble size={16} className="text-champagne-600" /> {room.bed}
              </span>
              <span className="flex items-center gap-2">
                <Bath size={16} className="text-champagne-600" /> Banheiro privativo
              </span>
            </Reveal>

            <Reveal delay={0.15} className="mt-9">
              <h2 className="font-display text-xl text-graphite-900 mb-4">Comodidades</h2>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-6">
                {room.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-2.5 text-sm text-graphite-900">
                    <Check size={15} className="text-champagne-600 shrink-0" /> {a}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <a
                href={buildWhatsAppUrl(roomMessage(room.name))}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-block mt-10 bg-graphite-900 text-sand-50 px-9 py-4 text-sm tracking-wide hover:bg-graphite-800 transition-colors"
              >
                Reservar este quarto
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
