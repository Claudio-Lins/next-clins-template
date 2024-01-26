"use server";

import { User } from "@prisma/client";
import * as bcrypt from "bcrypt";

import prisma from "../prisma";
export async function registerUser(
  user: Omit<User, "id" | "emailVerified" | "image" | "role">,
) {
  const result = await prisma.user.create({
    data: { ...user, password: await bcrypt.hash(user.password, 10) },
  });
}
