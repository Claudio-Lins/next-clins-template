import Image from "next/image";
import Link from "next/link";

import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center text-black">
      <div className="space-y-6 text-center">
        <Link href="/">
          <Image
            className="h-auto w-60 cursor-pointer object-contain md:w-80"
            src={"/assets/lgs/vca-hor-pos_lg.svg" ?? ""}
            alt="Sintoniza-t logo"
            width={300}
            height={50}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
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
