"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Disc3, Battery, Gauge } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export function Services() {
  const { t } = useI18n();

  const services = [
    {
      id: "depannage-pneu",
      title: t.services.tirePunctureService.title,
      description: t.services.tirePunctureService.description,
      icon: Disc3,
      features: t.services.tirePunctureService.features,
    },
    {
      id: "depannage-batterie",
      title: t.services.batteryService.title,
      description: t.services.batteryService.description,
      icon: Battery,
      features: t.services.batteryService.features,
    },
    {
      id: "diagnostic",
      title: t.services.diagnostic.title,
      description: t.services.diagnostic.description,
      icon: Gauge,
      features: t.services.diagnostic.features,
    },
  ];

  return (
    <section className="py-24 bg-black" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card 
              key={service.id} 
              id={service.id}
              className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-colors group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <service.icon className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">{service.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0077ff]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
