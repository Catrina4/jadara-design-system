import type { ImgHTMLAttributes } from "react";
import "./Avatar.css";

export interface AvatarProps
  extends ImgHTMLAttributes<HTMLImageElement> {
  size?: "sm" | "md" | "lg";
  fallback?: string;
}

export function Avatar({
  size = "md",
  fallback = "U",
  src,
  alt = "",
  ...props
}: AvatarProps) {
  if (!src) {
    return (
      <div
        className={`jadara-avatar jadara-avatar--${size}`}
        aria-label={alt}
      >
        {fallback.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      className={`jadara-avatar jadara-avatar--${size}`}
      src={src}
      alt={alt}
      {...props}
    />
  );
}