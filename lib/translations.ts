export type Locale = "fr" | "de" | "en";

export const translations = {
  fr: {
    // Header
    nav: {
      tirePunctureService: "Dépannage Pneu",
      batteryService: "Dépannage Batterie",
      diagnostic: "Diagnostic",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
    },
    // Hero
    hero: {
      badge: "Intervention rapide 7j/7 & 24H/24",
      title: "Dépannage Pneu & Batterie à Domicile",
      descriptionDesktop: "Pneu crevé ? Batterie à plat ? Notre équipe intervient rapidement chez vous, sur votre lieu de travail ou sur la route, partout à Lausanne et ses alentours, avec notre camion entièrement aménagé. Sans dépanneuse.",
      descriptionMobile: "Pneu crevé ? Batterie à plat ? Intervention rapide à Lausanne et alentours. Sans dépanneuse.",
    },
    // Services
    services: {
      title: "Nos Services",
      subtitle: "Des solutions complètes pour tous vos besoins automobiles",
      tirePunctureService: {
        title: "Dépannage Pneu",
        description: "Réparation et remplacement de pneus sur place. Crevaison, éclatement, changement de roue - nous intervenons rapidement.",
        features: ["Réparation crevaison", "Changement de roue", "Équilibrage sur place", "Remplacement Valve", "Remplacement Capteur"],
      },
      batteryService: {
        title: "Dépannage Batterie",
        description: "Batterie à plat ? Nous intervenons pour recharger ou remplacer votre batterie, quel que soit le modèle de véhicule.",
        features: ["Recharge batterie", "Remplacement", "Diagnostic électrique", "Batterie Poids Lourd"],
      },
      diagnostic: {
        title: "Diagnostic",
        description: "Diagnostic complet de votre véhicule avec équipement professionnel. Identifiez rapidement les problèmes mécaniques.",
        features: ["Lecture codes erreur", "Diagnostic moteur", "Rapport détaillé"],
      },
    },
    // CTA Section
    cta: {
      title: "Besoin d'un dépannage urgent ?",
      subtitle: "Notre équipe est disponible 24h/24 et 7j/7 pour intervenir rapidement où que vous soyez.",
      requestQuote: "Demander un devis",
    },
    // FAQ
    faq: {
      title: "Questions fréquentes",
      subtitle: "Tout ce que vous devez savoir sur nos services de dépannage",
      questions: [
        {
          question: "Quels sont vos délais d'intervention ?",
          answer: "Nous intervenons en moyenne en 15 à 30 minutes sur Lausanne et ses alentours. Notre équipe est disponible 24h/24 et 7j/7 pour répondre à vos urgences.",
        },
        {
          question: "Intervenez-vous sur tous les types de véhicules ?",
          answer: "Oui, nous intervenons sur tous types de véhicules : voitures particulières, utilitaires, SUV, et même les poids lourds pour le dépannage batterie.",
        },
        {
          question: "Comment se déroule une intervention ?",
          answer: "Après votre appel, un technicien est envoyé sur place avec notre camion entièrement équipé. Il diagnostique le problème et effectue la réparation sur place, sans besoin de dépanneuse.",
        },
        {
          question: "Quels moyens de paiement acceptez-vous ?",
          answer: "Nous acceptons les paiements par carte bancaire, TWINT, espèces et virement. Le paiement s'effectue après l'intervention une fois le problème résolu.",
        },
        {
          question: "Proposez-vous des devis avant intervention ?",
          answer: "Oui, nous vous communiquons un devis estimatif par téléphone avant de nous déplacer. Le prix final est confirmé sur place après diagnostic.",
        },
        {
          question: "Quelle est votre zone d'intervention ?",
          answer: "Nous couvrons Lausanne et toute son agglomération dans un rayon de 30 km : Morges, Nyon, Vevey, Montreux, Renens, Pully, etc.",
        },
      ],
    },
    // Zones
    zones: {
      badge: "Zone de couverture",
      title: "Nos Zones d'Intervention",
      subtitle: "Nous intervenons rapidement sur Lausanne et toute son agglomération dans un rayon de 40 km.",
      notListed: "Votre ville n'est pas listée ? Contactez-nous, nous intervenons probablement dans votre secteur.",
    },
    // Reviews
    reviews: {
      title: "Nos avis clients",
      subtitle: "Tous nos avis",
      basedOn: "Basé sur 25 avis",
      items: [
        {
          name: "Thomas D.",
          date: "Il y a 2 semaines",
          text: "Service impeccable ! Pneu crevé en pleine nuit, ils sont intervenus en moins de 20 minutes. Très professionnel.",
        },
        {
          name: "Sophie L.",
          date: "Il y a 1 mois",
          text: "Batterie à plat un dimanche matin, Marie Pneu m'a dépanné rapidement. Prix très correct et équipe sympathique.",
        },
        {
          name: "Pierre M.",
          date: "Il y a 1 mois",
          text: "Diagnostic complet de ma voiture fait sur place. Rapport détaillé et conseils utiles. Je recommande !",
        },
      ],
    },
    // Footer
    footer: {
      description: "Service de dépannage pneu professionnel à Lausanne. Intervention rapide et fiable 24h/24.",
      services: "Services",
      information: "Informations",
      contact: "Contact",
      legalNotice: "Mentions légales",
      privacyPolicy: "Politique de confidentialité",
      terms: "CGV",
      blog: "Blog",
      locationArea: "Lausanne et ses alentours",
      availability: "24h/24 - 7j/7",
      copyright: "Marie Pneu - Lausanne. Tous droits réservés.",
    },
    // Dashboard Card
    dashboard: {
      servicesTitle: "SERVICES & INTERVENTIONS",
      ourServices: "NOS SERVICES",
      available: "Disponible",
      intervention: "Intervention",
      availability: "Dispo",
      clients: "Clients",
      fastService: "Service Rapide",
      fastServiceDesc: "Intervention en moins de 15 minutes dans votre zone",
      interventionTime: "Temps d'intervention",
      requestIntervention: "Demander Intervention",
      tirePunctureService: "Dépannage Pneu",
      batteryService: "Dépannage Batterie",
      diagnostic: "Diagnostic",
      valveReplacement: "Remplacement valve et capteur pression",
    },
    // Language selector
    language: {
      label: "Langue",
      fr: "Français",
      de: "Deutsch",
      en: "English",
    },
  },
  de: {
    // Header
    nav: {
      tirePunctureService: "Reifenpanne",
      batteryService: "Batterie-Pannenhilfe",
      diagnostic: "Diagnose",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
    },
    // Hero
    hero: {
      badge: "Schnelle Intervention 7/7 & 24H/24",
      title: "Reifen- & Batterie-Pannenhilfe zu Hause",
      descriptionDesktop: "Reifenpanne? Leere Batterie? Unser Team kommt schnell zu Ihnen nach Hause, an Ihren Arbeitsplatz oder auf die Straße, überall in Lausanne und Umgebung, mit unserem voll ausgestatteten Fahrzeug. Ohne Abschleppwagen.",
      descriptionMobile: "Reifenpanne? Leere Batterie? Schnelle Intervention in Lausanne und Umgebung. Ohne Abschleppwagen.",
    },
    // Services
    services: {
      title: "Unsere Dienstleistungen",
      subtitle: "Komplette Lösungen für alle Ihre Automobilbedürfnisse",
      tirePunctureService: {
        title: "Reifenpanne",
        description: "Reparatur und Austausch von Reifen vor Ort. Reifenpanne, Platzer, Radwechsel - wir kommen schnell.",
        features: ["Reifenreparatur", "Radwechsel", "Auswuchten vor Ort", "Ventilwechsel", "Sensorwechsel"],
      },
      batteryService: {
        title: "Batterie-Pannenhilfe",
        description: "Leere Batterie? Wir kommen, um Ihre Batterie aufzuladen oder zu ersetzen, unabhängig vom Fahrzeugmodell.",
        features: ["Batterie aufladen", "Austausch", "Elektrische Diagnose", "LKW-Batterie"],
      },
      diagnostic: {
        title: "Diagnose",
        description: "Komplette Diagnose Ihres Fahrzeugs mit professioneller Ausrüstung. Identifizieren Sie mechanische Probleme schnell.",
        features: ["Fehlercode-Auslesen", "Motordiagnose", "Detaillierter Bericht"],
      },
    },
    // CTA Section
    cta: {
      title: "Brauchen Sie dringende Pannenhilfe?",
      subtitle: "Unser Team ist 24/7 verfügbar, um schnell zu Ihnen zu kommen, wo auch immer Sie sind.",
      requestQuote: "Angebot anfordern",
    },
    // FAQ
    faq: {
      title: "Häufig gestellte Fragen",
      subtitle: "Alles, was Sie über unsere Pannenhilfe-Dienste wissen müssen",
      questions: [
        {
          question: "Wie schnell können Sie kommen?",
          answer: "Wir kommen durchschnittlich in 15 bis 30 Minuten in Lausanne und Umgebung. Unser Team ist 24/7 verfügbar, um auf Ihre Notfälle zu reagieren.",
        },
        {
          question: "Kommen Sie zu allen Fahrzeugtypen?",
          answer: "Ja, wir kommen zu allen Fahrzeugtypen: PKW, Transporter, SUV und sogar LKW für Batterie-Pannenhilfe.",
        },
        {
          question: "Wie läuft ein Einsatz ab?",
          answer: "Nach Ihrem Anruf wird ein Techniker mit unserem voll ausgestatteten Fahrzeug zu Ihnen geschickt. Er diagnostiziert das Problem und führt die Reparatur vor Ort durch, ohne Abschleppwagen.",
        },
        {
          question: "Welche Zahlungsmethoden akzeptieren Sie?",
          answer: "Wir akzeptieren Zahlungen per Kreditkarte, TWINT, Bargeld und Überweisung. Die Zahlung erfolgt nach der Intervention, sobald das Problem gelöst ist.",
        },
        {
          question: "Bieten Sie Kostenvoranschläge vor der Intervention an?",
          answer: "Ja, wir geben Ihnen telefonisch einen Kostenvoranschlag, bevor wir kommen. Der endgültige Preis wird vor Ort nach der Diagnose bestätigt.",
        },
        {
          question: "Was ist Ihr Einsatzgebiet?",
          answer: "Wir decken Lausanne und die gesamte Agglomeration in einem Radius von 30 km ab: Morges, Nyon, Vevey, Montreux, Renens, Pully, usw.",
        },
      ],
    },
    // Zones
    zones: {
      badge: "Abdeckungsgebiet",
      title: "Unsere Einsatzgebiete",
      subtitle: "Wir kommen schnell in Lausanne und der gesamten Agglomeration im Umkreis von 40 km.",
      notListed: "Ihre Stadt ist nicht aufgeführt? Kontaktieren Sie uns, wir kommen wahrscheinlich auch in Ihrer Gegend.",
    },
    // Reviews
    reviews: {
      title: "Kundenbewertungen",
      subtitle: "Alle unsere Bewertungen",
      basedOn: "Basierend auf 25 Bewertungen",
      items: [
        {
          name: "Thomas D.",
          date: "Vor 2 Wochen",
          text: "Tadelloser Service! Reifenpanne mitten in der Nacht, sie kamen in weniger als 20 Minuten. Sehr professionell.",
        },
        {
          name: "Sophie L.",
          date: "Vor 1 Monat",
          text: "Leere Batterie an einem Sonntagmorgen, Marie Pneu hat mir schnell geholfen. Sehr fairer Preis und freundliches Team.",
        },
        {
          name: "Pierre M.",
          date: "Vor 1 Monat",
          text: "Komplette Diagnose meines Autos vor Ort. Detaillierter Bericht und nützliche Tipps. Ich empfehle!",
        },
      ],
    },
    // Footer
    footer: {
      description: "Professioneller Reifen-Pannenhilfe-Service in Lausanne. Schnelle und zuverlässige Intervention 24/7.",
      services: "Dienstleistungen",
      information: "Informationen",
      contact: "Kontakt",
      legalNotice: "Impressum",
      privacyPolicy: "Datenschutz",
      terms: "AGB",
      blog: "Blog",
      locationArea: "Lausanne und Umgebung",
      availability: "24/7",
      copyright: "Marie Pneu - Lausanne. Alle Rechte vorbehalten.",
    },
    // Dashboard Card
    dashboard: {
      servicesTitle: "DIENSTLEISTUNGEN & EINSÄTZE",
      ourServices: "UNSERE DIENSTLEISTUNGEN",
      available: "Verfügbar",
      intervention: "Einsatz",
      availability: "Verfüg.",
      clients: "Kunden",
      fastService: "Schneller Service",
      fastServiceDesc: "Intervention in weniger als 15 Minuten in Ihrer Zone",
      interventionTime: "Einsatzzeit",
      requestIntervention: "Einsatz anfordern",
      tirePunctureService: "Reifenpanne",
      batteryService: "Batterie-Pannenhilfe",
      diagnostic: "Diagnose",
      valveReplacement: "Ventil- und Drucksensorwechsel",
    },
    // Language selector
    language: {
      label: "Sprache",
      fr: "Français",
      de: "Deutsch",
      en: "English",
    },
  },
  en: {
    // Header
    nav: {
      tirePunctureService: "Tire Repair",
      batteryService: "Battery Service",
      diagnostic: "Diagnostic",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    // Hero
    hero: {
      badge: "Fast Intervention 7/7 & 24H/24",
      title: "Tire & Battery Roadside Assistance",
      descriptionDesktop: "Flat tire? Dead battery? Our team comes quickly to your home, workplace, or roadside, anywhere in Lausanne and surrounding areas, with our fully equipped vehicle. No tow truck needed.",
      descriptionMobile: "Flat tire? Dead battery? Fast intervention in Lausanne and surroundings. No tow truck needed.",
    },
    // Services
    services: {
      title: "Our Services",
      subtitle: "Complete solutions for all your automotive needs",
      tirePunctureService: {
        title: "Tire Repair",
        description: "On-site tire repair and replacement. Puncture, blowout, wheel change - we respond quickly.",
        features: ["Puncture repair", "Wheel change", "On-site balancing", "Valve replacement", "Sensor replacement"],
      },
      batteryService: {
        title: "Battery Service",
        description: "Dead battery? We come to recharge or replace your battery, regardless of vehicle model.",
        features: ["Battery recharge", "Replacement", "Electrical diagnostic", "Heavy truck battery"],
      },
      diagnostic: {
        title: "Diagnostic",
        description: "Complete diagnostic of your vehicle with professional equipment. Quickly identify mechanical problems.",
        features: ["Error code reading", "Engine diagnostic", "Detailed report"],
      },
    },
    // CTA Section
    cta: {
      title: "Need urgent roadside assistance?",
      subtitle: "Our team is available 24/7 to respond quickly wherever you are.",
      requestQuote: "Request a quote",
    },
    // FAQ
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about our roadside assistance services",
      questions: [
        {
          question: "How fast can you respond?",
          answer: "We respond on average in 15 to 30 minutes in Lausanne and surrounding areas. Our team is available 24/7 to respond to your emergencies.",
        },
        {
          question: "Do you service all vehicle types?",
          answer: "Yes, we service all vehicle types: cars, vans, SUVs, and even heavy trucks for battery service.",
        },
        {
          question: "How does an intervention work?",
          answer: "After your call, a technician is sent to your location with our fully equipped vehicle. They diagnose the problem and perform the repair on-site, no tow truck needed.",
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept payments by credit card, TWINT, cash, and bank transfer. Payment is made after the intervention once the problem is resolved.",
        },
        {
          question: "Do you provide quotes before intervention?",
          answer: "Yes, we provide an estimated quote over the phone before coming. The final price is confirmed on-site after diagnosis.",
        },
        {
          question: "What is your service area?",
          answer: "We cover Lausanne and the entire metropolitan area within a 30 km radius: Morges, Nyon, Vevey, Montreux, Renens, Pully, etc.",
        },
      ],
    },
    // Zones
    zones: {
      badge: "Coverage Area",
      title: "Our Service Areas",
      subtitle: "We respond quickly in Lausanne and the entire metropolitan area within a 40 km radius.",
      notListed: "Your city not listed? Contact us, we probably service your area.",
    },
    // Reviews
    reviews: {
      title: "Customer Reviews",
      subtitle: "All our reviews",
      basedOn: "Based on 25 reviews",
      items: [
        {
          name: "Thomas D.",
          date: "2 weeks ago",
          text: "Impeccable service! Flat tire in the middle of the night, they arrived in less than 20 minutes. Very professional.",
        },
        {
          name: "Sophie L.",
          date: "1 month ago",
          text: "Dead battery on a Sunday morning, Marie Pneu helped me quickly. Very fair price and friendly team.",
        },
        {
          name: "Pierre M.",
          date: "1 month ago",
          text: "Complete diagnostic of my car done on-site. Detailed report and useful advice. I recommend!",
        },
      ],
    },
    // Footer
    footer: {
      description: "Professional tire roadside assistance service in Lausanne. Fast and reliable intervention 24/7.",
      services: "Services",
      information: "Information",
      contact: "Contact",
      legalNotice: "Legal Notice",
      privacyPolicy: "Privacy Policy",
      terms: "Terms",
      blog: "Blog",
      locationArea: "Lausanne and surroundings",
      availability: "24/7",
      copyright: "Marie Pneu - Lausanne. All rights reserved.",
    },
    // Dashboard Card
    dashboard: {
      servicesTitle: "SERVICES & INTERVENTIONS",
      ourServices: "OUR SERVICES",
      available: "Available",
      intervention: "Response",
      availability: "Avail.",
      clients: "Clients",
      fastService: "Fast Service",
      fastServiceDesc: "Intervention in less than 15 minutes in your area",
      interventionTime: "Response time",
      requestIntervention: "Request Intervention",
      tirePunctureService: "Tire Repair",
      batteryService: "Battery Service",
      diagnostic: "Diagnostic",
      valveReplacement: "Valve and pressure sensor replacement",
    },
    // Language selector
    language: {
      label: "Language",
      fr: "Français",
      de: "Deutsch",
      en: "English",
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.fr;
