import type { Metadata } from "next";
import { Manrope, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/animations/SmoothScroll";
import ScrollProgress from "@/components/animations/ScrollProgress";
import { CLINIC_CONFIG } from "@/data/clinic-data";
import JsonLd from "@/components/seo/JsonLd";

const sansFont = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const serifFont = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bibijanaesthetic.com"),

  title: {
    default: "BIBI JAN AESTHETIC | Where Dermatology Meets Refined Beauty",
    template: "%s | BIBI JAN AESTHETIC",
  },

  description: CLINIC_CONFIG.subheading,

  keywords: [
    "BIBI JAN Aesthetic",
    "Dermatology Clinic",
    "Aesthetic Medicine",
    "Clinical Acne Treatment",
    "Pigmentation Melasma Specialist",
    "Non-Surgical Facial Contouring",
    "Doctor-Led Skincare",
    "Bespoke Dermatological Care",
  ],

  authors: [{ name: "BIBI JAN Aesthetic Clinic" }],
  creator: "BIBI JAN Aesthetic",
  publisher: "BIBI JAN Aesthetic",

  openGraph: {
    title: "BIBI JAN AESTHETIC | Clinical Dermatology & Refined Beauty",
    description: CLINIC_CONFIG.subheading,
    url: "https://bibijanaesthetic.com",
    siteName: "BIBI JAN AESTHETIC",
    images: [
      {
        url: "/logo.png",
        width: 604,
        height: 698,
        alt: "BIBI JAN Aesthetic Clinic Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BIBI JAN AESTHETIC | Clinical Dermatology & Refined Beauty",
    description: CLINIC_CONFIG.subheading,
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${serifFont.variable} scroll-smooth`}
    >
      <head>
        <JsonLd />
      </head>

      <body className="font-sans antialiased min-h-screen flex flex-col bg-clinical-surface text-clinical-dark selection:bg-brand-500 selection:text-white">
        <SmoothScroll>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}