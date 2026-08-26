import type { ReactNode } from "react";

export interface ProfileCardProps {
  name: string;
  role?: string;
  avatar?: string;
  location?: string;
  description?: string;
  meta?: ReactNode;
}

export function ProfileCard({
  name,
  role,
  avatar,
  location,
  description,
  meta,
}: ProfileCardProps) {
  return (
    <article className="jadara-profile-card">
      <div className="jadara-profile-card__top">
        <div className="jadara-profile-card__avatar">
          {avatar && (
            <img src={avatar} alt={name} />
          )}
        </div>

        <div>
          <h3>{name}</h3>

          {role && <span>{role}</span>}

          {location && (
            <span>📍 {location}</span>
          )}
        </div>
      </div>

      {description && (
        <p>{description}</p>
      )}

      {meta}
    </article>
  );
}