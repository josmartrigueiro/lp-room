import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const carbonaSans = localFont({
  variable: "--font-sans",
  src: [
    {
      path: "../../public/fonts/Carbona-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Carbona-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Carbona-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Carbona-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

const carbonaMono = localFont({
  variable: "--font-mono",
  src: [
    {
      path: "../../public/fonts/Carbona-MonoExtraLight.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Carbona-MonoLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Carbona-MonoMedium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Carbona-MonoBold.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ROOM - Uma comunidade de portas abertas",
  description:
    "ROOM é uma comunidade independente liderada por Thiago e Anna Coelho",
  icons: {
    icon: "/icon-page.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${carbonaSans.variable} ${carbonaMono.variable}`}>
        <div className="bg-background min-h-screen">{children}</div>
      </body>
    </html>
  );
}
