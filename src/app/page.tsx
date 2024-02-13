import { Hero } from "@/components/hero";
import { currentUser } from "@/lib/auth";

import { ExtendedUser } from "../../next-auth";

export default async function Home() {
  const user = await currentUser();
  const extendedUser = user as ExtendedUser | undefined;

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <Hero />
    </main>
  );
}
