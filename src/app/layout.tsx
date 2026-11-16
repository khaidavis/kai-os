import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], weight: ["500", "700", "900"], variable: "--font-archivo" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-plex-mono" });

export const metadata: Metadata = {
  title: "Kai OS — Kai, software developer",
  description: "Portfolio of Kai, Computing student at UTech, Jamaica. Java, Spring Boot, PostgreSQL, Next.js.",
};

// Runs before the page paints, so night mode never flashes white first
const themeScript = `try{if(localStorage.getItem('theme')==='night')document.documentElement.dataset.theme='night'}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${archivo.variable} ${plexMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-display antialiased">{children}</body>
    </html>
  );
}