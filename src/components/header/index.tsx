"use client";
/* eslint-disable simple-import-sort/imports */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { GlobeIcon, MenuIcon, MountainIcon } from "lucide-react";
import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { UserButton } from "../auth/user-button";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed w-full bg-transparent py-4">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="mr-4 md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}
              >
                <div className="grid gap-6 p-4">
                  <Link href="#" className="flex items-center" prefetch={false}>
                    <MountainIcon className="h-6 w-6 text-primary" />
                    <span className="ml-2 text-lg font-bold">Acme Inc</span>
                  </Link>
                  <nav className="grid gap-4">
                    <Link
                      href="/"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      prefetch={false}
                    >
                      Home
                    </Link>
                    <Link
                      href="/admin"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      prefetch={false}
                    >
                      Admin
                    </Link>
                    <Link
                      href="/client"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      prefetch={false}
                    >
                      Client
                    </Link>
                    <Link
                      href="/moderator"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      prefetch={false}
                    >
                      moderator
                    </Link>
                    <Link
                      href="/server"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      prefetch={false}
                    >
                      Server
                    </Link>
                    <Link
                      href="/settings"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      prefetch={false}
                    >
                      Settings
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
            <Link href="#" className="flex items-center" prefetch={false}>
              <MountainIcon className="h-6 w-6 text-primary" />
              <span className="ml-2 text-lg font-bold">Acme Inc</span>
            </Link>
          </div>
          <nav className="hidden items-center space-x-6 md:flex">
            <Link
              href="/"
              className={cn(
                "text-muted-foreground transition-colors hover:text-primary",
                pathname === "/" ? "underline underline-offset-8" : " ",
              )}
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="/admin"
              className={cn(
                "text-muted-foreground transition-colors hover:text-primary",
                pathname === "/admin" ? "underline underline-offset-8" : " ",
              )}
              prefetch={false}
            >
              Admin
            </Link>
            <Link
              href="/client"
              className={cn(
                "text-muted-foreground transition-colors hover:text-primary",
                pathname === "/client" ? "underline underline-offset-8" : " ",
              )}
              prefetch={false}
            >
              Client
            </Link>
            <Link
              href="/moderator"
              className={cn(
                "text-muted-foreground transition-colors hover:text-primary",
                pathname === "/moderador"
                  ? "underline underline-offset-8"
                  : " ",
              )}
              prefetch={false}
            >
              moderator
            </Link>
            <Link
              href="/server"
              className={cn(
                "text-muted-foreground transition-colors hover:text-primary",
                pathname === "/server" ? "underline underline-offset-8" : " ",
              )}
              prefetch={false}
            >
              Server
            </Link>
            <Link
              href="/settings"
              className={cn(
                "text-muted-foreground transition-colors hover:text-primary",
                pathname === "/settings" ? "underline underline-offset-8" : " ",
              )}
              prefetch={false}
            >
              Settings
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <UserButton />
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>My Account</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
            <Button variant="ghost" size="icon">
              <GlobeIcon className="h-6 w-6 text-muted-foreground" />
              <span className="sr-only">Change Language</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
