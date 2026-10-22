"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { faqItems } from "@/data/faq";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-sand-100">
      <div className="container-edit max-w-3xl">
        <SectionHeading title="Perguntas frequentes" />

        <div className="mt-12 divide-y divide-sand-300">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.question} delay={Math.min(i * 0.04, 0.3)}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="focus-ring w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg text-graphite-900">{item.question}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
                    <Plus size={20} className="text-champagne-600 shrink-0" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-graphite-800/80 leading-relaxed max-w-prose2">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
