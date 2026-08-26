import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

import "./FormField.css";

export interface FormFieldProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size"
  > {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children?: ReactNode;
}

export function FormField({
  label,
  hint,
  error,
  required,
  children,
  id,
  ...inputProps
}: FormFieldProps) {
  const generatedId =
    id ??
    `jadara-field-${label
      .toLowerCase()
      .replace(/\s+/g, "-")}`;

  return (
    <div className="jadara-form-field">
      <label htmlFor={generatedId}>
        {label}

        {required && (
          <span>*</span>
        )}
      </label>

      {children ?? (
        <input
          id={generatedId}
          {...inputProps}
        />
      )}

      {error ? (
        <small className="jadara-form-field__error">
          {error}
        </small>
      ) : hint ? (
        <small className="jadara-form-field__hint">
          {hint}
        </small>
      ) : null}
    </div>
  );
}