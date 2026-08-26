import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Foundations/Colors",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const colors = [
  {
    name: "Purple 50",
    variable: "--purple-50",
    value: "#F9F3FC",
  },
  {
    name: "Purple 100",
    variable: "--purple-100",
    value: "#F1E3F7",
  },
  {
    name: "Purple 200",
    variable: "--purple-200",
    value: "#E2C9EE",
  },
  {
    name: "Purple 300",
    variable: "--purple-300",
    value: "#CDA3E0",
  },
  {
    name: "Purple 400",
    variable: "--purple-400",
    value: "#B77ACF",
  },
  {
    name: "Purple 500",
    variable: "--purple-500",
    value: "#9B4CC2",
  },
  {
    name: "Purple 600",
    variable: "--purple-600",
    value: "#8238A8",
  },
  {
    name: "Purple 700",
    variable: "--purple-700",
    value: "#6B2C8B",
  },
];

export const PurpleScale: Story = {
  render: () => (
    <div
      style={{
        padding: "40px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          marginBottom: "8px",
        }}
      >
        Purple
      </h1>

      <p
        style={{
          color: "#666",
          marginBottom: "32px",
        }}
      >
        JADARA's primary brand color scale.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(150px, 1fr))",
          gap: "16px",
        }}
      >
        {colors.map((color) => (
          <div key={color.variable}>
            <div
              style={{
                height: "100px",
                borderRadius: "12px",
                background: color.value,
                border: "1px solid #eee",
              }}
            />

            <strong
              style={{
                display: "block",
                marginTop: "10px",
                fontSize: "14px",
              }}
            >
              {color.name}
            </strong>

            <code
              style={{
                display: "block",
                marginTop: "4px",
                fontSize: "12px",
                color: "#666",
              }}
            >
              {color.variable}
            </code>

            <span
              style={{
                display: "block",
                marginTop: "4px",
                fontSize: "12px",
                color: "#888",
              }}
            >
              {color.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
};