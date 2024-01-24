import { cn } from "@/lib/utils";

interface PasswordStrengthProps {
  passStrenght: number;
}

export function PasswordStrength({ passStrenght }: PasswordStrengthProps) {
  return (
    <div className="flex items-center space-x-2">
      {Array.from({ length: passStrenght + 1 }).map((i, index) => (
        <div
          key={index}
          className={cn("h-2 w-32 rounded-full", {
            "bg-red-500": passStrenght === 0,
            "bg-yellow-500": passStrenght === 1,
            "bg-yellow-300": passStrenght === 2,
            "bg-green-500": passStrenght === 3,
          })}
        />
      ))}
    </div>
  );
}
