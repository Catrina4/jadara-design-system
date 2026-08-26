import { useState } from "react";
import type { ReactNode } from "react";

import "./Topbar.css";

export interface TopbarProps {
  onMenuClick?: () => void;
  onSearch?: (value: string) => void;
  onNotificationClick?: () => void;
  actions?: ReactNode;
  user?: {
    name: string;
    role?: string;
    avatar?: string;
  };
}

export function Topbar({
  onMenuClick,
  onSearch,
  onNotificationClick,
  actions,
  user,
}: TopbarProps) {
  const [search, setSearch] = useState("");

  return (
    <header className="jadara-topbar">
      <div className="jadara-topbar__left">
        {onMenuClick && (
          <button
            type="button"
            className="jadara-topbar__menu"
            onClick={onMenuClick}
            aria-label="Open navigation"
          >
            ☰
          </button>
        )}

        <div className="jadara-topbar__search">
          <span>⌕</span>

          <input
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              onSearch?.(event.target.value);
            }}
            placeholder="Search anything..."
          />

          <kbd>⌘K</kbd>
        </div>
      </div>

      <div className="jadara-topbar__right">
        {actions}

        <button
          type="button"
          className="jadara-topbar__notification"
          onClick={onNotificationClick}
          aria-label="Notifications"
        >
          ♧
          <span>3</span>
        </button>

        {user && (
          <button
            type="button"
            className="jadara-topbar__user"
          >
            <div className="jadara-topbar__avatar">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} />
              ) : (
                user.name.charAt(0).toUpperCase()
              )}
            </div>

            <div className="jadara-topbar__user-info">
              <strong>{user.name}</strong>

              {user.role && (
                <span>{user.role}</span>
              )}
            </div>

            <span>⌄</span>
          </button>
        )}
      </div>
    </header>
  );
}