"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export function Footer() {
  const { t } = useI18n();

  const navigation = {
    services: [
      { name: t.nav.tirePunctureService, href: "/" },
      { name: t.nav.batteryService, href: "/depannage-batterie" },
      { name: t.nav.diagnostic, href: "/diagnostic" },
      { name: t.footer.blog, href: "/blog" },
    ],
    legal: [
      { name: t.footer.legalNotice, href: "#" },
      { name: t.footer.privacyPolicy, href: "#" },
      { name: t.footer.terms, href: "#" },
    ],
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Brand - Always on top for mobile */}
        <div className="mb-8 text-center sm:text-left">
          <Link href="/" className="inline-block">
            <span className="text-2xl font-bold text-white">Marie Pneu</span>
          </Link>
          <p className="mt-4 text-sm text-gray-400 max-w-xs mx-auto sm:mx-0">
            {t.footer.description}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white">{t.footer.services}</h3>
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
            <h3 className="text-sm font-semibold text-white">{t.footer.information}</h3>
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
            <h3 className="text-sm font-semibold text-white">{t.footer.contact}</h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                <Phone className="h-4 w-4 text-[#0077ff] flex-shrink-0" />
                <a href="tel:+41779696962" className="hover:text-white transition-colors">+41 77 969 69 62</a>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                <Mail className="h-4 w-4 text-[#0077ff] flex-shrink-0" />
                <span className="break-all">contact@depannagepneus.ch</span>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                <MapPin className="h-4 w-4 text-[#0077ff] flex-shrink-0" />
                {t.footer.locationArea}
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                <Clock className="h-4 w-4 text-[#0077ff] flex-shrink-0" />
                {t.footer.availability}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
