"use client";

import * as Icons from "lucide-react";
import { amenities } from "@/data/amenities";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Amenities() {
  return (
    <section className="py-24 md:py-32 bg-graphite-950">
      <div className="container-edit">
        <SectionHeading title="Tudo o que você precisa em um só lugar" dark />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-graphite-800/60">
          {amenities.map((item, i) => {
            const Icon = (Icons as any)[item.icon] ?? Icons.Sparkles;
            return (
              <Reveal key={item.label} delay={i * 0.05} className="bg-graphite-950 px-6 py-10 flex flex-col items-center text-center gap-4">
                <Icon size={26} className="text-champagne-400" strokeWidth={1.5} />
                <span className="text-sand-100 text-sm">{item.label}</span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
