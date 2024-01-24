"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { passwordStrength } from "check-password-strength";
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import validator from "validator";
import { z } from "zod";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { PasswordStrength } from "./password-strength";

const SignUpFormSchema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "First name is too short" })
      .max(50, { message: "First name is too long" })
      .regex(new RegExp("^[a-zA-Z]+$"), {
        message: "First name must only contain letters",
      }),
    lastName: z
      .string()
      .min(2, { message: "Last name is too short" })
      .max(50, { message: "Last name is too long" })
      .regex(new RegExp("^[a-zA-Z]+$"), {
        message: "Last name must only contain letters",
      }),
    email: z.string().email("Invalid email address"),
    phone: z.string().refine((value) => validator.isMobilePhone(value), {
      message: "Invalid phone number",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 caracters" })
      .max(10, { message: "Password must be at most 8 caracters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 caracters" })
      .max(10, { message: "Password must be at most 8 caracters" }),
    termsAndConditions: z.literal(true, {
      errorMap: () => ({
        message: "You must agree to the terms and conditions",
      }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["password", "confirmPassword"],
  });

export type SignUpFormValues = z.infer<typeof SignUpFormSchema>;

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(SignUpFormSchema),
  });
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [passStength, setPassStrength] = useState(0);
  function toggleIsVisiblePassword() {
    setIsVisiblePassword((prev) => !prev);
  }

  useEffect(() => {
    setPassStrength(passwordStrength(watch().password).id);
  }, [watch().password]);

  async function createUser(data: SignUpFormValues) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(createUser)}
      className="flex w-full max-w-sm flex-col items-center justify-center space-y-4 rounded-lg border p-6 shadow-sm"
    >
      <div className="flex items-center gap-2">
        <div className="flex w-full flex-col space-y-2">
          <Label htmlFor="first-name">First name</Label>
          <Input
            type="text"
            id="first-name"
            className={cn(
              " placeholder:text-xs placeholder:text-rose-500",
              errors.firstName ? "border-red-600" : "",
            )}
            placeholder={errors.firstName ? errors.firstName?.message : ""}
            {...register("firstName")}
          />
        </div>
        <div className="flex w-full flex-col space-y-2">
          <Label htmlFor="last-name">Last name</Label>
          <Input
            type="text"
            id="last-name"
            className={cn(
              " placeholder:text-xs placeholder:text-rose-500",
              errors.lastName ? "border-red-600" : "",
            )}
            placeholder={errors.lastName ? errors.lastName?.message : ""}
            {...register("lastName")}
          />
        </div>
      </div>
      <div className="flex w-full flex-col space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          className={cn(
            " placeholder:text-xs placeholder:text-rose-500",
            errors.email ? "border-red-600" : "",
          )}
          placeholder={errors.email ? errors.email?.message : ""}
          {...register("email")}
        />
      </div>
      <div className="flex w-full flex-col space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          type="tel"
          id="phone"
          className={cn(
            " placeholder:text-xs placeholder:text-rose-500",
            errors.phone ? "border-red-600" : "",
          )}
          placeholder={errors.phone ? errors.phone?.message : ""}
          {...register("phone")}
        />
      </div>
      <div className="relative flex w-full flex-col space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          type={isVisiblePassword ? "text" : "password"}
          id="password"
          className={cn(
            " placeholder:text-xs placeholder:text-rose-500",
            errors.password ? "border-red-600" : "",
          )}
          placeholder={errors.password ? errors.password?.message : ""}
          {...register("password")}
        />
        <button
          type="button"
          onClick={toggleIsVisiblePassword}
          className="absolute right-4 top-7"
        >
          {isVisiblePassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>
        <PasswordStrength passStrenght={passStength} />
      </div>
      <div className="relative flex w-full flex-col space-y-2">
        <Label htmlFor="confirm-password">Confirm password</Label>
        <Input
          type={isVisiblePassword ? "text" : "password"}
          id="confirm-password"
          className={cn(
            " placeholder:text-xs placeholder:text-rose-500",
            errors.confirmPassword ? "border-red-600" : "",
          )}
          placeholder={
            errors.confirmPassword ? errors.confirmPassword?.message : ""
          }
          {...register("confirmPassword")}
        />
        <button
          type="button"
          onClick={toggleIsVisiblePassword}
          className="absolute right-4 top-7"
        >
          {isVisiblePassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="flex items-center justify-center space-x-2">
          <input
            type="checkbox"
            className={cn("h-4 w-4", errors.password ? "border-red-600" : "")}
            placeholder={
              errors.termsAndConditions
                ? errors.termsAndConditions?.message
                : ""
            }
            {...register("termsAndConditions")}
          />
          <Label htmlFor="terms-and-conditions" className="text-xs">
            I agree to the{" "}
            <a href="#" className="text-blue-500">
              Terms and Conditions
            </a>
          </Label>
        </div>
        {errors.termsAndConditions && (
          <p className="text-xs text-red-600">
            {errors.termsAndConditions?.message}
          </p>
        )}
      </div>
      <div className=" flex w-full">
        <Button
          type="submit"
          className=" mt-6 w-full rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600"
        >
          Enviar
        </Button>
      </div>
    </form>
  );
}
