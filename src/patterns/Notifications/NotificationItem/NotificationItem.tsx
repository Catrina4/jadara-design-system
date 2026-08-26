import {
  Bell,
  CheckCircle2,
  FileCheck2,
  MessageSquare,
  UserPlus,
} from "lucide-react";

import "./NotificationItem.css";

export type NotificationType =
  | "system"
  | "review"
  | "message"
  | "success"
  | "connection";

export interface NotificationItemProps {
  title: string;
  description?: string;
  time: string;
  type?: NotificationType;
  unread?: boolean;
  onClick?: () => void;
}

const icons = {
  system: Bell,
  review: FileCheck2,
  message: MessageSquare,
  success: CheckCircle2,
  connection: UserPlus,
};

export function NotificationItem({
  title,
  description,
  time,
  type = "system",
  unread = false,
  onClick,
}: NotificationItemProps) {
  const Icon = icons[type];

  return (
    <button
      type="button"
      className={`jadara-notification-item ${
        unread
          ? "jadara-notification-item--unread"
          : ""
      }`}
      onClick={onClick}
    >
      <span className="jadara-notification-item__icon">
        <Icon size={18} />
      </span>

      <span className="jadara-notification-item__content">
        <span className="jadara-notification-item__title">
          {title}
        </span>

        {description && (
          <span className="jadara-notification-item__description">
            {description}
          </span>
        )}

        <span className="jadara-notification-item__time">
          {time}
        </span>
      </span>

      {unread && (
        <span
          className="jadara-notification-item__dot"
          aria-label="Unread"
        />
      )}
    </button>
  );
}