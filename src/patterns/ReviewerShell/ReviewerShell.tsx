import React from "react";
import {
  LayoutDashboard,
  ClipboardCheck,
  FolderCheck,
  BarChart3,
  MessageSquare,
  CalendarDays,
  User,
  Settings,
  LogOut,
  Search,
  Bell,
} from "lucide-react";

import "./ReviewerShell.css";

export type ReviewerPage =
  | "dashboard"
  | "pending"
  | "reviewed"
  | "statistics"
  | "messages"
  | "calendar"
  | "profile"
  | "settings";

export interface ReviewerShellProps {
  activePage?: ReviewerPage;
  children: React.ReactNode;

  reviewerName?: string;
  reviewerRole?: string;
  reviewerInitials?: string;

  pendingCount?: number;
  unreadMessages?: number;

  onNavigate?: (page: ReviewerPage) => void;
  onLogout?: () => void;

  onSearch?: (value: string) => void;
  onNotifications?: () => void;
}

interface NavigationItem {
  id: ReviewerPage;
  label: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  badge?: number;
}

export const ReviewerShell: React.FC<ReviewerShellProps> = ({
  activePage = "dashboard",
  children,
  reviewerName = "Catrina Reviewer",
  reviewerRole = "Expert Reviewer",
  reviewerInitials = "CR",
  pendingCount = 12,
  unreadMessages = 3,
  onNavigate,
  onLogout,
  onSearch,
  onNotifications,
}) => {
  const primaryNavigation: NavigationItem[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      id: "pending",
      label: "Pending Reviews",
      icon: ClipboardCheck,
      badge: pendingCount,
    },
    {
      id: "reviewed",
      label: "Reviewed Projects",
      icon: FolderCheck,
    },
    {
      id: "statistics",
      label: "My Statistics",
      icon: BarChart3,
    },
    {
      id: "messages",
      label: "Messages",
      icon: MessageSquare,
      badge: unreadMessages,
    },
    {
      id: "calendar",
      label: "Calendar",
      icon: CalendarDays,
    },
  ];

  const secondaryNavigation: NavigationItem[] = [
    {
      id: "profile",
      label: "Profile",
      icon: User,
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
    },
  ];

  const handleNavigation = (page: ReviewerPage) => {
    onNavigate?.(page);
  };

  return (
    <div className="reviewer-shell">
      <aside className="reviewer-sidebar">
        <div className="reviewer-sidebar__brand">
          <div className="reviewer-sidebar__logo">J</div>

          <div>
            <div className="reviewer-sidebar__brand-name">
              JADARA
            </div>

            <div className="reviewer-sidebar__brand-subtitle">
              REVIEWER PORTAL
            </div>
          </div>
        </div>

        <nav className="reviewer-sidebar__navigation">
          <div className="reviewer-sidebar__section-label">
            WORKSPACE
          </div>

          {primaryNavigation.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;

            return (
              <button
                key={item.id}
                type="button"
                className={`reviewer-nav-item ${
                  isActive ? "reviewer-nav-item--active" : ""
                }`}
                onClick={() => handleNavigation(item.id)}
              >
                <Icon size={19} strokeWidth={1.8} />

                <span className="reviewer-nav-item__label">
                  {item.label}
                </span>

                {item.badge !== undefined && item.badge > 0 && (
                  <span className="reviewer-nav-item__badge">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="reviewer-sidebar__section-label reviewer-sidebar__section-label--secondary">
            ACCOUNT
          </div>

          {secondaryNavigation.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;

            return (
              <button
                key={item.id}
                type="button"
                className={`reviewer-nav-item ${
                  isActive ? "reviewer-nav-item--active" : ""
                }`}
                onClick={() => handleNavigation(item.id)}
              >
                <Icon size={19} strokeWidth={1.8} />

                <span className="reviewer-nav-item__label">
                  {item.label}
                </span>
              </button>
            );
          })}

          <button
            type="button"
            className="reviewer-nav-item reviewer-nav-item--logout"
            onClick={onLogout}
          >
            <LogOut size={19} strokeWidth={1.8} />

            <span className="reviewer-nav-item__label">
              Log out
            </span>
          </button>
        </nav>

        <div className="reviewer-sidebar__reviewer">
          <div className="reviewer-sidebar__avatar">
            {reviewerInitials}
          </div>

          <div className="reviewer-sidebar__reviewer-info">
            <div className="reviewer-sidebar__reviewer-name">
              {reviewerName}
            </div>

            <div className="reviewer-sidebar__reviewer-role">
              {reviewerRole}
            </div>
          </div>
        </div>
      </aside>

      <main className="reviewer-main">
        <header className="reviewer-topbar">
          <div className="reviewer-topbar__search">
            <Search size={18} strokeWidth={1.8} />

            <input
              type="search"
              placeholder="Search..."
              aria-label="Search"
              onChange={(event) => onSearch?.(event.target.value)}
            />
          </div>

          <button
            type="button"
            className="reviewer-topbar__notification"
            aria-label="Notifications"
            onClick={onNotifications}
          >
            <Bell size={20} strokeWidth={1.8} />

            <span className="reviewer-topbar__notification-dot" />
          </button>

          <div className="reviewer-topbar__profile">
            <div className="reviewer-topbar__avatar">
              {reviewerInitials}
            </div>

            <div>
              <div className="reviewer-topbar__profile-name">
                {reviewerName}
              </div>

              <div className="reviewer-topbar__profile-role">
                {reviewerRole}
              </div>
            </div>
          </div>
        </header>

        <section className="reviewer-content">
          {children}
        </section>
      </main>
    </div>
  );
};

export default ReviewerShell;