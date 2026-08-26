import type {
  InputHTMLAttributes,
} from "react";

import "./Input.css";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export function Input({
  label,
  error,
  hint,
  id,
  ...props
}: InputProps) {
  return (
    <div className="jadara-input-field">
      {label && (
        <label
          htmlFor={id}
          className="jadara-input-field__label"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        className={[
          "jadara-input",
          error ? "jadara-input--error" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />

      {error && (
        <span className="jadara-input-field__error">
          {error}
        </span>
      )}

      {!error && hint && (
        <span className="jadara-input-field__hint">
          {hint}
        </span>
      )}
    </div>
  );
}