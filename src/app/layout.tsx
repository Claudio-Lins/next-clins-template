import "./globals.css";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

import { ModeToggle } from "@/components/theme/mode-toggle";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative flex min-h-screen flex-col items-center justify-between bg-muted p-24 antialiased">
            <ModeToggle />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
