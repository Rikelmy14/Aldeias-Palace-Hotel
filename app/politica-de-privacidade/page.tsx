import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { hotel } from "@/data/hotel";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade e Termos de Uso do site do Aldeias Palace Hotel.",
};

export default function PoliticaPrivacidadePage() {
  return (
    <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-sand-50">
      <div className="container-edit max-w-prose2">
        <Reveal>
          <h1 className="font-display text-4xl md:text-5xl text-graphite-900">
            Política de Privacidade
          </h1>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 space-y-6 text-graphite-800/85 leading-relaxed">
          <p>
            Este site tem como objetivo apresentar o {hotel.name} e facilitar o
            contato de visitantes interessados em se hospedar em Tucumã, Pará.
            O conteúdo completo desta política será confirmado e detalhado
            pelo hotel antes da publicação oficial do site.
          </p>
          <p>
            [PLACEHOLDER] Informações sobre coleta de dados de navegação,
            cookies, formulários de contato e uso de ferramentas de análise
            devem ser inseridas aqui conforme a política definida pelo hotel.
          </p>
          <p>
            Em caso de dúvidas sobre privacidade e uso de dados, entre em
            contato pelo e-mail {hotel.email}.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-16 space-y-6 text-graphite-800/85 leading-relaxed" >
          <h2 id="termos" className="font-display text-2xl md:text-3xl text-graphite-900 scroll-mt-28">
            Termos de Uso
          </h2>
          <p>
            [PLACEHOLDER] Os termos de uso do site — regras de utilização,
            responsabilidades do hotel e do usuário, limitações de
            responsabilidade e legislação aplicável — devem ser inseridos
            aqui conforme definição jurídica do hotel antes da publicação.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
