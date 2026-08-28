import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import "./Button.css";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "success"
  | "danger";

export type ButtonSize =
  | "small"
  | "medium"
  | "large";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "medium",
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = "",
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = [
    "jadara-button",
    `jadara-button--${variant}`,
    `jadara-button--${size}`,
    fullWidth ? "jadara-button--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      {...props}
    >
      {leftIcon && (
        <span className="jadara-button__icon">
          {leftIcon}
        </span>
      )}

      <span className="jadara-button__label">
        {children}
      </span>

      {rightIcon && (
        <span className="jadara-button__icon">
          {rightIcon}
        </span>
      )}
    </button>
  );
}