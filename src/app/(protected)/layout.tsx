import { SessionProvider } from "next-auth/react";

import { Navbar } from "@/components/nav-bar";

import { auth } from "../../../auth";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default async function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <Navbar />
      {children}
      </div>
    </SessionProvider>
  );
};

