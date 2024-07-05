/* eslint-disable simple-import-sort/imports */
import "./globals.css";

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";

import { Header } from "@/components/header";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { SessionProvider } from "next-auth/react";
import { auth } from "../../../auth";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Next Dev - Full-stack Next.js 14",
  description: "Curso Full-stack Next.js 14",
  keywords: [
    "Next.js",
    "Next.js 14",
    "React.js",
    "Claudio Lins",
    "JavaScript",
    "TypeScript",
    "Full-stack",
    "Tailwind CSS",
  ],
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const session = await auth();
  const messages = await getMessages();
  return (
    <SessionProvider session={session}>
      <html
        lang={locale}
        className="w-full bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900"
      >
        <body
          className={cn(
            "relative flex min-h-screen w-full bg-transparent font-sans antialiased",
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
            <NextIntlClientProvider messages={messages}>
              <Header />
              <div className="flex min-h-screen w-full flex-col items-center gap-y-10 pt-40">
                {children}
              </div>
            </NextIntlClientProvider>
            <div className="background-gradient absolute inset-0 -z-50 max-h-screen" />
            <div className="absolute inset-0 -z-40 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light" />
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
