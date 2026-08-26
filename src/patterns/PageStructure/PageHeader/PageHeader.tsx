import type { ReactNode } from "react";

import "./PageHeader.css";

export interface PageHeaderProps {
  title: string;
  description?: string;
  eyebrow?: string;
  actions?: ReactNode;
}

export function PageHeader({
  title,
  description,
  eyebrow,
  actions,
}: PageHeaderProps) {
  return (
    <header className="jadara-page-header">
      <div className="jadara-page-header__text">
        {eyebrow && (
          <span className="jadara-page-header__eyebrow">
            {eyebrow}
          </span>
        )}

        <h1>{title}</h1>

        {description && (
          <p>{description}</p>
        )}
      </div>

      {actions && (
        <div className="jadara-page-header__actions">
          {actions}
        </div>
      )}
    </header>
  );
}