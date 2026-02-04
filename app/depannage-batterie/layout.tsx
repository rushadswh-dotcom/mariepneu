import React from "react"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dépannage Batterie à Domicile Lausanne | Recharge & Remplacement 24h/24",
  description: "Batterie à plat à Lausanne ? Marie Pneu intervient en urgence pour recharger ou remplacer votre batterie. Véhicules légers et poids lourds. Diagnostic électrique inclus. Appelez-nous !",
  keywords: ["dépannage batterie Lausanne", "batterie à plat Lausanne", "remplacement batterie domicile", "recharge batterie", "batterie poids lourd", "diagnostic électrique", "urgence batterie Vaud", "dépannage batterie 24h/24"],
  alternates: {
    canonical: "/depannage-batterie",
  },
  openGraph: {
    title: "Dépannage Batterie à Domicile Lausanne | Marie Pneu 24h/24",
    description: "Batterie à plat ? Intervention rapide pour recharge ou remplacement à Lausanne. Appelez-nous !",
    url: "https://www.depannagepneus.ch/depannage-batterie",
    type: "website",
  },
};

export default function DepannageBatterieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
