import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const navigation = {
  services: [
    { name: "Dépannage Pneu", href: "/" },
    { name: "Dépannage Batterie", href: "/depannage-batterie" },
    { name: "Diagnostic", href: "/diagnostic" },
    { name: "Blog", href: "/blog" },
  ],
  legal: [
    { name: "Mentions légales", href: "#" },
    { name: "Politique de confidentialité", href: "#" },
    { name: "CGV", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Brand - Always on top for mobile */}
        <div className="mb-8 text-center sm:text-left">
          <Link href="/" className="inline-block">
            <span className="text-2xl font-bold text-white">Marie Pneu</span>
          </Link>
          <p className="mt-4 text-sm text-gray-400 max-w-xs mx-auto sm:mx-0">
            Service de dépannage pneu professionnel à Lausanne. Intervention rapide et fiable 24h/24.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white">Informations</h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1 mt-4 sm:mt-0">
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                <Phone className="h-4 w-4 text-[#0077ff] flex-shrink-0" />
                <a href="tel:+41XXXXXXXXX" className="hover:text-white transition-colors">+41 XX XXX XX XX</a>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                <Mail className="h-4 w-4 text-[#0077ff] flex-shrink-0" />
                <span className="break-all">contact@depannagepneus.ch</span>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                <MapPin className="h-4 w-4 text-[#0077ff] flex-shrink-0" />
                Lausanne et ses alentours
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                <Clock className="h-4 w-4 text-[#0077ff] flex-shrink-0" />
                24h/24 - 7j/7
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Marie Pneu - Lausanne. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
