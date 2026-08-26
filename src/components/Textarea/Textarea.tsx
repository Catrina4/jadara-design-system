import type {
  TextareaHTMLAttributes,
} from "react";

import "./Textarea.css";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export function Textarea({
  label,
  error,
  hint,
  id,
  ...props
}: TextareaProps) {
  return (
    <div className="jadara-textarea-field">
      {label && (
        <label
          htmlFor={id}
          className="jadara-textarea-field__label"
        >
          {label}
        </label>
      )}

      <textarea
        id={id}
        className={[
          "jadara-textarea",
          error ? "jadara-textarea--error" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />

      {error && (
        <span className="jadara-textarea-field__error">
          {error}
        </span>
      )}

      {!error && hint && (
        <span className="jadara-textarea-field__hint">
          {hint}
        </span>
      )}
    </div>
  );
}