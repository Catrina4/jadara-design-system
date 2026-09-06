import React from "react";

import {
  LayoutDashboard,
  ClipboardCheck,
  FolderCheck,
  BarChart3,
  User,
  Settings,
  LogOut,
} from "lucide-react";

import "./ReviewerShell.css";

export type ReviewerPage =
  | "dashboard"
  | "pending"
  | "reviewed"
  | "statistics"
  | "profile"
  | "settings";

export interface ReviewerShellProps {
  activePage?: ReviewerPage;
  children: React.ReactNode;

  reviewerName?: string;
  reviewerRole?: string;
  reviewerInitials?: string;

  pendingCount?: number;

  onNavigate?: (page: ReviewerPage) => void;
  onLogout?: () => void;
}

interface NavigationItem {
  id: ReviewerPage;
  label: string;
  icon: React.ComponentType<{
    size?: number;
    strokeWidth?: number;
  }>;
  badge?: number;
}

export const ReviewerShell: React.FC<
  ReviewerShellProps
> = ({
  activePage = "dashboard",
  children,
  reviewerName = "Catrina Reviewer",
  reviewerRole = "Reviewer",
  reviewerInitials = "CR",
  pendingCount = 12,
  onNavigate,
  onLogout,
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

  const handleNavigation = (
    page: ReviewerPage,
  ) => {
    onNavigate?.(page);
  };

  return (
    <div className="reviewer-shell">
      <aside className="reviewer-sidebar">
        {/* Brand */}

        <div className="reviewer-sidebar__brand">
          <div className="reviewer-sidebar__logo">
            J
          </div>

          <div>
            <div className="reviewer-sidebar__brand-name">
              JADARA
            </div>

            <div className="reviewer-sidebar__brand-subtitle">
              REVIEWER PORTAL
            </div>
          </div>
        </div>

        {/* Navigation */}

        <nav className="reviewer-sidebar__navigation">
          <div className="reviewer-sidebar__section-label">
            WORKSPACE
          </div>

          {primaryNavigation.map(
            (item) => {
              const Icon = item.icon;

              const isActive =
                activePage === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  className={`reviewer-nav-item ${
                    isActive
                      ? "reviewer-nav-item--active"
                      : ""
                  }`}
                  onClick={() =>
                    handleNavigation(
                      item.id,
                    )
                  }
                >
                  <Icon
                    size={19}
                    strokeWidth={1.8}
                  />

                  <span className="reviewer-nav-item__label">
                    {item.label}
                  </span>

                  {item.badge !==
                    undefined &&
                    item.badge > 0 && (
                      <span className="reviewer-nav-item__badge">
                        {item.badge}
                      </span>
                    )}
                </button>
              );
            },
          )}

          <div className="reviewer-sidebar__section-label reviewer-sidebar__section-label--secondary">
            ACCOUNT
          </div>

          {secondaryNavigation.map(
            (item) => {
              const Icon = item.icon;

              const isActive =
                activePage === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  className={`reviewer-nav-item ${
                    isActive
                      ? "reviewer-nav-item--active"
                      : ""
                  }`}
                  onClick={() =>
                    handleNavigation(
                      item.id,
                    )
                  }
                >
                  <Icon
                    size={19}
                    strokeWidth={1.8}
                  />

                  <span className="reviewer-nav-item__label">
                    {item.label}
                  </span>
                </button>
              );
            },
          )}

          {/* Logout */}

          <button
            type="button"
            className="reviewer-nav-item reviewer-nav-item--logout"
            onClick={onLogout}
          >
            <LogOut
              size={19}
              strokeWidth={1.8}
            />

            <span className="reviewer-nav-item__label">
              Log out
            </span>
          </button>
        </nav>

        {/* Reviewer */}

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

      {/* Main */}

      <main className="reviewer-main">
        <header className="reviewer-topbar">
          <div className="reviewer-topbar__title">
            JADARA Reviewer Portal
          </div>

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