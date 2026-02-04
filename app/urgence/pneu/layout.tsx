import React from "react"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "URGENCE Pneu Crevé Lausanne | Dépannage Immédiat 24h/24",
  description: "URGENCE pneu crevé à Lausanne ? Intervention immédiate en moins de 30 minutes. Dépannage sur route, domicile ou travail. Appelez-nous maintenant !",
  keywords: ["urgence pneu Lausanne", "pneu crevé urgence", "dépannage immédiat pneu", "SOS pneu Lausanne", "secours pneu Vaud", "assistance pneu 24h/24", "dépannage pneu nuit"],
  alternates: {
    canonical: "/urgence/pneu",
  },
  openGraph: {
    title: "URGENCE Pneu Crevé Lausanne | Dépannage Immédiat",
    description: "Urgence pneu ? Intervention en moins de 30 min à Lausanne. Appelez-nous !",
    url: "https://www.depannagepneus.ch/urgence/pneu",
    type: "website",
  },
};

export default function UrgencePneuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
