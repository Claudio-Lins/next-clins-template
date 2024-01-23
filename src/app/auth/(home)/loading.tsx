import { Loader } from "lucide-react";

export default function AuthLoading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-primary bg-opacity-50">
      <div className="flex flex-col items-center justify-center space-y-2">
        <Loader className="h-12 w-12 animate-spin text-muted" />
        <div className="flex space-x-2">
          <span className="text-lg font-semibold text-muted">AuthPage</span>
          <span className="animate-pulse text-lg font-semibold text-muted">
            ...
          </span>
        </div>
      </div>
    </div>
  );
}
