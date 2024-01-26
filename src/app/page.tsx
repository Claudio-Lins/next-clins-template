// eslint-disable-next-line simple-import-sort/imports

import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-rose-400 to-red-800">
      <div className="space-y-6 text-center">
        <h1 className="text-muted drop-shadow-md">🔐 Auth</h1>
        <p className="text-muted ">A simple authentication service</p>
        <div className="">
          <LoginButton>
            <Button variant={"secondary"} size={"lg"}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
