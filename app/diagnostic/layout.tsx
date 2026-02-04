import React from "react"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnostic Automobile à Domicile Lausanne | Lecture Codes Erreur 24h/24",
  description: "Voyant moteur allumé à Lausanne ? Marie Pneu réalise un diagnostic complet de votre véhicule à domicile. Valise multimarque professionnelle, rapport détaillé. Appelez-nous !",
  keywords: ["diagnostic automobile Lausanne", "diagnostic voiture domicile", "lecture codes erreur", "voyant moteur", "diagnostic électronique", "valise diagnostic", "diagnostic toutes marques", "panne voiture Lausanne"],
  alternates: {
    canonical: "/diagnostic",
  },
  openGraph: {
    title: "Diagnostic Automobile à Domicile Lausanne | Marie Pneu",
    description: "Voyant allumé ? Diagnostic professionnel à domicile à Lausanne. Appelez-nous !",
    url: "https://www.depannagepneus.ch/diagnostic",
    type: "website",
  },
};

export default function DiagnosticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
