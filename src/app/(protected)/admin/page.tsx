"use client";

import { UserRole } from "@prisma/client";
import { toast } from "sonner";

import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function AdminPage() {
  function onServerActionClick() {
    admin().then((data) => {
      if (data.success) {
        toast.success("You are authorized to view this page.");
      } else {
        toast.error("You are not authorized to view this page.");
      }
    });
  }

  function onApiRouteClick() {
    fetch("/api/admin").then((res) => {
      if (res.ok) {
        toast.success("You are authorized to view this page.");
      } else {
        toast.error("You are not authorized to view this page.");
      }
    });
  }

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-center text-2xl font-semibold">🔑 Admin Page</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRoles={UserRole.ADMIN}>
          <FormSuccess message="You are authorized to view this page." />
        </RoleGate>
        <div className="flex items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-semibold">Admin-only API Route:</p>
          <Button onClick={onApiRouteClick}>Click to test</Button>
        </div>
        <div className="flex items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-semibold">Admin-only Serve Action:</p>
          <Button onClick={onServerActionClick}>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
}
