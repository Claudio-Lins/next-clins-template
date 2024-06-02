/* eslint-disable simple-import-sort/imports */
import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ModeToggle } from "@/components/theme/mode-toggle";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { SessionProvider } from "next-auth/react";
import { auth } from "../../auth";

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
