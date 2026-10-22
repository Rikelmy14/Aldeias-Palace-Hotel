"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, generalMessage } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  const url = buildWhatsAppUrl(generalMessage());

  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Reservar pelo WhatsApp"
        className="focus-ring hidden md:flex fixed bottom-7 right-7 z-40 items-center gap-2.5 bg-[#25D366] text-white pl-4 pr-5 py-3.5 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)] hover:brightness-95 transition"
      >
        <MessageCircle size={20} />
        <span className="text-sm font-medium">Reservar pelo WhatsApp</span>
      </a>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Reservar pelo WhatsApp"
        className="focus-ring md:hidden fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 text-sm font-medium"
      >
        <MessageCircle size={18} />
        Reservar pelo WhatsApp
      </a>
    </>
  );
}
