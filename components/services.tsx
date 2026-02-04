import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Disc3, Battery, Gauge } from "lucide-react";

const services = [
  {
    id: "depannage-pneu",
    title: "Dépannage Pneu",
    description: "Réparation et remplacement de pneus sur place. Crevaison, éclatement, changement de roue - nous intervenons rapidement.",
    icon: Disc3,
    features: ["Réparation crevaison", "Changement de roue", "Équilibrage sur place", "Remplacement Valve", "Remplacement Capteur"],
  },
  {
    id: "depannage-batterie",
    title: "Dépannage Batterie",
    description: "Batterie à plat ? Nous intervenons pour recharger ou remplacer votre batterie, quel que soit le modèle de véhicule.",
    icon: Battery,
    features: ["Recharge batterie", "Remplacement", "Diagnostic électrique", "Batterie Poids Lourd"],
  },
  {
    id: "diagnostic",
    title: "Diagnostic",
    description: "Diagnostic complet de votre véhicule avec équipement professionnel. Identifiez rapidement les problèmes mécaniques.",
    icon: Gauge,
    features: ["Lecture codes erreur", "Diagnostic moteur", "Rapport détaillé"],
  },
];

export function Services() {
  return (
    <section className="py-24 bg-black" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Des solutions complètes pour tous vos besoins automobiles
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
