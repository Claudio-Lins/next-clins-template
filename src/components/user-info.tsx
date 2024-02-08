import { ExtendedUser } from "../../next-auth";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export function UserInfo({ user, label }: UserInfoProps) {
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <p className="text-center text-2xl font-semibold">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between rounded-lg border p-3 shadow-md">
          <strong>ID:</strong>
          <p className="max-w-48 truncate rounded-md bg-slate-100 p-1 font-mono text-xs">
            {user?.id}
          </p>
        </div>
        <div className="flex items-center justify-between rounded-lg border p-3 shadow-md">
          <strong>Name:</strong>
          <p className="max-w-48 truncate rounded-md bg-slate-100 p-1 font-mono text-xs">
            {user?.name}
          </p>
        </div>
        <div className="flex items-center justify-between rounded-lg border p-3 shadow-md">
          <strong>Email:</strong>
          <p className="max-w-48 truncate rounded-md bg-slate-100 p-1 font-mono text-xs">
            {user?.email}
          </p>
        </div>
        <div className="flex items-center justify-between rounded-lg border p-3 shadow-md">
          <strong>Role:</strong>
          <p className="max-w-48 truncate rounded-md bg-slate-100 p-1 font-mono text-xs">
            {user?.role}
          </p>
        </div>
        <div className="flex items-center justify-between rounded-lg border p-3 shadow-md">
          <strong>Two Factor Autheticator:</strong>
          <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
            {user?.isTwoFactorEnabled ? "ON" : "OFF"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
