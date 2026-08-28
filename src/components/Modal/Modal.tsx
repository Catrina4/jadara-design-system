import {
  X,
} from "lucide-react";

import type {
  ReactNode,
} from "react";

import "./Modal.css";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
  size?: "small" | "medium" | "large";
}

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = "medium",
}: ModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="jadara-modal__overlay"
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div
        className={[
          "jadara-modal",
          `jadara-modal--${size}`,
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-labelledby="jadara-modal-title"
      >
        <div className="jadara-modal__header">
          <div>
            <h2 id="jadara-modal-title">
              {title}
            </h2>

            {description && (
              <p>{description}</p>
            )}
          </div>

          <button
            type="button"
            className="jadara-modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={17} />
          </button>
        </div>

        {children && (
          <div className="jadara-modal__body">
            {children}
          </div>
        )}

        {footer && (
          <div className="jadara-modal__footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}