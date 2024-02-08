"use client";

import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/user-current-user";

export default function SettingsPage() {
  const user = useCurrentUser();
  return (
    <div className="flex min-h-screen w-full flex-col items-center space-y-2">
      <strong>{user?.name}</strong>
      <p>{user?.email}</p>
      <p>{user?.image}</p>
      <p>{user?.id}</p>
      <p>{user?.role}</p>

      <form>
        <Button
          className="mt-8"
          onClick={() => {
            logout();
          }}
          type="button"
        >
          Logout
        </Button>
      </form>
    </div>
  );
}
