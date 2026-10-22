"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryImages, GalleryCategory } from "@/data/gallery";
import Reveal from "./Reveal";

const categories: ("Todas" | GalleryCategory)[] = [
  "Todas",
  "Hotel",
  "Quartos",
  "Café da manhã",
  "Restaurante",
  "Áreas comuns",
];

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Todas");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const filtered =
    filter === "Todas" ? galleryImages : galleryImages.filter((img) => img.category === filter);

  const open = (index: number) => {
    lastFocusedRef.current = document.activeElement as HTMLElement;
    setActiveIndex(index);
  };

  const close = () => {
    setActiveIndex(null);
    lastFocusedRef.current?.focus();
  };

  const next = () => setActiveIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));

  useEffect(() => {
    if (activeIndex === null) return;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, filtered.length]);

  return (
    <section>
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setActiveIndex(null);
            }}
            className={`focus-ring text-sm px-5 py-2.5 border transition-colors ${
              filter === cat
                ? "bg-graphite-900 text-sand-50 border-graphite-900"
                : "border-sand-300 text-graphite-800 hover:border-graphite-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {filtered.map((img, i) => (
          <Reveal key={img.src + i} delay={(i % 6) * 0.05} className="break-inside-avoid">
            <button
              onClick={() => open(i)}
              className="focus-ring relative block w-full overflow-hidden group"
              aria-label={`Ampliar imagem: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={700}
                height={i % 3 === 0 ? 900 : 560}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-graphite-950/0 group-hover:bg-graphite-950/15 transition-colors" />
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-graphite-950/95 flex items-center justify-center p-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`Imagem ampliada: ${filtered[activeIndex].alt}`}
          >
            <button
              ref={closeButtonRef}
              aria-label="Fechar galeria"
              onClick={close}
              className="focus-ring absolute top-6 right-6 text-sand-50 hover:text-champagne-400"
            >
              <X size={30} />
            </button>
            <button
              aria-label="Imagem anterior"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="focus-ring absolute left-4 md:left-10 text-sand-50 hover:text-champagne-400"
            >
              <ChevronLeft size={36} />
            </button>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl max-h-[80vh] w-full aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[activeIndex].src}
                alt={filtered[activeIndex].alt}
                fill
                className="object-contain"
              />
            </motion.div>
            <button
              aria-label="Próxima imagem"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="focus-ring absolute right-4 md:right-10 text-sand-50 hover:text-champagne-400"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
