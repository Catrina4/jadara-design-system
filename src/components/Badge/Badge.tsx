import type { HTMLAttributes, ReactNode } from "react";
import "./Badge.css";

export type BadgeVariant =
  | "purple"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "neutral";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}

export function Badge({
  children,
  variant = "neutral",
  className = "",
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        "jadara-badge",
        `jadara-badge--${variant}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}