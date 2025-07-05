import { ReactNode } from "react";

interface MutedProps {
  children: ReactNode;
  className?: string;
}

export function Muted({ children, className = "" }: MutedProps) {
  return (
    <p className={`text-muted-foreground text-sm ${className}`}>{children}</p>
  );
}
