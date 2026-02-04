"use client";

import { MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

const zones = [
  { name: "Lausanne", main: true },
  { name: "Morges", main: false },
  { name: "Nyon", main: false },
  { name: "Vevey", main: false },
  { name: "Montreux", main: false },
  { name: "Renens", main: false },
  { name: "Pully", main: false },
  { name: "Prilly", main: false },
  { name: "Ecublens", main: false },
  { name: "Lutry", main: false },
  { name: "Yverdon-les-Bains", main: false },
  { name: "Gland", main: false },
  { name: "Rolle", main: false },
  { name: "Aubonne", main: false },
  { name: "Bussigny", main: false },
  { name: "Crissier", main: false },
  { name: "Le Mont-sur-Lausanne", main: false },
  { name: "Epalinges", main: false },
  { name: "Chavannes-près-Renens", main: false },
  { name: "Saint-Sulpice", main: false },
];

export function ZonesSection() {
  const { t } = useI18n();

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#0077ff]/10 text-[#0077ff] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin className="h-4 w-4" />
            {t.zones.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-balance">
            {t.zones.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {t.zones.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {zones.map((zone) => (
            <div
              key={zone.name}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                zone.main
                  ? "bg-[#0077ff] text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-[#0077ff] hover:text-[#0077ff]"
              }`}
            >
              {zone.name}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            {t.zones.notListed}
          </p>
        </div>
      </div>
    </section>
  );
}
