import { ReactNode } from "react";

interface BlockquoteProps {
  children: ReactNode;
  className?: string;
}

export function Blockquote({ children, className = "" }: BlockquoteProps) {
  return (
    <blockquote className={`mt-6 border-l-2 pl-6 italic ${className}`}>
      {children}
    </blockquote>
  );
}
