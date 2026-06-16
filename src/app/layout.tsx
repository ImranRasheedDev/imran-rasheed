import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Imran Rasheed — Front-End Developer",
  description:
    "Front-End Developer with 3+ years of experience building fast, accessible, responsive web apps with Next.js, React, Tailwind CSS and Shadcn/UI.",
  keywords: [
    "Imran Rasheed",
    "Front-End Developer",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Karachi",
  ],
  authors: [{ name: "Imran Rasheed" }],
  openGraph: {
    title: "Imran Rasheed — Front-End Developer",
    description:
      "Front-End Developer crafting fast, accessible, responsive interfaces with Next.js & React.",
    type: "website",
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
      className={`${fraunces.variable} ${hanken.variable} ${jetbrains.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
