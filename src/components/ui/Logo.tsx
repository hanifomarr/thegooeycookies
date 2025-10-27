import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string | undefined;
}

export function Logo({ className }: LogoProps) {
  const base = "relative w-20 h-8 sm:w-24 sm:h-10 md:w-32 md:h-12";
  return (
    <div className="flex items-center">
      <Link href="/" className={cn(base, className)}>
        <Image
          src="/logo.png"
          alt="TheGooeyCookies Logo"
          fill
          className="object-contain"
          priority
        />
      </Link>
    </div>
  );
}
