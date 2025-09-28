import type { Metadata } from "next";
import "./globals.css";

import { Roboto } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krea UI Clone",
  description: "A clone of the Krea AI UI built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className}`}>
        <ThemeProvider>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
