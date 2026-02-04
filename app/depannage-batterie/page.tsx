"use client";

import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, Battery, Zap, Truck, Clock, CheckCircle } from "lucide-react";

// Note: metadata must be in a separate file for client components
// Create /app/depannage-batterie/layout.tsx for SEO metadata

const features = [
  "Recharge batterie",
  "Remplacement batterie",
  "Diagnostic électrique",
  "Batterie Poids Lourd",
  "Intervention 24h/24",
  "Sans dépanneuse",
];

export default function DepannageBatterie() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center pt-20">
        {/* Background with light gradient */}
        <div 
          className="absolute inset-0 z-0 h-full w-full"
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #f8faff 50%, #f0f7ff 100%)",
          }}
        />
        
        {/* Yellow/Orange radial gradient in top right corner for battery theme */}
        <div 
          className="absolute inset-0 z-0 h-full w-full rotate-180"
          style={{
            background: "radial-gradient(200% 250% at 75% 10%, transparent 40%, hsl(45 100% 50%) 50%)",
          }}
        >
          {/* Dot pattern overlay */}
          <div 
            className="h-full w-full opacity-60"
            style={{
              background: "radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)",
              backgroundSize: "12px 12px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                </span>
                Intervention rapide 7j/7 & 24H/24
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 text-balance">
                Dépannage Batterie à Domicile
              </h1>
              
              {/* Desktop paragraph */}
              <p className="mt-6 text-lg text-gray-600 hidden md:block">
                Batterie à plat ? Notre équipe intervient rapidement chez vous, sur votre lieu de travail ou sur la route, partout à Lausanne et ses alentours. Recharge, remplacement, diagnostic - nous avons la solution.
              </p>
              
              {/* Mobile paragraph */}
              <p className="mt-4 text-base text-gray-600 md:hidden">
                Batterie à plat ? Intervention rapide à Lausanne et alentours. Recharge ou remplacement sur place.
              </p>

              <div className="mt-6 md:mt-10">
                <Button 
                  size="lg" 
                  className="gap-2 text-base bg-[#0077ff] hover:bg-[#0066dd] text-white px-8 py-6 text-lg rounded-lg"
                  asChild
                >
                  <a href="tel:+41779696962">
                    <Phone className="h-5 w-5" />
                    +41 77 969 69 62
                  </a>
                </Button>
              </div>
              
              {/* Mobile Card Image */}
              <div className="relative flex justify-center items-center mt-8 md:hidden w-full">
                <Image
                  src="/images/card-mobile.png"
                  alt="Marie Pneu Services"
                  width={500}
                  height={550}
                  className="w-full max-w-[450px] h-auto shadow-xl"
                  style={{ borderRadius: "15px" }}
                />
              </div>
            </div>

            {/* Right side - Features Card */}
            <div className="relative hidden md:flex justify-center items-center">
              <div 
                className="w-full max-w-md rounded-2xl p-8 backdrop-blur-xl"
                style={{
                  background: "linear-gradient(135deg, rgba(30, 30, 35, 0.9) 0%, rgba(20, 20, 25, 0.95) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-yellow-500/20">
                    <Battery className="h-8 w-8 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Nos Services Batterie</h3>
                </div>
                
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="text-center p-3 rounded-lg bg-white/5">
                    <Zap className="h-6 w-6 text-yellow-400 mx-auto mb-1" />
                    <span className="text-white font-bold text-lg">15min</span>
                    <p className="text-white/50 text-xs">Intervention</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white/5">
                    <Clock className="h-6 w-6 text-yellow-400 mx-auto mb-1" />
                    <span className="text-white font-bold text-lg">24/7</span>
                    <p className="text-white/50 text-xs">Disponible</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white/5">
                    <Truck className="h-6 w-6 text-yellow-400 mx-auto mb-1" />
                    <span className="text-white font-bold text-lg">Mobile</span>
                    <p className="text-white/50 text-xs">Sur place</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Pourquoi choisir Marie Pneu ?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Notre expertise en dépannage batterie vous garantit une intervention rapide et professionnelle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Intervention Rapide</h3>
              <p className="text-gray-400">
                Arrivée en moins de 30 minutes sur Lausanne et ses environs.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Camion Équipé</h3>
              <p className="text-gray-400">
                Véhicule entièrement aménagé avec tout le matériel nécessaire.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-4">
                <Battery className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Toutes Marques</h3>
              <p className="text-gray-400">
                Intervention sur tous types de véhicules, y compris poids lourds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0077ff]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Batterie à plat ? Appelez-nous maintenant !
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Notre équipe est disponible 24h/24 et 7j/7 pour vous dépanner.
          </p>
          <Button 
            size="lg" 
            className="gap-2 text-base bg-white hover:bg-gray-100 text-[#0077ff] px-8 py-6 text-lg rounded-lg"
            asChild
          >
            <a href="tel:+41XXXXXXXXX">
              <Phone className="h-5 w-5" />
              +41 XX XXX XX XX
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
