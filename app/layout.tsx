import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Business Consultancy - Start, Register & Grow Your Business",
  description: "India's most trusted platform for company registration, GST, MSME, trademark, and all business compliance services. 100% online process with expert support.",
  keywords: "company registration, GST registration, MSME registration, trademark, business compliance, India",
  authors: [{ name: "Business Consultancy" }],
  openGraph: {
    title: "Business Consultancy - Start, Register & Grow Your Business",
    description: "India's most trusted platform for business compliance services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
