import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Portfólio`,
  description: siteConfig.description,
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
