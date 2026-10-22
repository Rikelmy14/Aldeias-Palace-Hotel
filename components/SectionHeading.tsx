import Reveal from "./Reveal";

export default function SectionHeading({
  title,
  align = "left",
  dark = false,
  className = "",
}: {
  title: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={`${align === "center" ? "text-center mx-auto" : ""} ${className}`}>
      <h2
        className={`font-display text-3xl md:text-[2.6rem] leading-tight max-w-2xl ${
          dark ? "text-sand-50" : "text-graphite-900"
        } ${align === "center" ? "mx-auto" : ""}`}
      >
        {title}
      </h2>
      <div className={`mt-5 h-px w-16 bg-champagne-500 ${align === "center" ? "mx-auto" : ""}`} />
    </Reveal>
  );
}
