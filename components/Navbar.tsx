"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Início" },
  { href: "/hotel", label: "O Hotel" },
  { href: "/acomodacoes", label: "Acomodações" },
  { href: "/comodidades", label: "Comodidades" },
  { href: "/galeria", label: "Galeria" },
  { href: "/localizacao", label: "Localização" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-sand-50/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(28,26,23,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="container-edit flex items-center justify-between h-20 md:h-24">
        <Link href="/" className="focus-ring leading-none" onClick={() => setOpen(false)}>
          <span
            className={`block font-display text-lg md:text-xl tracking-wide2 ${
              scrolled || open ? "text-graphite-900" : "text-sand-50"
            }`}
          >
            Pluma's
          </span>
          <span
            className={`block font-body text-[10px] md:text-xs tracking-[0.25em] mt-0.5 ${
              scrolled || open ? "text-champagne-600" : "text-sand-100"
            }`}
          >
            hotel
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`focus-ring text-sm font-body transition-colors ${
                scrolled ? "text-graphite-800 hover:text-champagne-600" : "text-sand-50 hover:text-champagne-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className={`focus-ring border px-6 py-2.5 text-sm font-body transition-colors ${
              scrolled
                ? "border-graphite-900 text-graphite-900 hover:bg-graphite-900 hover:text-sand-50"
                : "border-sand-50 text-sand-50 hover:bg-sand-50 hover:text-graphite-900"
            }`}
          >
            Reservar
          </Link>
        </nav>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`focus-ring lg:hidden p-2 ${scrolled || open ? "text-graphite-900" : "text-sand-50"}`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-sand-50 border-t border-sand-200 overflow-hidden"
          >
            <div className="container-edit flex flex-col py-6 gap-1">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="focus-ring block py-3 text-lg font-display text-graphite-900 border-b border-sand-200"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contato"
                onClick={() => setOpen(false)}
                className="focus-ring mt-5 text-center bg-graphite-900 text-sand-50 py-3.5 text-sm tracking-wide"
              >
                Reservar
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
