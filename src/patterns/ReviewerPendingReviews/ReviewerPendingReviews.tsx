import React, { useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Clock3,
  ArrowRight,
  UserRound,
} from "lucide-react";

import "./ReviewerPendingReviews.css";

export type ReviewPriority = "High" | "Normal";

export interface PendingReview {
  id: string;
  projectName: string;
  learnerName: string;
  skill: string;
  submittedAt: string;
  priority: ReviewPriority;
  description?: string;
}

export interface ReviewerPendingReviewsProps {
  reviews?: PendingReview[];

  onReview?: (review: PendingReview) => void;
}

const defaultReviews: PendingReview[] = [
  {
    id: "REV-001",
    projectName: "E-commerce Platform",
    learnerName: "Ahmed Benali",
    skill: "React",
    submittedAt: "2 hours ago",
    priority: "High",
    description:
      "A full-stack e-commerce application with product management, authentication and checkout.",
  },
  {
    id: "REV-002",
    projectName: "Data Analytics Dashboard",
    learnerName: "Sarah Martin",
    skill: "Data Analysis",
    submittedAt: "5 hours ago",
    priority: "Normal",
    description:
      "Interactive analytics dashboard demonstrating data processing and visualization.",
  },
  {
    id: "REV-003",
    projectName: "Mobile Fitness App",
    learnerName: "Yacine Haddad",
    skill: "React Native",
    submittedAt: "Yesterday",
    priority: "Normal",
    description:
      "Mobile fitness application with workout tracking and progress reporting.",
  },
  {
    id: "REV-004",
    projectName: "API Integration Service",
    learnerName: "Lina Saidi",
    skill: "Backend Development",
    submittedAt: "Yesterday",
    priority: "High",
    description:
      "Backend service integrating several external APIs with authentication and caching.",
  },
];

export const ReviewerPendingReviews: React.FC<
  ReviewerPendingReviewsProps
> = ({ reviews = defaultReviews, onReview }) => {
  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState<"All" | ReviewPriority>("All");

  const filteredReviews = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return reviews.filter((review) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        review.projectName.toLowerCase().includes(normalizedSearch) ||
        review.learnerName.toLowerCase().includes(normalizedSearch) ||
        review.skill.toLowerCase().includes(normalizedSearch);

      const matchesPriority =
        priority === "All" || review.priority === priority;

      return matchesSearch && matchesPriority;
    });
  }, [reviews, search, priority]);

  return (
    <div className="pending-reviews">
      <div className="pending-reviews__header">
        <div>
          <div className="pending-reviews__eyebrow">
            REVIEW QUEUE
          </div>

          <h1 className="pending-reviews__title">
            Pending Reviews
          </h1>

          <p className="pending-reviews__subtitle">
            Review learner submissions and verify their demonstrated skills.
          </p>
        </div>

        <div className="pending-reviews__count">
          <strong>{filteredReviews.length}</strong>
          <span>pending</span>
        </div>
      </div>

      <div className="pending-reviews__toolbar">
        <div className="pending-reviews__search">
          <Search size={18} strokeWidth={1.8} />

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search projects, learners or skills..."
            aria-label="Search pending reviews"
          />
        </div>

        <div className="pending-reviews__filters">
          <SlidersHorizontal size={17} strokeWidth={1.8} />

          <span>Priority</span>

          <select
            value={priority}
            onChange={(event) =>
              setPriority(
                event.target.value as "All" | ReviewPriority
              )
            }
            aria-label="Filter by priority"
          >
            <option value="All">All</option>
            <option value="High">High</option>
            <option value="Normal">Normal</option>
          </select>
        </div>
      </div>

      <div className="pending-reviews__list">
        {filteredReviews.map((review) => (
          <article
            key={review.id}
            className="pending-review-card"
          >
            <div className="pending-review-card__main">
              <div className="pending-review-card__top">
                <div>
                  <span className="pending-review-card__id">
                    {review.id}
                  </span>

                  <h2 className="pending-review-card__title">
                    {review.projectName}
                  </h2>
                </div>

                <span
                  className={`pending-review-card__priority pending-review-card__priority--${review.priority.toLowerCase()}`}
                >
                  {review.priority}
                </span>
              </div>

              <p className="pending-review-card__description">
                {review.description}
              </p>

              <div className="pending-review-card__metadata">
                <div className="pending-review-card__meta">
                  <UserRound
                    size={15}
                    strokeWidth={1.8}
                  />

                  <span>{review.learnerName}</span>
                </div>

                <div className="pending-review-card__meta">
                  <span className="pending-review-card__skill">
                    {review.skill}
                  </span>
                </div>

                <div className="pending-review-card__meta">
                  <Clock3
                    size={15}
                    strokeWidth={1.8}
                  />

                  <span>{review.submittedAt}</span>
                </div>
              </div>
            </div>

            <div className="pending-review-card__action">
              <button
                type="button"
                onClick={() => onReview?.(review)}
              >
                Review

                <ArrowRight
                  size={17}
                  strokeWidth={1.8}
                />
              </button>
            </div>
          </article>
        ))}

        {filteredReviews.length === 0 && (
          <div className="pending-reviews__empty">
            <div className="pending-reviews__empty-icon">
              <Search size={22} />
            </div>

            <h3>No reviews found</h3>

            <p>
              Try changing your search or priority filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewerPendingReviews;