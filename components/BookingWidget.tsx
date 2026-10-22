"use client";

import { useState } from "react";
import { CalendarDays, Users, Mail, AlertCircle } from "lucide-react";
import { buildWhatsAppUrl, bookingMessage, buildBookingMailtoUrl } from "@/lib/whatsapp";

function formatDate(value: string) {
  if (!value) return "";
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}

export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [error, setError] = useState("");

  const todayIso = new Date().toISOString().split("T")[0];

  const validate = () => {
    if (!checkIn || !checkOut || !guests) {
      setError("Preencha check-in, check-out e número de hóspedes.");
      return false;
    }
    if (checkOut <= checkIn) {
      setError("A data de check-out deve ser depois da data de check-in.");
      return false;
    }
    if (checkIn < todayIso) {
      setError("A data de check-in não pode estar no passado.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const url = buildWhatsAppUrl(bookingMessage(formatDate(checkIn), formatDate(checkOut), guests));
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleEmail = () => {
    if (!validate()) return;
    const url = buildBookingMailtoUrl(formatDate(checkIn), formatDate(checkOut), guests);
    window.location.href = url;
  };

  return (
    <section id="reserva-rapida" className="relative -mt-16 md:-mt-20 z-20">
      <div className="container-edit">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-sand-50 shadow-[0_20px_60px_-20px_rgba(28,26,23,0.25)] border border-sand-200 px-6 py-8 md:px-10 md:py-9"
        >
          <h2 className="font-display text-xl md:text-2xl text-graphite-900 mb-2">
            Encontre sua hospedagem
          </h2>
          <p className="text-xs text-graphite-800/60 mb-6">
            Esta é uma solicitação de reserva, nossa equipe confirmará a
            disponibilidade e retornará pelo WhatsApp.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-end">
            <label className="block">
              <span className="flex items-center gap-2 text-xs tracking-wide text-graphite-800/70 mb-2">
                <CalendarDays size={14} /> Check-in
              </span>
              <input
                type="date"
                required
                min={todayIso}
                value={checkIn}
                onChange={(e) => {
                  setCheckIn(e.target.value);
                  if (checkOut && checkOut <= e.target.value) setCheckOut("");
                  setError("");
                }}
                className="focus-ring w-full border border-sand-300 bg-sand-50 px-3 py-3 text-sm text-graphite-900"
                aria-label="Data de check-in"
              />
            </label>
            <label className="block">
              <span className="flex items-center gap-2 text-xs tracking-wide text-graphite-800/70 mb-2">
                <CalendarDays size={14} /> Check-out
              </span>
              <input
                type="date"
                required
                min={checkIn || todayIso}
                disabled={!checkIn}
                value={checkOut}
                onChange={(e) => {
                  setCheckOut(e.target.value);
                  setError("");
                }}
                className="focus-ring w-full border border-sand-300 bg-sand-50 px-3 py-3 text-sm text-graphite-900 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Data de check-out"
              />
            </label>
            <label className="block">
              <span className="flex items-center gap-2 text-xs tracking-wide text-graphite-800/70 mb-2">
                <Users size={14} /> Hóspedes
              </span>
              <input
                type="number"
                min={1}
                required
                value={guests}
                onChange={(e) => {
                  setGuests(e.target.value);
                  setError("");
                }}
                placeholder="2"
                className="focus-ring w-full border border-sand-300 bg-sand-50 px-3 py-3 text-sm text-graphite-900"
                aria-label="Número de hóspedes"
              />
            </label>
            <button
              type="submit"
              className="focus-ring bg-graphite-900 text-sand-50 py-3.5 text-sm tracking-wide hover:bg-graphite-800 transition-colors"
            >
              Consultar disponibilidade
            </button>
          </div>

          {error && (
            <p role="alert" className="mt-4 flex items-center gap-2 text-sm text-red-700">
              <AlertCircle size={15} className="shrink-0" /> {error}
            </p>
          )}

          <button
            type="button"
            onClick={handleEmail}
            className="focus-ring mt-5 inline-flex items-center gap-2 text-sm text-champagne-600 hover:text-champagne-500"
          >
            <Mail size={15} /> Prefiro solicitar por e-mail
          </button>
        </form>
      </div>
    </section>
  );
}
