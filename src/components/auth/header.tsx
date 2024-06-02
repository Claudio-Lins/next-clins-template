import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-6">
      {/* <h1 className={cn("text-5xl font-semibold", font.className)}>🔐 Auth</h1> */}
      <Image
        className="h-auto w-60 cursor-pointer object-contain md:w-60"
        src={"/assets/lgs/vca-hor-pos_lg.svg" ?? ""}
        alt="Sintoniza-t logo"
        width={300}
        height={50}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};
