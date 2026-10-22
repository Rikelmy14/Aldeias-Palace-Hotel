import { hotel } from "@/data/hotel";

export function buildWhatsAppUrl(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${hotel.whatsapp}?text=${encoded}`;
}

// Nota: esta mensagem representa uma SOLICITAÇÃO de reserva/consulta,
// não uma confirmação de disponibilidade em tempo real — a confirmação
// é feita manualmente pela equipe do hotel via WhatsApp.
export function bookingMessage(checkIn?: string, checkOut?: string, guests?: string) {
  const inPart = checkIn || "[data de check-in]";
  const outPart = checkOut || "[data de check-out]";
  const guestsPart = guests || "[número de hóspedes]";
  return `Olá! Vim pelo site do ${hotel.name} e gostaria de SOLICITAR uma reserva/consulta de disponibilidade para ${inPart} a ${outPart}, para ${guestsPart} hóspedes. Aguardo a confirmação da equipe.`;
}

export function buildBookingMailtoUrl(checkIn?: string, checkOut?: string, guests?: string) {
  const inPart = checkIn || "[data de check-in]";
  const outPart = checkOut || "[data de check-out]";
  const guestsPart = guests || "[número de hóspedes]";
  const subject = `Solicitação de reserva — ${hotel.name}`;
  const body = `Olá,\n\nGostaria de solicitar uma reserva/consulta de disponibilidade:\n\nCheck-in: ${inPart}\nCheck-out: ${outPart}\nHóspedes: ${guestsPart}\n\nEsta é uma solicitação; aguardo a confirmação de disponibilidade da equipe do hotel.\n\nObrigado(a).`;
  return `mailto:${hotel.reservationsEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function roomMessage(roomName: string) {
  return `Olá! Gostaria de SOLICITAR a reserva da acomodação "${roomName}" no ${hotel.name}. Aguardo a confirmação da equipe.`;
}

export function corporateMessage() {
  return `Olá! Gostaria de solicitar informações sobre hospedagem corporativa no ${hotel.name}.`;
}

export function generalMessage() {
  return `Olá! Vim pelo site do ${hotel.name} e gostaria de falar com a recepção.`;
}
