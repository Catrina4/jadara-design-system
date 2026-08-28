import {
  ChevronDown,
} from "lucide-react";

import "./Select.css";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

export function Select({
  value,
  onChange,
  options,
  placeholder = "Select...",
  disabled = false,
  ariaLabel,
}: SelectProps) {
  return (
    <div className="jadara-select">
      <select
        value={value}
        disabled={disabled}
        aria-label={ariaLabel}
        onChange={(event) =>
          onChange(event.target.value)
        }
      >
        {!value && (
          <option value="">
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      <ChevronDown
        size={15}
        className="jadara-select__icon"
      />
    </div>
  );
}