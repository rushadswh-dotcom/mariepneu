"use client";

import Image from "next/image";

const brands = [
  { name: "Michelin", logo: "/images/brands/michelin.png" },
  { name: "Continental", logo: "/images/brands/continental.png" },
  { name: "Bridgestone", logo: "/images/brands/bridgestone.png" },
  { name: "Pirelli", logo: "/images/brands/pirelli.png" },
  { name: "Dunlop", logo: "/images/brands/dunlop.png" },
  { name: "Hankook", logo: "/images/brands/hankook.png" },
];

export function BrandsCarousel() {
  return (
    <section className="py-12 bg-transparent overflow-hidden">
      <div className="relative">
        {/* Left curved shadow ) */}
        <div 
          className="absolute -left-10 top-1/2 -translate-y-1/2 w-40 h-[250%] z-10 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 100% 100% at 0% 50%, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.12) 40%, transparent 70%)",
            borderRadius: "0 100% 100% 0",
          }}
        />
        {/* Right curved shadow ( */}
        <div 
          className="absolute -right-10 top-1/2 -translate-y-1/2 w-40 h-[250%] z-10 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 100% 100% at 100% 50%, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.12) 40%, transparent 70%)",
            borderRadius: "100% 0 0 100%",
          }}
        />
        <div 
          className="flex hover:[animation-play-state:paused]"
          style={{
            animation: "carousel-scroll 20s linear infinite",
          }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 mx-16 flex items-center justify-center"
            >
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                width={140}
                height={50}
                className="h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
