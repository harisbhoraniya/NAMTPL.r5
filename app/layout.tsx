import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "N Gandhi Advance Material Technology Pvt. Ltd.",
  description: "Advanced Technical Ceramics for High-Performance Industries.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-[52px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
