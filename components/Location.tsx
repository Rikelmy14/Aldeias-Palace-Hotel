import { MapPin, Navigation } from "lucide-react";
import { hotel } from "@/data/hotel";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Location() {
  return (
    <section className="py-24 md:py-32 bg-sand-50">
      <div className="container-edit grid md:grid-cols-2 gap-12 items-start">
        <div>
          <SectionHeading title="Localização estratégica em Tucumã" />
          <Reveal delay={0.1} className="mt-8 space-y-3">
            <p className="flex items-center gap-2.5 text-graphite-900">
              <MapPin size={18} className="text-champagne-600 shrink-0" />
              {hotel.city} — {hotel.state}
            </p>
            <p className="flex items-center gap-2.5 text-graphite-900">
              <MapPin size={18} className="text-champagne-600 shrink-0" />
              {hotel.road}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href={hotel.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 mt-9 border border-graphite-900 text-graphite-900 px-8 py-3.5 text-sm tracking-wide hover:bg-graphite-900 hover:text-sand-50 transition-colors"
            >
              <Navigation size={16} /> Como chegar
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="aspect-[4/3] w-full">
          <iframe
            title={`Mapa de localização do ${hotel.name}`}
            src={hotel.mapsEmbedUrl}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
