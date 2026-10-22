import { Star } from "lucide-react";
import { reviews } from "@/data/reviews";
import { hotel } from "@/data/hotel";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import PlaceholderBadge from "./PlaceholderBadge";

export default function Reviews() {
  return (
    <section className="py-24 md:py-32 bg-sand-100">
      <div className="container-edit">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <SectionHeading title="A experiência de nossos hóspedes" />
            <div className="mt-4">
              <PlaceholderBadge label="Avaliações de demonstração" />
            </div>
          </div>
          <Reveal delay={0.1} className="flex items-center gap-4">
            <span className="font-display text-4xl text-graphite-900">
              {hotel.rating.toString().replace(".", ",")}
            </span>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className={i < Math.round(hotel.rating) ? "fill-champagne-500 text-champagne-500" : "text-sand-300"}
                  />
                ))}
              </div>
              <p className="text-xs text-graphite-800/70 mt-1">
                +{hotel.reviewCount} avaliações no Google
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <Reveal key={i} delay={i * 0.08} className="bg-sand-50 p-8 border border-sand-200">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    size={13}
                    className={s < review.rating ? "fill-champagne-500 text-champagne-500" : "text-sand-300"}
                  />
                ))}
              </div>
              <p className="text-sm text-graphite-800/85 leading-relaxed italic">
                “{review.text}”
              </p>
              <p className="mt-5 text-sm text-graphite-900 font-medium">{review.author}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12">
          <a
            href={hotel.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-block border border-graphite-900 text-graphite-900 px-8 py-3.5 text-sm tracking-wide hover:bg-graphite-900 hover:text-sand-50 transition-colors"
          >
            Ver avaliações no Google
          </a>
        </Reveal>
      </div>
    </section>
  );
}
