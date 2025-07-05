import { ReactNode } from "react";

interface PProps {
  children: ReactNode;
  className?: string;
}

export function P({ children, className = "" }: PProps) {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}>
      {children}
    </p>
  );
}
