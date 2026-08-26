import type { ReactNode } from "react";
import "./Section.css";

export interface SectionProps {
  title?: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
}

export function Section({
  title,
  description,
  action,
  children,
}: SectionProps) {
  return (
    <section className="jadara-section">
      {(title || description || action) && (
        <div className="jadara-section__header">
          <div>
            {title && (
              <h2 className="jadara-section__title">
                {title}
              </h2>
            )}

            {description && (
              <p className="jadara-section__description">
                {description}
              </p>
            )}
          </div>

          {action && (
            <div className="jadara-section__action">
              {action}
            </div>
          )}
        </div>
      )}

      <div className="jadara-section__content">
        {children}
      </div>
    </section>
  );
}