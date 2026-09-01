import type { Metadata } from "next";
import { Poppins, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { ScrollRestoration } from "@/components/utils/ScrollRestoration";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Powercraft | Microsoft Power Platform Consulting & Enterprise Solutions",
  description:
    "Accelerate digital transformation with expert Microsoft Power Platform consulting. Automate workflows, build custom apps, and gain data-driven insights with Power Apps, Power Automate, Power BI & Copilot.",
  keywords: [
    "Microsoft Power Platform consulting",
    "Power Apps development",
    "Power Automate workflows",
    "Power BI consulting",
    "Copilot and AI integration",
    "Power Platform Governance",
    "Center of Excellence CoE",
  ],
  authors: [{ name: "Powercraft" }],
  openGraph: {
    title: "Powercraft | Microsoft Power Platform Consulting",
    description:
      "Enterprise-Grade Power Platform Solutions—Built Right, Governed Smart. Power Apps, Power Automate, Power BI, and Copilot.",
    type: "website",
    locale: "en_US",
    siteName: "Powercraft",
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
      className={`${poppins.variable} ${ibmPlexMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#16072E] text-white flex flex-col selection:bg-[#FF5424]/30 selection:text-white">
        <ScrollRestoration />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
