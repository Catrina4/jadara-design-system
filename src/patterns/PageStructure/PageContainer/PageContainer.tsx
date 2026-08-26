import type { ReactNode } from "react";

import "./PageContainer.css";

export interface PageContainerProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "full";
  className?: string;
}

export function PageContainer({
  children,
  size = "lg",
  className = "",
}: PageContainerProps) {
  return (
    <div
      className={`jadara-page-container jadara-page-container--${size} ${className}`}
    >
      {children}
    </div>
  );
}