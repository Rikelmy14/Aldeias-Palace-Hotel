import { Briefcase } from "lucide-react";
import { buildWhatsAppUrl, corporateMessage } from "@/lib/whatsapp";
import Reveal from "./Reveal";

export default function CorporateSection() {
  return (
    <section className="py-24 md:py-28 bg-graphite-900">
      <div className="container-edit flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        <Reveal className="max-w-xl">
          <div className="flex items-center gap-3 text-champagne-400 mb-4">
            <Briefcase size={20} />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-sand-50 leading-tight">
            Hospedagem para empresas
          </h2>
          <p className="mt-5 text-sand-100/80 leading-relaxed">
            Uma solução prática para empresas, profissionais e equipes que
            precisam de hospedagem em Tucumã.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href={buildWhatsAppUrl(corporateMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-block bg-champagne-500 text-graphite-950 px-8 py-4 text-sm tracking-wide hover:bg-champagne-400 transition-colors whitespace-nowrap"
          >
            Solicitar orçamento
          </a>
        </Reveal>
      </div>
    </section>
  );
}
