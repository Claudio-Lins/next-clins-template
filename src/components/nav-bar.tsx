import { ShieldCheck } from "lucide-react";
import Link from "next/link";

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
  return (
    <header>
      <nav className="shadow-b--md container my-2 flex items-center justify-around border-b-[0.5px]  py-2 shadow-green-100/20">
        <Button variant={"ghost"} size={"icon"}>
          <ShieldCheck color="green" className="h-24 w-24" />
        </Button>
        <div className="flex space-x-2">
          {linkItems.map(({ label, path }: LinkType) => (
            <Link
              className="rounded-sm  bg-green-800/40 p-2"
              key={label}
              href={path}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
