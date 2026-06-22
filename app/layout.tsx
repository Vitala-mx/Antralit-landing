import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Antralit | Infraestructura Digital Para El Futuro",
  description: "Plataformas de software inteligentes para salud, finanzas, seguridad e infraestructura empresarial crítica.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
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
      className={`${spaceGrotesk.variable} h-full antialiased`}
      style={{ fontFamily: "var(--font-space-grotesk)" }}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
