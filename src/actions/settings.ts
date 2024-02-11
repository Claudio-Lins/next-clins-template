"use server";

import bcrypt from "bcryptjs";
import * as z from "zod";

import { getUserByEmail, getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { sendVerificationEmail } from "@/lib/mail";
import prisma from "@/lib/prisma";
import { generateVerificationToken } from "@/lib/tokens";

import { SettingsSchema } from "../../schemas";

export async function settings(values: z.infer<typeof SettingsSchema>) {
  const user = await currentUser();
  console.table(user);
  if (!user) {
    throw new Error("Unauthorized");
  }

  const dbUser = await getUserById(user.id);
  if (!dbUser) {
    throw new Error("Unauthorized");
  }

  if (user?.isOAuth) {
    values.email = undefined;
    values.password = undefined;
    values.newPassword = undefined;
    values.isTwoFactorEnabled = undefined;
  }

  if (values.email && values.email !== dbUser.email) {
    const existingUser = await getUserByEmail(values.email);

    if (existingUser && existingUser.id !== user.id) {
      return { error: "Email already in use" };
    }

    const verificationToken = await generateVerificationToken(values.email);
    await sendVerificationEmail(
      verificationToken?.email,
      verificationToken?.token,
    );
    return { success: "Verification email sent!" };
  }

  if (values.password && values.newPassword && dbUser.password) {
    const passwordsMatch = await bcrypt.compare(
      values.password,
      dbUser.password,
    );

    if (!passwordsMatch) {
      return { error: "Incorrect password!" };
    }

    const hashedPassword = await bcrypt.hash(values.newPassword, 10);
    values.password = hashedPassword;
    values.newPassword = undefined;
  }

  await prisma.user.update({
    where: {
      id: dbUser.id,
    },
    data: { ...values },
  });
  return { success: "Settings updated successfully!" };
}
