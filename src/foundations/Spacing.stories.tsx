import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Foundations/Spacing",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const spacing = [
  ["space-1", "4px"],
  ["space-2", "8px"],
  ["space-3", "12px"],
  ["space-4", "16px"],
  ["space-5", "20px"],
  ["space-6", "24px"],
  ["space-8", "32px"],
  ["space-10", "40px"],
  ["space-12", "48px"],
  ["space-16", "64px"],
];

export const Scale: Story = {
  render: () => (
    <div
      style={{
        padding: "48px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h1>Spacing</h1>

      <p
        style={{
          marginTop: "8px",
          marginBottom: "40px",
          color: "#666",
        }}
      >
        JADARA uses a consistent spacing scale based
        on multiples of 4px.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {spacing.map(([name, value]) => (
          <div
            key={name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <code
              style={{
                width: "90px",
              }}
            >
              {name}
            </code>

            <div
              style={{
                width: value,
                height: "24px",
                background: "var(--primary)",
                borderRadius: "4px",
              }}
            />

            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};