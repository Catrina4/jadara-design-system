import React from "react";
import ReviewerShell from "../patterns/ReviewerShell/ReviewerShell";
import ReviewerPendingReviews from "../patterns/ReviewerPendingReviews/ReviewerPendingReviews";

const ReviewerPendingReviewsPage: React.FC = () => {
  return (
    <ReviewerShell
      activePage="pending"
      onNavigate={(page) => {
        console.log("Navigate to:", page);
      }}
      onLogout={() => {
        console.log("Logout");
      }}
    >
      <ReviewerPendingReviews
        onReview={(review) => {
          console.log("Review selected:", review);
        }}
      />
    </ReviewerShell>
  );
};

export default ReviewerPendingReviewsPage;