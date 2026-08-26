import type { ReactNode } from "react";

export type SkillLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced"
  | "Expert";

export interface SkillCardProps {
  name: string;
  level: SkillLevel;
  icon?: ReactNode;
  description?: string;
  progress?: number;
}

export function SkillCard({
  name,
  level,
  icon,
  description,
  progress,
}: SkillCardProps) {
  return (
    <article className="jadara-skill-card">
      <div className="jadara-skill-card__icon">
        {icon ?? "✦"}
      </div>

      <div className="jadara-skill-card__content">
        <div className="jadara-skill-card__heading">
          <h3>{name}</h3>

          <span className={`jadara-skill-card__level jadara-skill-card__level--${level.toLowerCase()}`}>
            {level}
          </span>
        </div>

        {description && (
          <p>{description}</p>
        )}

        {progress !== undefined && (
          <div className="jadara-skill-card__progress">
            <div>
              <span>Progress</span>
              <strong>{progress}%</strong>
            </div>

            <div className="jadara-skill-card__progress-track">
              <span
                style={{
                  width: `${Math.min(
                    100,
                    Math.max(0, progress)
                  )}%`,
                }}
              />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}