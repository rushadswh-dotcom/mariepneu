"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Quels sont vos délais d'intervention ?",
    answer: "Nous intervenons en moyenne en 15 à 30 minutes sur Lausanne et ses alentours. Notre équipe est disponible 24h/24 et 7j/7 pour répondre à vos urgences.",
  },
  {
    question: "Intervenez-vous sur tous les types de véhicules ?",
    answer: "Oui, nous intervenons sur tous types de véhicules : voitures particulières, utilitaires, SUV, et même les poids lourds pour le dépannage batterie.",
  },
  {
    question: "Comment se déroule une intervention ?",
    answer: "Après votre appel, un technicien est envoyé sur place avec notre camion entièrement équipé. Il diagnostique le problème et effectue la réparation sur place, sans besoin de dépanneuse.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer: "Nous acceptons les paiements par carte bancaire, TWINT, espèces et virement. Le paiement s'effectue après l'intervention une fois le problème résolu.",
  },
  {
    question: "Proposez-vous des devis avant intervention ?",
    answer: "Oui, nous vous communiquons un devis estimatif par téléphone avant de nous déplacer. Le prix final est confirmé sur place après diagnostic.",
  },
  {
    question: "Quelle est votre zone d'intervention ?",
    answer: "Nous couvrons Lausanne et toute son agglomération dans un rayon de 30 km : Morges, Nyon, Vevey, Montreux, Renens, Pully, etc.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Questions fréquentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Tout ce que vous devez savoir sur nos services de dépannage
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-xl overflow-hidden bg-card"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-5 pt-0 text-muted-foreground">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
