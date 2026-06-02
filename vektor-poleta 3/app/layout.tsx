import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Вектор Полёта — Платформа для обучения FPV-пилотированию | Симулятор, программа, оборудование",
  description:
    "Программная платформа для подготовки FPV-операторов. Реалистичный симулятор, структурированная программа обучения, сертификация. Комплекты оборудования для любого уровня.",
  keywords: "FPV, дрон, обучение, симулятор, квадрокоптер, БПЛА, пилотирование",
  openGraph: {
    title: "Управляй воздухом — Вектор Полёта",
    description:
      "Не просто симулятор. Полноценная система подготовки FPV-операторов нового поколения.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-bg-deep text-text-primary antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
