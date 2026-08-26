import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3
          style={{
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          Recent Projects
        </h3>

        <p
          style={{
            marginTop: "8px",
            color: "var(--text-secondary)",
            fontSize: "14px",
          }}
        >
          Manage your latest JADARA projects.
        </p>
      </div>
    ),
  },
};