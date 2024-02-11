"use client";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { UserCurrentRole } from "../hooks/user-current-role";
import { UserButton } from "./auth/user-button";
import { Button } from "./ui/button";

export function Navbar() {
  const role = UserCurrentRole();
  const pathname = usePathname();
  return (
    <header>
      <nav className=" mt-4 flex w-[900px] items-center justify-between rounded-lg bg-secondary p-4 shadow-md">
        <div className="items-certer flex space-x-2">
          <Button asChild variant={pathname === "/" ? "default" : "outline"}>
            <Link href="/">
              <Home className="h-4 w-4" />
            </Link>
          </Button>
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
          {role === "MODERATOR" && (
            <Button
              asChild
              variant={pathname === "/moderator" ? "default" : "outline"}
            >
              <Link href="/moderator">Moderator</Link>
            </Button>
          )}
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
