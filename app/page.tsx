import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { ZonesSection } from "@/components/zones-section";
import { ReviewsSection } from "@/components/reviews-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Dépannage Pneu à Domicile Lausanne | Intervention 24h/24 7j/7",
  description: "Pneu crevé à Lausanne ? Marie Pneu intervient en moins de 30 minutes chez vous, sur la route ou au travail. Réparation crevaison, changement roue, remplacement valve et capteur. Appelez-nous !",
  keywords: ["dépannage pneu Lausanne", "pneu crevé Lausanne", "changement roue domicile", "réparation crevaison", "remplacement valve", "capteur pression pneu", "dépannage 24h/24", "urgence pneu Vaud"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dépannage Pneu à Domicile Lausanne | Marie Pneu 24h/24",
    description: "Pneu crevé ? Intervention rapide en moins de 30 minutes à Lausanne et alentours. Appelez-nous !",
    url: "https://www.depannagepneus.ch/",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <ZonesSection />
      <ReviewsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
