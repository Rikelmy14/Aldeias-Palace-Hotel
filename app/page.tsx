import Hero from "@/components/Hero";
import BookingWidget from "@/components/BookingWidget";
import HotelIntro from "@/components/HotelIntro";
import RoomCard from "@/components/RoomCard";
import Amenities from "@/components/Amenities";
import BreakfastSection from "@/components/BreakfastSection";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import CorporateSection from "@/components/CorporateSection";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import SectionHeading from "@/components/SectionHeading";
import { rooms } from "@/data/rooms";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BookingWidget />
      <HotelIntro />

      <section className="py-24 md:py-32 bg-sand-50">
        <div className="container-edit">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading title="Encontre o quarto ideal para sua estadia" />
            <Link
              href="/acomodacoes"
              className="focus-ring text-sm text-champagne-600 hover:text-champagne-500 whitespace-nowrap"
            >
              Ver todas as acomodações →
            </Link>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-10">
            {rooms.map((room, i) => (
              <RoomCard key={room.slug} room={room} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <Amenities />
      <BreakfastSection />
      <Reviews />
      <Location />
      <CorporateSection />
      <FAQ />
      <CTA />
    </>
  );
}
