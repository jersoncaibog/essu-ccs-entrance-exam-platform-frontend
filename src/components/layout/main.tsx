import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
  className?: string;
}

export function Main({ children, className = "" }: MainProps) {
  return (
    <main className={`flex flex-col h-screen w-screen ${className}`}>
      {children}
    </main>
  );
}
