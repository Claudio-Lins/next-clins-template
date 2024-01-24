import Link from "next/link";

import { SignUpForm } from "@/components/auth/sign-up-form";
import { buttonVariants } from "@/components/ui/button";

export default function SignUpPage() {
  return (
    <div className=" flex min-h-screen w-full flex-col items-center justify-center gap-4">
      <div className="flex items-center justify-center gap-4">
        <p className="font-bold">Already Signed Up?</p>
        <Link
          href={"/auth/signin"}
          className={buttonVariants({ variant: "ghost" })}
        >
          SignIn
        </Link>
      </div>
      <SignUpForm />
    </div>
  );
}
