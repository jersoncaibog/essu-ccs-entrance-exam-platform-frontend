import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
  className?: string;
}

export function Main({ children, className = "" }: MainProps) {
  return (
    <main className={`flex flex-col gap-8 row-start-2 ${className}`}>
      {children}
    </main>
  );
}
