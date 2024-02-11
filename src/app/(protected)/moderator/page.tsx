import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/auth";

import { ExtendedUser } from "../../../../next-auth";

export default async function ModeratorPage() {
  const user = await currentUser();
  const extendedUser = user as ExtendedUser | undefined;

  return (
    <div>
      <UserInfo label="🧑🏻‍⚖️ Moderator Page" user={extendedUser} />
    </div>
  );
}
