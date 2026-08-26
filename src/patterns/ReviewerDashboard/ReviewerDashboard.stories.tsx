import type { Meta, StoryObj } from "@storybook/react";

import { ReviewerDashboard } from "./ReviewerDashboard";

const meta = {
  title: "Patterns/Reviewer Dashboard",
  component: ReviewerDashboard,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ReviewerDashboard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};