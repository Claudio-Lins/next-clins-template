// "use client"

import { Button } from "@/components/ui/button";

import { auth, signOut } from "../../../../auth";

export default async function SettingsPage() {
  const session = await auth();
  return (
    <div className="flex min-h-screen w-full flex-col items-center space-y-6">
      <h1>Settings</h1>
      <p>Logged in as {session?.user.email}</p>

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Logout</Button>
      </form>
    </div>
  );
}
