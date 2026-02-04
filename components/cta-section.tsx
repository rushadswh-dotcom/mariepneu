import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-gray-900 border-y border-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Besoin d{"'"}un dépannage urgent ?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Notre équipe est disponible 24h/24 et 7j/7 pour intervenir rapidement où que vous soyez.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 text-base bg-[#0077ff] hover:bg-[#0066dd] text-white" asChild>
              <a href="tel:+41779696962">
                <Phone className="h-5 w-5" />
                +41 77 969 69 62
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-base bg-transparent border-gray-600 text-white hover:bg-gray-800">
              <MessageCircle className="h-5 w-5" />
              Demander un devis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
