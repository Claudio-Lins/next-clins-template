"use client";

import { UserRole } from "@prisma/client";

import { UserCurrentRole } from "@/hooks/user-current-role";

import { FormError } from "../form-error";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRoles: UserRole;
}
export function RoleGate({ children, allowedRoles }: RoleGateProps) {
  const role = UserCurrentRole();
  if (role !== allowedRoles) {
    return <FormError message="You are not authorized to view this page." />;
  }
  return <>{children}</>;
}
