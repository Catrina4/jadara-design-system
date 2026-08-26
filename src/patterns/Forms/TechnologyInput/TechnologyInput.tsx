import {
  useState,
  type KeyboardEvent,
} from "react";

import "./TechnologyInput.css";

export interface TechnologyInputProps {
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
}

export function TechnologyInput({
  value,
  onChange,
  placeholder = "Add technology...",
}: TechnologyInputProps) {
  const [input, setInput] = useState("");

  const addTechnology = () => {
    const technology = input.trim();

    if (!technology) return;

    if (
      value.some(
        (item) =>
          item.toLowerCase() ===
          technology.toLowerCase()
      )
    ) {
      setInput("");
      return;
    }

    onChange([
      ...value,
      technology,
    ]);

    setInput("");
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      event.key === "Enter" ||
      event.key === ","
    ) {
      event.preventDefault();
      addTechnology();
    }

    if (
      event.key === "Backspace" &&
      !input &&
      value.length
    ) {
      onChange(value.slice(0, -1));
    }
  };

  const removeTechnology = (
    technology: string
  ) => {
    onChange(
      value.filter(
        (item) => item !== technology
      )
    );
  };

  return (
    <div className="jadara-technology-input">
      <div className="jadara-technology-input__tags">
        {value.map((technology) => (
          <span key={technology}>
            {technology}

            <button
              type="button"
              onClick={() =>
                removeTechnology(technology)
              }
              aria-label={`Remove ${technology}`}
            >
              ×
            </button>
          </span>
        ))}
      </div>

      <input
        value={input}
        onChange={(event) =>
          setInput(event.target.value)
        }
        onKeyDown={handleKeyDown}
        onBlur={addTechnology}
        placeholder={
          value.length
            ? "Add another..."
            : placeholder
        }
      />
    </div>
  );
}