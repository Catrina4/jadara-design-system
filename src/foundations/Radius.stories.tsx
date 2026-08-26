import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Foundations/Radius",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const radius = [
  ["sm", "4px"],
  ["md", "8px"],
  ["lg", "12px"],
  ["xl", "16px"],
  ["full", "9999px"],
];

export const Scale: Story = {
  render: () => (
    <div
      style={{
        padding: "48px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h1>Border Radius</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "32px",
          marginTop: "40px",
        }}
      >
        {radius.map(([name, value]) => (
          <div key={name}>
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: value,
                background: "var(--purple-100)",
                border:
                  "1px solid var(--purple-300)",
              }}
            />

            <strong
              style={{
                display: "block",
                marginTop: "12px",
              }}
            >
              {name}
            </strong>

            <code>{value}</code>
          </div>
        ))}
      </div>
    </div>
  ),
};