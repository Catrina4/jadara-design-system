import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,

  parameters: {
    layout: "centered",
  },

  argTypes: {
    variant: {
      control: "select",
      options: [
        "purple",
        "success",
        "warning",
        "error",
        "info",
        "neutral",
      ],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Approved: Story = {
  args: {
    children: "Approved",
    variant: "success",
  },
};

export const UnderReview: Story = {
  args: {
    children: "Under Review",
    variant: "warning",
  },
};

export const Rejected: Story = {
  args: {
    children: "Rejected",
    variant: "error",
  },
};

export const Advanced: Story = {
  args: {
    children: "Advanced",
    variant: "purple",
  },
};