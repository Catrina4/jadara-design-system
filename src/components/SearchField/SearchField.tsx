import {
  Search,
  X,
} from "lucide-react";

import "./SearchField.css";

export interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function SearchField({
  value,
  onChange,
  placeholder = "Search...",
  disabled = false,
}: SearchFieldProps) {
  return (
    <div className="jadara-search-field">
      <Search
        size={15}
        className="jadara-search-field__icon"
      />

      <input
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(event) =>
          onChange(event.target.value)
        }
      />

      {value && (
        <button
          type="button"
          className="jadara-search-field__clear"
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}