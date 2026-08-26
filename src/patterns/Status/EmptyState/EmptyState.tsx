import type { ReactNode } from "react";

import "./EmptyState.css";

export interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
}

export function EmptyState({
  title,
  description,
  icon,
  action,
}: EmptyStateProps) {
  return (
    <section className="jadara-empty-state">
      <div className="jadara-empty-state__icon">
        {icon ?? "◇"}
      </div>

      <h2>{title}</h2>

      {description && (
        <p>{description}</p>
      )}

      {action && (
        <div className="jadara-empty-state__action">
          {action}
        </div>
      )}
    </section>
  );
}