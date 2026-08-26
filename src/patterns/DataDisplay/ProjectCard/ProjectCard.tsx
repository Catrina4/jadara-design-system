import type { ReactNode } from "react";

import "../DataDisplay.css";

export interface ProjectCardProps {
  title: string;
  description?: string;
  cover?: string;
  author?: string;
  status?: ReactNode;
  technologies?: string[];
  date?: string;
  onClick?: () => void;
}

export function ProjectCard({
  title,
  description,
  cover,
  author,
  status,
  technologies = [],
  date,
  onClick,
}: ProjectCardProps) {
  return (
    <article
      className={`jadara-project-card ${
        onClick ? "jadara-project-card--clickable" : ""
      }`}
      onClick={onClick}
    >
      <div className="jadara-project-card__cover">
        {cover ? (
          <img src={cover} alt="" />
        ) : (
          <div className="jadara-project-card__placeholder">
            ✦
          </div>
        )}
      </div>

      <div className="jadara-project-card__body">
        <div className="jadara-project-card__heading">
          <div>
            <h3>{title}</h3>

            {author && (
              <span>by {author}</span>
            )}
          </div>

          {status}
        </div>

        {description && (
          <p>{description}</p>
        )}

        {technologies.length > 0 && (
          <div className="jadara-project-card__technologies">
            {technologies.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>
        )}

        {date && (
          <small>{date}</small>
        )}
      </div>
    </article>
  );
}