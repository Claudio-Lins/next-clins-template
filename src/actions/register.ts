"use server";

import bcrypt from "bcryptjs";
import * as z from "zod";

import { getClientByEmail } from "@/data/get-client-by-email";
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
  const { email, password, client_id } = validatedFields.data;

  const client = await getClientByEmail(email);

  const { clientID, personalEmail, surname } = client;

  if (!client.clientID && !personalEmail) {
    return { error: "User not found" };
  }
  if (clientID !== client_id) {
    return { error: "Client ID does not match" };
  }
  if (!clientID) {
    return { error: "Client ID is required" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const existeUser = await getUserByEmail(email);

  if (existeUser) {
    return { error: "Email already exists" };
  }

  await prisma.user.create({
    data: {
      email: client.personalEmail,
      password: hashedPassword,
      name: client.name,
      surname: surname,
      client_id: clientID,
      imageUrl: client.urlPhoto,
    },
  });

  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);
  return { success: "Confirmation email sent" };
};
