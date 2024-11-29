import { cn } from "@/lib/utils";
import Image from "next/image";

interface IconProps {
  size: number;
  className?: string;
}

export function GrubIcon({ size, className, ...props }: IconProps) {
  return (
    <Image
      src="/icon-grub.png"
      alt="Grub"
      width={size}
      height={size}
      className={cn("rounded-md", className)}
      {...props}
    />
  );
}
