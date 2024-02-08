import { useSession } from "next-auth/react";

export function UserCurrentRole() {
  const session = useSession();
  return session?.data?.user?.role;
}
