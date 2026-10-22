"use client";

import { motion } from "framer-motion";
import { Star, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { hotel } from "@/data/hotel";

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[620px] w-full overflow-hidden">
      <Image
        // PLACEHOLDER: substituir pela fotografia real da fachada do hotel
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2400&auto=format&fit=crop"
        alt={`Fachada do ${hotel.name}`}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/80 via-graphite-950/35 to-graphite-950/50" />

      <div className="relative z-10 h-full container-edit flex flex-col justify-end pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-2 text-sand-100 mb-6"
        >
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={15}
                className={i < Math.round(hotel.rating) ? "fill-champagne-400 text-champagne-400" : "text-sand-100/40"}
              />
            ))}
          </div>
          <span className="text-sm font-body">
            {hotel.rating.toString().replace(".", ",")} no Google · +{hotel.reviewCount} avaliações
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="font-display text-sand-50 text-[2.5rem] leading-[1.08] sm:text-6xl md:text-7xl max-w-4xl"
        >
          Sua estadia em Tucumã começa aqui.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.22 }}
          className="mt-6 max-w-xl text-sand-100/90 text-base md:text-lg leading-relaxed"
        >
          Conforto, praticidade e hospitalidade para tornar sua passagem por Tucumã uma experiência especial.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.34 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <a
            href="#reserva-rapida"
            className="focus-ring bg-champagne-500 text-graphite-950 px-8 py-4 text-sm tracking-wide hover:bg-champagne-400 transition-colors"
          >
            Reservar agora
          </a>
          <Link
            href="/hotel"
            className="focus-ring border border-sand-50/70 text-sand-50 px-8 py-4 text-sm tracking-wide hover:bg-sand-50 hover:text-graphite-900 transition-colors"
          >
            Conhecer o hotel
          </Link>
        </motion.div>
      </div>

      <motion.a
        href="#reserva-rapida"
        aria-label="Rolar para baixo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.6 }, y: { repeat: Infinity, duration: 1.8, ease: "easeInOut" } }}
        className="focus-ring absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-sand-50/80"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
