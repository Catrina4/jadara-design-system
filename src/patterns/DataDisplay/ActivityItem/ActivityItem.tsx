import type { ReactNode } from "react";

export interface ActivityItemProps {
  title: string;
  description?: string;
  time: string;
  icon?: ReactNode;
}

export function ActivityItem({
  title,
  description,
  time,
  icon,
}: ActivityItemProps) {
  return (
    <article className="jadara-activity-item">
      <div className="jadara-activity-item__icon">
        {icon ?? "✦"}
      </div>

      <div className="jadara-activity-item__content">
        <p>
          <strong>{title}</strong>
          {description && ` ${description}`}
        </p>

        <time>{time}</time>
      </div>
    </article>
  );
}