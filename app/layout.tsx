import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Al-Madar Foundation | Give to Society. Give to Nature.",
  description: "A community-led foundation working towards a better tomorrow through Food, Education and Health.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>;
}
