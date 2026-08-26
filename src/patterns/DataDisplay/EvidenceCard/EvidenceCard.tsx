import type { ReactNode } from "react";

export interface EvidenceCardProps {
  title: string;
  type?: string;
  date?: string;
  icon?: ReactNode;
  action?: ReactNode;
}

export function EvidenceCard({
  title,
  type,
  date,
  icon,
  action,
}: EvidenceCardProps) {
  return (
    <article className="jadara-evidence-card">
      <div className="jadara-evidence-card__icon">
        {icon ?? "◫"}
      </div>

      <div className="jadara-evidence-card__content">
        <h3>{title}</h3>

        <p>
          {[type, date]
            .filter(Boolean)
            .join(" • ")}
        </p>
      </div>

      <div className="jadara-evidence-card__action">
        {action ?? "→"}
      </div>
    </article>
  );
}