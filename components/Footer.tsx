import Link from "next/link";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { hotel } from "@/data/hotel";

const links = [
  { href: "/", label: "Início" },
  { href: "/hotel", label: "O Hotel" },
  { href: "/acomodacoes", label: "Acomodações" },
  { href: "/comodidades", label: "Comodidades" },
  { href: "/galeria", label: "Galeria" },
  { href: "/localizacao", label: "Localização" },
  { href: "/contato", label: "Contato" },
];

export default function Footer() {
  const hasSocials = hotel.socials.instagram || hotel.socials.facebook;

  return (
    <footer className="bg-graphite-950 text-sand-100">
      <div className="container-edit py-16 grid md:grid-cols-4 gap-12">
        <div>
          <span className="block font-display text-lg tracking-wide2 text-sand-50">Aldeias</span>
          <span className="block text-xs tracking-[0.25em] text-champagne-400 mt-0.5">
            PALACE HOTEL
          </span>
          <p className="mt-5 text-sm text-sand-100/60 leading-relaxed max-w-xs">
            Hospitalidade e conforto no coração de Tucumã, Pará.
          </p>
          {hasSocials && (
            <div className="flex gap-4 mt-6">
              {hotel.socials.instagram && (
                <a
                  href={hotel.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram do hotel"
                  className="focus-ring text-sand-100/70 hover:text-champagne-400"
                >
                  <Instagram size={18} />
                </a>
              )}
              {hotel.socials.facebook && (
                <a
                  href={hotel.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook do hotel"
                  className="focus-ring text-sand-100/70 hover:text-champagne-400"
                >
                  <Facebook size={18} />
                </a>
              )}
            </div>
          )}
        </div>

        <div>
          <h3 className="text-sm text-sand-50 mb-4">Navegação</h3>
          <ul className="space-y-2.5">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="focus-ring text-sm text-sand-100/70 hover:text-champagne-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm text-sand-50 mb-4">Contato</h3>
          <ul className="space-y-2.5 text-sm text-sand-100/70">
            <li className="flex items-center gap-2.5">
              <Phone size={14} className="shrink-0" />
              <a href={`tel:${hotel.phoneDialCode}`} className="focus-ring hover:text-champagne-400">
                {hotel.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={14} className="shrink-0" />
              <a href={`mailto:${hotel.email}`} className="focus-ring hover:text-champagne-400">
                {hotel.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={14} className="mt-0.5 shrink-0" /> {hotel.address}
            </li>
          </ul>
          {(hotel.phoneIsPlaceholder || hotel.emailIsPlaceholder || hotel.addressIsPlaceholder) && (
            <p className="mt-4 text-xs text-champagne-400/80 leading-relaxed">
              Dados de contato provisórios — a confirmar pelo hotel.
            </p>
          )}
        </div>

        <div>
          <h3 className="text-sm text-sand-50 mb-4">Institucional</h3>
          <ul className="space-y-2.5">
            <li>
              <Link href="/politica-de-privacidade" className="focus-ring text-sm text-sand-100/70 hover:text-champagne-400">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/politica-de-privacidade#termos" className="focus-ring text-sm text-sand-100/70 hover:text-champagne-400">
                Termos de Uso
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-graphite-800">
        <div className="container-edit py-6 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-sand-100/50">
          <p>© 2026 {hotel.name}. Todos os direitos reservados.</p>
          <p>Desenvolvido por Code Craft Lab</p>
        </div>
      </div>
    </footer>
  );
}
