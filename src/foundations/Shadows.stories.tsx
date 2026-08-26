import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Foundations/Shadows",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const shadows = [
  ["sm", "var(--shadow-sm)"],
  ["md", "var(--shadow-md)"],
  ["lg", "var(--shadow-lg)"],
];

export const Scale: Story = {
  render: () => (
    <div
      style={{
        padding: "48px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h1>Shadows</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "32px",
          marginTop: "40px",
        }}
      >
        {shadows.map(([name, shadow]) => (
          <div
            key={name}
            style={{
              width: "180px",
              height: "120px",
              display: "grid",
              placeItems: "center",
              borderRadius: "12px",
              background: "white",
              boxShadow: shadow,
            }}
          >
            <div>
              <strong>{name}</strong>
              <div
                style={{
                  marginTop: "4px",
                  fontSize: "12px",
                  color: "#777",
                }}
              >
                {shadow}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};