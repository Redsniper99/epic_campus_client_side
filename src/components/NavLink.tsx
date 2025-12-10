"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string | ((props: { isActive: boolean }) => string);
}

const NavLink = ({ to, children, className }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === to;

  const finalClassName =
    typeof className === "function" ? className({ isActive }) : className;

  return (
    <Link href={to} className={cn(finalClassName)}>
      {children}
    </Link>
  );
};

export default NavLink;
