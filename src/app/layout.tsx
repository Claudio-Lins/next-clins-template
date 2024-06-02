import "./globals.css";

import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";

import { ModeToggle } from "@/components/theme/mode-toggle";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

import { auth } from "../../auth";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "VCA Invest",
  description:
    "Bem-vindo à Vera Cruz Assets Investment, onde a gestão financeira encontra seu verdadeiro propósito e os investimentos se tornam uma jornada emocionante em direção à prosperidade. Ao atravessar nossas portas, você não apenas ingressa em uma empresa, mas em uma comunidade dedicada a cultivar seu patrimônio e alcançar seus objetivos financeiros mais ambiciosos",
  keywords: [
    "VCA Invest",
    "Vera Cruz Assets Investment",
    "investimentos",
    "gestão financeira",
    "prosperidade",
    "patrimônio",
    "objetivos financeiros",
    "comunidade",
    "empresa",
    "jornada emocionante",
    "verdadeiro propósito",
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body
          className={cn(
            "relative min-h-screen w-full bg-transparent font-sans antialiased",
            inter.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <ModeToggle />
            <Toaster />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
