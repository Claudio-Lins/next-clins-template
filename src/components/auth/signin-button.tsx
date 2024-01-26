// import { getCurrentUser } from "@/lib/session";
"use client";
import { signIn } from "next-auth/react";

import { Button } from "../ui/button";

export async function SigninButton() {
  // const data = await getCurrentUser();
  // console.log("data: ", data?.email);

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={() => {
          signIn();
        }}
      >
        Signin
      </Button>
    </div>
  );
}
