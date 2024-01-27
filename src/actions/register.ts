"use server";

import bcrypt from "bcryptjs";
import * as z from "zod";

import { getUserByEmail } from "@/data/user";
import { sendVerificationEmail } from "@/lib/mail";
import prisma from "@/lib/prisma";
import { generateVerificationToken } from "@/lib/tokens";

import { RegisterSchema } from "../../schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existeUser = await getUserByEmail(email);

  if (existeUser) {
    return { error: "Email already exists" };
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);
  return { success: "Confirmation email sent" };
};
