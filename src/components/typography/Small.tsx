import { ReactNode } from "react";

interface SmallProps {
  children: ReactNode;
  className?: string;
}

export function Small({ children, className = "" }: SmallProps) {
  return (
    <small className={`text-sm leading-none font-medium ${className}`}>
      {children}
    </small>
  );
}
