import React from "react"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "URGENCE Batterie à Plat Lausanne | Dépannage Immédiat 24h/24",
  description: "URGENCE batterie à plat à Lausanne ? Intervention immédiate pour recharge ou remplacement. Dépannage sur route, domicile ou travail. Appelez-nous maintenant !",
  keywords: ["urgence batterie Lausanne", "batterie à plat urgence", "dépannage immédiat batterie", "SOS batterie Lausanne", "secours batterie Vaud", "assistance batterie 24h/24", "dépannage batterie nuit"],
  alternates: {
    canonical: "/urgence/batterie",
  },
  openGraph: {
    title: "URGENCE Batterie à Plat Lausanne | Dépannage Immédiat",
    description: "Urgence batterie ? Intervention en moins de 30 min à Lausanne. Appelez-nous !",
    url: "https://www.depannagepneus.ch/urgence/batterie",
    type: "website",
  },
};

export default function UrgenceBatterieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
