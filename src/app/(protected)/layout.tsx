import { Navbar } from "@/components/nav-bar";
import { ModeToggle } from "@/components/theme/mode-toggle";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default async function ProtectedLayout({
  children,
}: ProtectedLayoutProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center gap-y-10 bg-slate-700">
      <ModeToggle y={32} />
      <Navbar />
      {children}
      <div className="background-gradient absolute inset-0 -z-50 max-h-screen" />
      <div className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light" />
    </div>
  );
}
