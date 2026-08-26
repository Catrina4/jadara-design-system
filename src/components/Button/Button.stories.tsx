import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "ghost",
        "danger",
      ],
    },

    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },

    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary button",
    variant: "primary",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary button",
    variant: "secondary",
    size: "medium",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost button",
    variant: "ghost",
    size: "medium",
  },
};

export const Danger: Story = {
  args: {
    children: "Delete project",
    variant: "danger",
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "large",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};