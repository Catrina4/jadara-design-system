import {
  Bell,
  Menu,
  Search,
} from "lucide-react";

import type {
  ReactNode,
} from "react";

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
            <Menu size={18} />
          </button>
        )}

        <div className="jadara-topbar__search">
          <Search size={14} />

          <input
            placeholder="Search for talents, skills, or projects..."
            onChange={(event) =>
              onSearch?.(
                event.target.value
              )
            }
          />
        </div>
      </div>

      <div className="jadara-topbar__right">
        {actions}

        <button
          type="button"
          className="jadara-topbar__icon-button"
          onClick={onNotificationClick}
          aria-label="Notifications"
        >
          <Bell size={16} />

          <span className="jadara-topbar__notification-dot" />
        </button>

        {user && (
          <button
            type="button"
            className="jadara-topbar__user"
          >
            <span className="jadara-topbar__avatar">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                />
              ) : (
                user.name
                  .charAt(0)
                  .toUpperCase()
              )}
            </span>

            <span className="jadara-topbar__user-copy">
              <strong>
                {user.name}
              </strong>

              {user.role && (
                <span>
                  {user.role}
                </span>
              )}
            </span>

            <span className="jadara-topbar__chevron">
              ⌄
            </span>
          </button>
        )}
      </div>
    </header>
  );
}