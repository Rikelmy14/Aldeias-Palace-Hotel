import type { Metadata } from "next";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { hotel } from "@/data/hotel";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aldeiaspalacehotel.com.br"),
  title: {
    default: hotel.seo.title,
    template: `%s | ${hotel.name}`,
  },
  description: hotel.seo.description,
  keywords: hotel.seo.keywords,
  openGraph: {
    title: hotel.seo.title,
    description: hotel.seo.description,
    url: "https://www.aldeiaspalacehotel.com.br",
    siteName: hotel.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: hotel.seo.title,
    description: hotel.seo.description,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: hotel.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: hotel.city,
      addressRegion: hotel.state,
      addressCountry: "BR",
    },
    telephone: hotel.phone,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: hotel.rating,
      reviewCount: hotel.reviewCount,
    },
  };

  return (
    <html lang="pt-BR">
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Navbar />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
