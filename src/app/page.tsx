import { LoginButton } from "@/components/auth/login-button";
import { LogoutButton } from "@/components/auth/logout-button";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/lib/auth";

import { ExtendedUser } from "../../next-auth";

export default async function Home() {
  const user = await currentUser();
  const extendedUser = user as ExtendedUser | undefined;

  if (!extendedUser) {
    return (
      <main className="flex h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-rose-400 to-red-800">
        <div className="space-y-6 text-center">
          <h1 className="text-muted drop-shadow-md">🔐 Auth</h1>
          <p className="text-muted ">A simple authentication service</p>
          <div className="">
            <LoginButton mode="modal" asChild>
              <Button variant={"secondary"} size={"lg"}>
                Sign Inn
              </Button>
            </LoginButton>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-rose-400 to-red-800">
      <div className="space-y-6 text-center">
        <h1 className="text-muted drop-shadow-md">🔐 Auth</h1>
        <p className="text-muted ">A simple authentication service</p>
        <div className="">
          <LogoutButton>
            <Button variant={"secondary"} size={"lg"}>
              Sign Out
            </Button>
          </LogoutButton>
        </div>
      </div>
    </main>
  );
}
