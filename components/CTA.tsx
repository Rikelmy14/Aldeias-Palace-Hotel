import { buildWhatsAppUrl, generalMessage } from "@/lib/whatsapp";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="py-24 md:py-28 bg-champagne-500">
      <div className="container-edit text-center">
        <Reveal className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-graphite-950 leading-tight">
            Pronto para reservar sua estadia em Tucumã?
          </h2>
          <p className="mt-4 text-graphite-950/75">
            Fale agora com a nossa recepção pelo WhatsApp e garanta seu quarto.
          </p>
          <a
            href={buildWhatsAppUrl(generalMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-block mt-9 bg-graphite-950 text-sand-50 px-9 py-4 text-sm tracking-wide hover:bg-graphite-800 transition-colors"
          >
            Reservar pelo WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
