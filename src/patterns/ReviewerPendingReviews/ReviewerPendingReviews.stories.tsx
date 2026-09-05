import type { Meta, StoryObj } from "@storybook/react";
import ReviewerPendingReviews from "./ReviewerPendingReviews";

const meta = {
  title: "Patterns/Reviewer/Pending Reviews",
  component: ReviewerPendingReviews,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ReviewerPendingReviews>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div
      style={{
        minHeight: "100vh",
        padding: "32px",
        background: "#f7f8fc",
      }}
    >
      <ReviewerPendingReviews {...args} />
    </div>
  ),
};

export const WithSearchAndFiltering: Story = {
  render: (args) => (
    <div
      style={{
        minHeight: "100vh",
        padding: "32px",
        background: "#f7f8fc",
      }}
    >
      <ReviewerPendingReviews {...args} />
    </div>
  ),
};