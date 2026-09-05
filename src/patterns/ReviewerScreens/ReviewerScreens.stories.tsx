import type { Meta, StoryObj } from "@storybook/react";

import ReviewerScreens from "./ReviewerScreens";

const meta = {
  title: "Screens/Reviewer",
  component: ReviewerScreens,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ReviewerScreens>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dashboard: Story = {
  args: {
    initialScreen: "dashboard",
  },
};

export const PendingReviews: Story = {
  args: {
    initialScreen: "pending",
  },
};

export const ReviewDetail: Story = {
  args: {
    initialScreen: "review-detail",
  },
};

export const ReviewedProjects: Story = {
  args: {
    initialScreen: "reviewed",
  },
};

export const MyStatistics: Story = {
  args: {
    initialScreen: "statistics",
  },
};

export const Messages: Story = {
  args: {
    initialScreen: "messages",
  },
};

export const Calendar: Story = {
  args: {
    initialScreen: "calendar",
  },
};

export const Profile: Story = {
  args: {
    initialScreen: "profile",
  },
};

export const Settings: Story = {
  args: {
    initialScreen: "settings",
  },
};