import { UserInfo } from "@/components/user-info";
import { currentRole, currentUser } from "@/lib/auth";

import { ExtendedUser } from "../../../../next-auth";

export default async function ServerPage() {
  const user = await currentUser();
  const extendedUser = user as ExtendedUser | undefined;
  const role = await currentRole();

  return (
    <div>
      <UserInfo label="💻 Server Componnet" user={extendedUser} />
    </div>
  );
}
