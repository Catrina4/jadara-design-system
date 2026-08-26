import type { ReactNode } from "react";

import "./StatusBadge.css";

export type Status =
  | "pending"
  | "in-review"
  | "approved"
  | "rejected"
  | "draft"
  | "completed";

export interface StatusBadgeProps {
  status: Status;
  children?: ReactNode;
}

const labels: Record<Status, string> = {
  pending: "Pending",
  "in-review": "In Review",
  approved: "Approved",
  rejected: "Rejected",
  draft: "Draft",
  completed: "Completed",
};

export function StatusBadge({
  status,
  children,
}: StatusBadgeProps) {
  return (
    <span
      className={`jadara-status-badge jadara-status-badge--${status}`}
    >
      {children ?? labels[status]}
    </span>
  );
}