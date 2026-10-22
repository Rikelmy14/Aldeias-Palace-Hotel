import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import Location from "@/components/Location";
import { hotel } from "@/data/hotel";
import { buildWhatsAppUrl, generalMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com o Aldeias Palace Hotel em Tucumã, Pará, por telefone, e-mail ou WhatsApp.",
};

export default function ContatoPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-sand-50">
        <div className="container-edit grid md:grid-cols-2 gap-16">
          <Reveal>
            <h1 className="font-display text-4xl md:text-6xl text-graphite-900">Contato</h1>
            <div className="mt-5 h-px w-16 bg-champagne-500" />

            <ul className="mt-9 space-y-6">
              <li className="flex items-start gap-3.5">
                <Phone size={18} className="text-champagne-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-graphite-800/60">Telefone</p>
                  <a href={`tel:${hotel.phoneDialCode}`} className="focus-ring text-graphite-900 hover:text-champagne-600">
                    {hotel.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <Mail size={18} className="text-champagne-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-graphite-800/60">E-mail</p>
                  <a href={`mailto:${hotel.email}`} className="focus-ring text-graphite-900 hover:text-champagne-600">
                    {hotel.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <MapPin size={18} className="text-champagne-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-graphite-800/60">Endereço</p>
                  <p className="text-graphite-900">{hotel.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <Clock size={18} className="text-champagne-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-graphite-800/60">Horário de atendimento</p>
                  <p className="text-graphite-900">Recepção 24 horas</p>
                </div>
              </li>
            </ul>

            {(hotel.phoneIsPlaceholder || hotel.emailIsPlaceholder || hotel.addressIsPlaceholder) && (
              <p className="mt-5 text-xs text-champagne-600">
                Dados de contato provisórios — a confirmar pelo hotel antes da publicação.
              </p>
            )}

            <a
              href={buildWhatsAppUrl(generalMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2.5 mt-10 bg-graphite-900 text-sand-50 px-9 py-4 text-sm tracking-wide hover:bg-graphite-800 transition-colors"
            >
              <MessageCircle size={17} /> Falar pelo WhatsApp
            </a>
          </Reveal>

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
    </>
  );
}
