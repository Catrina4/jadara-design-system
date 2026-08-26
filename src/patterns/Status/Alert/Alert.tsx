import {
  AlertCircle,
  CheckCircle2,
  Info,
  TriangleAlert,
  X,
} from "lucide-react";

import type { ReactNode } from "react";
import "./Alert.css";

export type AlertVariant =
  | "info"
  | "success"
  | "warning"
  | "error";

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children?: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const icons = {
  info: Info,
  success: CheckCircle2,
  warning: TriangleAlert,
  error: AlertCircle,
};

export function Alert({
  variant = "info",
  title,
  children,
  dismissible = false,
  onDismiss,
}: AlertProps) {
  const Icon = icons[variant];

  return (
    <div
      className={`jadara-alert jadara-alert--${variant}`}
      role="alert"
    >
      <Icon
        size={20}
        className="jadara-alert__icon"
      />

      <div className="jadara-alert__content">
        {title && (
          <h3 className="jadara-alert__title">
            {title}
          </h3>
        )}

        {children && (
          <div className="jadara-alert__message">
            {children}
          </div>
        )}
      </div>

      {dismissible && onDismiss && (
        <button
          type="button"
          className="jadara-alert__close"
          onClick={onDismiss}
          aria-label="Dismiss alert"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}