import { ReactNode } from "react";

interface LargeProps {
  children: ReactNode;
  className?: string;
}

export function Large({ children, className = "" }: LargeProps) {
  return <div className={`text-lg font-semibold ${className}`}>{children}</div>;
}
