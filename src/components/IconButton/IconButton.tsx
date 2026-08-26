import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./IconButton.css";

export type IconButtonSize = "sm" | "md" | "lg";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  size?: IconButtonSize;
  label: string;
}

export function IconButton({
  icon,
  size = "md",
  label,
  className = "",
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={`jadara-icon-button jadara-icon-button--${size} ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
}