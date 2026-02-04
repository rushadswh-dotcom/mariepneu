"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { DashboardCard } from "./dashboard-card";
import { BrandsCarousel } from "./brands-carousel";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20">
      {/* Base white/light blue background */}
      <div 
        className="absolute inset-0 z-0 h-full w-full"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8faff 50%, #f0f7ff 100%)",
        }}
      />
      
      {/* Blue radial gradient in top right corner */}
      <div 
        className="absolute inset-0 z-0 h-full w-full rotate-180"
        style={{
          background: "radial-gradient(200% 250% at 75% 10%, transparent 40%, hsl(217 91% 60%) 50%)",
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
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Intervention rapide 7j/7 & 24H/24
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 text-balance">
              Dépannage Pneu & Batterie à Domicile
            </h1>
            
            {/* Desktop paragraph */}
            <p className="mt-6 text-lg text-gray-600 hidden md:block">
              Pneu crevé ? Batterie à plat ? Notre équipe intervient rapidement chez vous, sur votre lieu de travail ou sur la route, partout à Lausanne et ses alentours, avec notre camion entièrement aménagé. Sans dépanneuse.
            </p>
            
            {/* Mobile paragraph - shorter version */}
            <p className="mt-4 text-base text-gray-600 md:hidden">
              Pneu crevé ? Batterie à plat ? Intervention rapide à Lausanne et alentours. Sans dépanneuse.
            </p>

            <div className="mt-6 md:mt-10">
              <Button 
                size="lg" 
                className="gap-2 text-base bg-[#0077ff] hover:bg-[#0066dd] text-white px-8 py-6 text-lg rounded-lg"
                asChild
              >
                <a href="tel:+41XXXXXXXXX">
                  <Phone className="h-5 w-5" />
                  +41 XX XXX XX XX
                </a>
              </Button>
            </div>
            
            {/* Mobile Dashboard Card - Static Image */}
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

          {/* Right side - Dashboard Card (Desktop) */}
          <div className="relative hidden md:flex justify-center items-center overflow-visible">
            <DashboardCard />
          </div>
        </div>
      </div>
      
      {/* Brands Carousel at bottom of hero */}
      <div className="relative z-10 w-full pb-12">
        <BrandsCarousel />
      </div>
    </section>
  );
}
