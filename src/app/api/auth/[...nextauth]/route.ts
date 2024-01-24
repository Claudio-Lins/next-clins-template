import * as bycrpt from "bcrypt";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "@/lib/prisma";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
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
        return userWhitoutPass;
      },
    }),
  ],
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) token.user = user as User;
  //     return token;
  //   },

  //   async session({ token, session }) {
  //     session.user = token.user;
  //     return session;
  //   },
  // },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
