"use client";

import { LogOutIcon, User } from "lucide-react";

import { useCurrentUser } from "@/hooks/user-current-user";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LogoutButton } from "./logout-button";
export function UserButton() {
  const user = useCurrentUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ""} alt="User profile picture" />
          <AvatarFallback className="bg-sky-500">
            <User className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <LogoutButton>
          <DropdownMenuItem className="flex items-center justify-between">
            <p>Logout</p>
            <LogOutIcon className="mr-2 h-4 w-4" />
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
