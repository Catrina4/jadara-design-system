import {
  Monitor,
  Moon,
  Sun,
} from "lucide-react";

import {
  useTheme,
  type Theme,
} from "./ThemeProvider";

import "./ThemeToggle.css";

const themes: {
  value: Theme;
  label: string;
  icon: typeof Sun;
}[] = [
  {
    value: "light",
    label: "Light",
    icon: Sun,
  },
  {
    value: "dark",
    label: "Dark",
    icon: Moon,
  },
  {
    value: "system",
    label: "System",
    icon: Monitor,
  },
];

export function ThemeToggle() {
  const {
    theme,
    setTheme,
  } = useTheme();

  return (
    <div
      className="theme-toggle"
      role="group"
      aria-label="Theme selection"
    >
      {themes.map((item) => {
        const Icon = item.icon;

        const isActive =
          theme === item.value;

        return (
          <button
            key={item.value}
            type="button"
            className={`theme-toggle__button ${
              isActive
                ? "theme-toggle__button--active"
                : ""
            }`}
            onClick={() =>
              setTheme(item.value)
            }
            aria-label={`Use ${item.label} theme`}
            aria-pressed={isActive}
          >
            <Icon size={17} />

            <span>
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
