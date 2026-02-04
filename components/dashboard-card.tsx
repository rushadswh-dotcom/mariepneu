"use client";
import { 
  Car, 
  Battery, 
  Gauge, 
  Droplets,
  Settings,
  Shield,
  Clock,
  CheckCircle2,
  Zap,
  Users,
  Timer
} from "lucide-react";

const services = [
  { name: "Dépannage Pneu", status: "Disponible", icon: Car },
  { name: "Dépannage Batterie", status: "Disponible", icon: Battery },
  { name: "Diagnostic", status: "Disponible", icon: Gauge },
  { name: "Remplacement valve et capteur pression", status: "Disponible", icon: Settings },
];

const sidebarIcons = [
  { icon: Car, active: true },
];

export function DashboardCard() {
  return (
    <div className="relative w-full max-w-[95%] mx-auto sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] origin-center overflow-visible">
      {/* Layer 1: Gray background with opacity and blur */}
      <div 
        className="absolute inset-0 rounded-2xl z-0 backdrop-blur-xl"
        style={{
          background: "linear-gradient(135deg, rgba(30, 30, 35, 0.85) 0%, rgba(20, 20, 25, 0.9) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
        }}
      />

      {/* Layer 2: Electric blue glow circle - CENTERED */}
      <div 
        className="absolute pointer-events-none z-10 hidden sm:block"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "120%",
          height: "120%",
          background: "radial-gradient(circle, rgba(0, 119, 255, 1) 0%, rgba(0, 149, 255, 0.85) 20%, rgba(0, 119, 255, 0.5) 40%, rgba(0, 119, 255, 0.2) 60%, transparent 80%)",
          borderRadius: "50%",
          filter: "blur(40px)",
        }}
      />
      
      {/* Mobile blue glow - contained */}
      <div 
        className="absolute pointer-events-none z-10 sm:hidden"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle, rgba(0, 119, 255, 0.8) 0%, rgba(0, 149, 255, 0.5) 30%, rgba(0, 119, 255, 0.2) 50%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(30px)",
        }}
      />
      
      {/* Second intense electric blue glow for core brightness - desktop only */}
      <div 
        className="absolute pointer-events-none z-10 hidden sm:block"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60%",
          height: "60%",
          background: "radial-gradient(circle, rgba(30, 180, 255, 1) 0%, rgba(0, 149, 255, 0.7) 50%, transparent 85%)",
          borderRadius: "50%",
          filter: "blur(30px)",
        }}
      />

      {/* Layer 3: Transparent content card ON TOP of blue glow */}
      <div 
        className="relative rounded-2xl overflow-hidden z-20 backdrop-blur-md"
        style={{
          background: "linear-gradient(135deg, rgba(40, 40, 50, 0.6) 0%, rgba(30, 30, 40, 0.7) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 p-4 pb-2">
          <div className="grid grid-cols-3 gap-0.5">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-white/60" />
            ))}
          </div>
          <span className="text-white font-bold text-lg tracking-wider">MARIE PNEU</span>
        </div>

        <div className="flex">
          {/* Sidebar Icons */}
          <div className="flex flex-col items-center gap-4 px-3 py-4 border-r border-white/10">
            {sidebarIcons.map((item, index) => (
              <div 
                key={index}
                className={`p-1.5 rounded-lg ${item.active ? 'bg-white/10' : ''}`}
              >
                <item.icon className="w-4 h-4 text-white/60" />
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4">
            {/* Title */}
            <h3 className="text-white font-bold text-sm tracking-wider mb-4">
              SERVICES & INTERVENTIONS
            </h3>

            {/* Services List Card - TRANSPARENT */}
            <div 
              className="rounded-xl p-4 mb-4"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <h4 className="text-white/90 font-semibold text-sm mb-4">
                NOS SERVICES
              </h4>
              
              {/* Services list */}
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <service.icon className="w-4 h-4 text-white/70" />
                      </div>
                      <span className="text-white/90 text-xs sm:text-sm font-medium">{service.name}</span>
                    </div>
                    <span className="text-green-400 text-xs font-medium px-2 py-1 bg-green-400/10 rounded-full">
                      {service.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex gap-1 sm:gap-2">
              <div 
                className="flex-1 rounded-lg px-2 sm:px-3 py-2 text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(30, 50, 100, 0.5) 0%, rgba(20, 40, 80, 0.6) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <span className="text-white font-bold text-sm sm:text-lg">15min</span>
                <span className="text-white/50 text-[10px] sm:text-xs ml-1">Intervention</span>
              </div>
              <div 
                className="flex-1 rounded-lg px-2 sm:px-3 py-2 text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(30, 50, 100, 0.5) 0%, rgba(20, 40, 80, 0.6) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <span className="text-white font-bold text-sm sm:text-lg">24/7</span>
                <span className="text-white/50 text-[10px] sm:text-xs ml-1">Dispo</span>
              </div>
              <div 
                className="flex-1 rounded-lg px-2 sm:px-3 py-2 text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(30, 50, 100, 0.5) 0%, rgba(20, 40, 80, 0.6) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <span className="text-white font-bold text-sm sm:text-lg">5000+</span>
                <span className="text-white/50 text-[10px] sm:text-xs ml-1">Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Card - Service Rapide - Hidden on mobile */}
      <div 
        className="absolute hidden sm:block -top-6 -right-2 md:-top-10 md:-right-3 lg:-top-12 lg:-right-4 w-40 md:w-48 lg:w-56 rounded-xl overflow-hidden z-50"
        style={{
          background: "linear-gradient(135deg, rgba(40, 50, 90, 0.95) 0%, rgba(60, 40, 80, 0.9) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 119, 255, 0.2)",
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-2 p-3 pb-2">
          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
            <Zap className="w-3 h-3 text-white" />
          </div>
          <span className="text-white font-semibold text-sm">Service Rapide</span>
        </div>

        {/* Content */}
        <div className="px-3 pb-3">
          <p className="text-white/70 text-xs mb-3">
            Intervention en moins de 15 minutes dans votre zone
          </p>

          {/* Single progress bar */}
          <div 
            className="rounded-lg p-3 mb-3"
            style={{
              background: "linear-gradient(135deg, rgba(50, 60, 110, 0.8) 0%, rgba(40, 50, 90, 0.9) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Timer className="w-3 h-3 text-green-400" />
              <span className="text-white/80 text-xs font-medium">Temps d{"'"}intervention</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-[90%] bg-gradient-to-r from-green-400 to-green-500 rounded-full" />
              </div>
              <span className="text-green-400 text-xs font-bold">10 min</span>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            className="w-full bg-white text-gray-900 font-semibold text-xs py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Demander Intervention
          </button>
        </div>
      </div>
    </div>
  );
}
