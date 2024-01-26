import * as bycrpt from "bcrypt";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "@/lib/prisma";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        domain: {
          label: "Domain",
          type: "text",
          placeholder: "claudiolins.dev",
          value: "claudiolins.dev",
        },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.username,
          },
        });
        if (!user) throw new Error("No user found");

        if (!credentials?.password) throw new Error("No password provided");
        const inPasswordCorect = await bycrpt.compare(
          credentials.password,
          user.password,
        );
        if (!inPasswordCorect) throw new Error("Incorrect password");

        const { password, ...userWhitoutPass } = user;
        console.log(userWhitoutPass);
        return userWhitoutPass;
      },
    }),
  ],
};
