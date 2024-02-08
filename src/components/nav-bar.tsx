"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { UserButton } from "./auth/user-button";
import { Button } from "./ui/button";

const linkItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Auth (Client)",
    path: "/auth-client",
  },
  {
    label: "Auth (Server)",
    path: "/auth-server",
  },
  {
    label: "Admin Only",
    path: "/admin-only",
  },
] as const;

type LinkType = (typeof linkItems)[number];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header>
      <nav className="mt-4 flex w-[600px] items-center justify-between rounded-lg bg-secondary p-4 shadow-md">
        <div className="items-certer flex space-x-2">
          <Button
            asChild
            variant={pathname === "/server" ? "default" : "outline"}
          >
            <Link href="/server">Server</Link>
          </Button>
          <Button
            asChild
            variant={pathname === "/client" ? "default" : "outline"}
          >
            <Link href="/client">Client</Link>
          </Button>
          <Button
            asChild
            variant={pathname === "/admin" ? "default" : "outline"}
          >
            <Link href="/admin">Admin</Link>
          </Button>
          <Button
            asChild
            variant={pathname === "/settings" ? "default" : "outline"}
          >
            <Link href="/settings">Setting</Link>
          </Button>
        </div>
        <div className="">
          <UserButton />
        </div>
      </nav>
    </header>
  );
}
