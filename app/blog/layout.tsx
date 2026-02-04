import React from "react"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Dépannage Auto Lausanne | Conseils Pneus & Batteries",
  description: "Découvrez nos articles et conseils sur l'entretien de vos pneus et batteries. Astuces dépannage, prévention pannes, guide entretien auto à Lausanne et Vaud.",
  keywords: ["blog auto Lausanne", "conseils pneus", "entretien batterie", "dépannage automobile Vaud", "guide pneu crevé", "prévention panne batterie", "astuces auto"],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog Dépannage Auto | Marie Pneu Lausanne",
    description: "Articles et conseils sur l'entretien pneus et batteries par Marie Pneu Lausanne.",
    url: "https://www.depannagepneus.ch/blog",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
