import type { ReactNode } from "react";

import "./StatCard.css";

export type StatCardTone =
  | "purple"
  | "green"
  | "orange"
  | "red"
  | "blue";

export interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  trend?: string;
  icon?: ReactNode;
  tone?: StatCardTone;
}

export function StatCard({
  title,
  value,
  description,
  trend,
  icon,
  tone = "purple",
}: StatCardProps) {
  return (
    <article
      className={`jadara-stat-card jadara-stat-card--${tone}`}
    >
      <div className="jadara-stat-card__top">
        <div className="jadara-stat-card__icon">
          {icon}
        </div>

        <span className="jadara-stat-card__arrow">
          ↗
        </span>
      </div>

      <span className="jadara-stat-card__title">
        {title}
      </span>

      <strong className="jadara-stat-card__value">
        {value}
      </strong>

      {description && (
        <span className="jadara-stat-card__description">
          {description}
        </span>
      )}

      {trend && (
        <span className="jadara-stat-card__trend">
          {trend}
        </span>
      )}
    </article>
  );
}