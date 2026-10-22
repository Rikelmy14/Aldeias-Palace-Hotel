import { Info } from "lucide-react";

export default function PlaceholderBadge({ label = "Conteúdo provisório" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] tracking-wide text-champagne-600 border border-champagne-500/40 bg-champagne-500/10 px-2.5 py-1">
      <Info size={12} />
      {label}
    </span>
  );
}
