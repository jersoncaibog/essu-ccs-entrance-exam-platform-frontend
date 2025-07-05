import { ReactNode } from "react";

interface H3Props {
  children: ReactNode;
  className?: string;
}

export function H3({ children, className = "" }: H3Props) {
  return (
    <h3
      className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
    >
      {children}
    </h3>
  );
}
