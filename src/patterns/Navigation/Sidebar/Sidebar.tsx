import type {
  ReactNode,
} from "react";

import "./Sidebar.css";

export interface SidebarItem {
  id: string;
  label: string;
  icon: ReactNode;
  badge?: number;
}

export interface SidebarSection {
  label?: string;
  items: SidebarItem[];
}

export interface SidebarUser {
  name: string;
  role?: string;
  avatar?: string;
}

export interface SidebarProps {
  brand?: string;
  caption?: string;
  logo?: ReactNode;
  sections: SidebarSection[];
  activeItem: string;
  onItemChange: (id: string) => void;
  user?: SidebarUser;
  collapsed?: boolean;
}

export function Sidebar({
  brand = "JADARA",
  caption = "Talent Platform",
  logo,
  sections,
  activeItem,
  onItemChange,
  user,
  collapsed = false,
}: SidebarProps) {
  return (
    <aside
      className={[
        "jadara-sidebar",
        collapsed
          ? "jadara-sidebar--collapsed"
          : "",
      ].join(" ")}
    >
      <div className="jadara-sidebar__brand">
        <div className="jadara-sidebar__logo">
          {logo ?? (
            <span className="jadara-sidebar__logo-symbol">
              ✦
            </span>
          )}
        </div>

        <div className="jadara-sidebar__brand-copy">
          <span className="jadara-sidebar__brand-name">
            {brand}
          </span>

          <span className="jadara-sidebar__brand-caption">
            {caption}
          </span>
        </div>
      </div>

      <nav className="jadara-sidebar__navigation">
        {sections.map(
          (section, sectionIndex) => (
            <div
              className="jadara-sidebar__section"
              key={
                section.label ??
                `section-${sectionIndex}`
              }
            >
              {section.label && (
                <span className="jadara-sidebar__section-label">
                  {section.label}
                </span>
              )}

              <div className="jadara-sidebar__items">
                {section.items.map(
                  (item) => {
                    const active =
                      item.id ===
                      activeItem;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        className={[
                          "jadara-sidebar__item",
                          active
                            ? "jadara-sidebar__item--active"
                            : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        onClick={() =>
                          onItemChange(
                            item.id
                          )
                        }
                        aria-current={
                          active
                            ? "page"
                            : undefined
                        }
                      >
                        <span className="jadara-sidebar__item-icon">
                          {item.icon}
                        </span>

                        <span className="jadara-sidebar__item-label">
                          {item.label}
                        </span>

                        {item.badge !==
                          undefined && (
                          <span className="jadara-sidebar__item-badge">
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          )
        )}
      </nav>

      {user && (
        <div className="jadara-sidebar__user">
          <div className="jadara-sidebar__avatar">
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
          </div>

          <div className="jadara-sidebar__user-copy">
            <strong>
              {user.name}
            </strong>

            {user.role && (
              <span>
                {user.role}
              </span>
            )}
          </div>
        </div>
      )}
    </aside>
  );
}