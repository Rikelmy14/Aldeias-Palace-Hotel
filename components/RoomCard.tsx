import Image from "next/image";
import Link from "next/link";
import { Users, BedDouble } from "lucide-react";
import { Room } from "@/data/rooms";
import { buildWhatsAppUrl, roomMessage } from "@/lib/whatsapp";
import Reveal from "./Reveal";
import PlaceholderBadge from "./PlaceholderBadge";

export default function RoomCard({ room, delay = 0 }: { room: Room; delay?: number }) {
  return (
    <Reveal delay={delay} className="group">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={room.images[0]}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="pt-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl text-graphite-900">{room.name}</h3>
          <PlaceholderBadge />
        </div>
        <p className="mt-1.5 text-sm text-graphite-800/70">{room.tagline}</p>

        <div className="mt-4 flex items-center gap-5 text-xs text-graphite-800/70">
          <span className="flex items-center gap-1.5">
            <Users size={14} /> {room.capacity}
          </span>
          <span className="flex items-center gap-1.5">
            <BedDouble size={14} /> {room.bed}
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/acomodacoes/${room.slug}`}
            className="focus-ring text-sm border border-graphite-900 text-graphite-900 px-5 py-2.5 hover:bg-graphite-900 hover:text-sand-50 transition-colors"
          >
            Ver acomodação
          </Link>
          <a
            href={buildWhatsAppUrl(roomMessage(room.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring text-sm text-champagne-600 px-2 py-2.5 hover:text-champagne-500 transition-colors"
          >
            Consultar disponibilidade
          </a>
        </div>
      </div>
    </Reveal>
  );
}
