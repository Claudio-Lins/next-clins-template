"use client";
import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/user-current-user";

import { ExtendedUser } from "../../../../next-auth";

export default function ClientPage() {
  const user = useCurrentUser();
  const extendedUser = user as ExtendedUser | undefined;

  return (
    <div>
      <UserInfo label="💻 Client Componnet" user={extendedUser} />
    </div>
  );
}
