"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Dépannage Pneu", href: "/" },
  { name: "Dépannage Batterie", href: "/depannage-batterie" },
  { name: "Diagnostic", href: "/diagnostic" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8 bg-white rounded-xl shadow-lg border border-[#e8f0fe]">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-[#0077ff]">Marie Pneu</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
          >
            <span className="sr-only">Ouvrir le menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-gray-900 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button className="gap-2 bg-[#0077ff] hover:bg-[#0066dd] text-white" asChild>
            <a href="tel:+41779696962">
              <Phone className="h-4 w-4" />
              +41 77 969 69 62
            </a>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/30" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-4 right-4 left-4 z-50 bg-white rounded-xl shadow-xl border border-gray-200 px-5 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-xl font-bold text-[#0077ff]">Marie Pneu</span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-900"
              >
                <span className="sr-only">Fermer le menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-4">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
<Button className="w-full gap-2 bg-[#0077ff] hover:bg-[#0066dd] text-white" asChild>
                    <a href="tel:+41XXXXXXXXX">
                      <Phone className="h-4 w-4" />
                      +41 XX XXX XX XX
                    </a>
                  </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
