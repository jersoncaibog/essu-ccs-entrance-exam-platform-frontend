import { ReactNode } from "react";

interface FooterProps {
  children: ReactNode;
  className?: string;
}

export function Footer({ children, className = "" }: FooterProps) {
  return (
    <footer className={`row-start-3 flex gap-6 ${className}`}>
      {children}
    </footer>
  );
}
