import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Marie Pneu - Dépannage Pneu & Batterie à Domicile Lausanne 7j/7',
    template: '%s | Marie Pneu Lausanne',
  },
  description: 'Service de dépannage pneu et batterie à domicile sur Lausanne et ses alentours. Intervention rapide en moins de 30 minutes, 24h/24 et 7j/7. Appelez-nous !',
  generator: 'v0.app',
  keywords: ['dépannage pneu Lausanne', 'dépannage batterie Lausanne', 'pneu crevé Lausanne', 'batterie à plat Lausanne', 'changement roue domicile', 'diagnostic auto Lausanne', 'dépannage 24h/24', 'dépannage 7j/7', 'réparation pneu', 'remplacement batterie', 'dépannage automobile Vaud', 'urgence pneu', 'urgence batterie', 'dépanneur pneu Suisse'],
  authors: [{ name: 'Marie Pneu', url: 'https://www.depannagepneus.ch' }],
  creator: 'Marie Pneu',
  publisher: 'Marie Pneu',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL('https://www.depannagepneus.ch'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-CH': '/',
    },
  },
  verification: {
    google: 'VOTRE_CODE_VERIFICATION_GOOGLE',
  },
  openGraph: {
    title: 'Marie Pneu - Dépannage Pneu & Batterie à Domicile Lausanne',
    description: 'Pneu crevé ? Batterie à plat ? Intervention rapide 24h/24 à Lausanne. Appelez-nous !',
    url: 'https://www.depannagepneus.ch',
    siteName: 'Marie Pneu',
    locale: 'fr_CH',
    type: 'website',
    images: [
      {
        url: 'https://www.depannagepneus.ch/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Marie Pneu - Service de dépannage pneu et batterie à Lausanne',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marie Pneu - Dépannage Pneu & Batterie Lausanne',
    description: 'Intervention rapide 24h/24 à Lausanne et alentours. Appelez-nous !',
    images: ['https://www.depannagepneus.ch/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'automobile',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon-512x512.png' },
    ],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.depannagepneus.ch/#localbusiness",
      "name": "Marie Pneu - Dépannage Pneu & Batterie à Domicile 7j/7",
      "image": "https://www.depannagepneus.ch/images/og-image.png",
      "telephone": "+41XXXXXXXXX",
      "priceRange": "CHF",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lausanne",
        "addressRegion": "Vaud",
        "postalCode": "1000",
        "addressCountry": "CH"
      },
      "areaServed": [
        { "@type": "City", "name": "Lausanne" },
        { "@type": "City", "name": "Morges" },
        { "@type": "City", "name": "Nyon" },
        { "@type": "City", "name": "Vevey" },
        { "@type": "City", "name": "Montreux" },
        { "@type": "City", "name": "Renens" },
        { "@type": "City", "name": "Pully" },
        { "@type": "City", "name": "Prilly" },
        { "@type": "City", "name": "Ecublens" },
        { "@type": "City", "name": "Lutry" },
        { "@type": "City", "name": "Yverdon-les-Bains" },
        { "@type": "City", "name": "Gland" },
        { "@type": "City", "name": "Rolle" },
        { "@type": "City", "name": "Aubonne" },
        { "@type": "City", "name": "Bussigny" },
        { "@type": "City", "name": "Crissier" },
        { "@type": "City", "name": "Le Mont-sur-Lausanne" },
        { "@type": "City", "name": "Epalinges" },
        { "@type": "City", "name": "Chavannes-près-Renens" },
        { "@type": "City", "name": "Saint-Sulpice" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "25",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de dépannage pneu et batterie",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Changement de pneu à domicile"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Remplacement batterie à domicile"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Dépannage pneu crevé 7j/7"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Diagnostic automobile"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Remplacement valve et capteur pression"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Batterie poids lourd"
            }
          }
        ]
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.depannagepneus.ch/#webpage",
      "url": "https://www.depannagepneus.ch/",
      "name": "Dépannage Pneu & Batterie à Domicile Lausanne 7j/7 | Marie Pneu",
      "description": "Service de dépannage pneu et batterie à domicile sur Lausanne et ses alentours. Intervention rapide en moins de 30 minutes, 24h/24 et 7j/7. Appelez pour une intervention immédiate.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": "https://www.depannagepneus.ch/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Dépannage Pneu",
            "item": "https://www.depannagepneus.ch/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Dépannage Batterie",
            "item": "https://www.depannagepneus.ch/depannage-batterie"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Diagnostic",
            "item": "https://www.depannagepneus.ch/diagnostic"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Blog",
            "item": "https://www.depannagepneus.ch/blog"
          }
        ]
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.depannagepneus.ch/#organization",
      "name": "Marie Pneu",
      "url": "https://www.depannagepneus.ch",
      "logo": "https://www.depannagepneus.ch/images/og-image.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+41XXXXXXXXX",
        "contactType": "customer service",
        "areaServed": "CH",
        "availableLanguage": "French"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="geo.region" content="CH-VD" />
        <meta name="geo.placename" content="Lausanne" />
        <meta name="geo.position" content="46.519653;6.632273" />
        <meta name="ICBM" content="46.519653, 6.632273" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
