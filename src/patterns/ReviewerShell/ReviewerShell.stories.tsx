import type { Meta, StoryObj } from "@storybook/react";
import ReviewerShell from "./ReviewerShell";

const meta = {
  title: "Patterns/Reviewer/Reviewer Shell",
  component: ReviewerShell,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ReviewerShell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dashboard: Story = {
  args: {
    children: null,
    activePage: "dashboard",
    reviewerName: "Catrina Reviewer",
    reviewerRole: "Expert Reviewer",
    reviewerInitials: "CR",
    pendingCount: 12,
    unreadMessages: 3,
  },

  render: (args) => (
    <ReviewerShell {...args}>
      <div
        style={{
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "inherit",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ margin: 0 }}>
            Reviewer Dashboard
          </h1>

          <p
            style={{
              marginTop: "8px",
              color: "#777c87",
            }}
          >
            Reviewer shell preview
          </p>
        </div>
      </div>
    </ReviewerShell>
  ),
};

export const PendingReviews: Story = {
  args: {
    children: null,
    activePage: "pending",
    reviewerName: "Catrina Reviewer",
    reviewerRole: "Expert Reviewer",
    reviewerInitials: "CR",
    pendingCount: 12,
    unreadMessages: 3,
  },

  render: (args) => (
    <ReviewerShell {...args}>
      <div
        style={{
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ margin: 0 }}>
          Pending Reviews
        </h1>
      </div>
    </ReviewerShell>
  ),
};