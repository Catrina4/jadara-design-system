import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Foundations/Typography",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const samples = [
  {
    name: "Display",
    variable: "--font-size-4xl",
    size: "48px",
    weight: 700,
  },
  {
    name: "Heading 1",
    variable: "--font-size-3xl",
    size: "36px",
    weight: 700,
  },
  {
    name: "Heading 2",
    variable: "--font-size-2xl",
    size: "30px",
    weight: 700,
  },
  {
    name: "Heading 3",
    variable: "--font-size-xl",
    size: "24px",
    weight: 600,
  },
  {
    name: "Heading 4",
    variable: "--font-size-lg",
    size: "20px",
    weight: 600,
  },
  {
    name: "Body",
    variable: "--font-size-md",
    size: "16px",
    weight: 400,
  },
  {
    name: "Small",
    variable: "--font-size-sm",
    size: "14px",
    weight: 400,
  },
  {
    name: "Caption",
    variable: "--font-size-xs",
    size: "12px",
    weight: 400,
  },
];

export const Scale: Story = {
  render: () => (
    <div
      style={{
        padding: "48px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: "40px" }}>
        Typography
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        {samples.map((sample) => (
          <div key={sample.name}>
            <div
              style={{
                marginBottom: "8px",
                color: "#777",
                fontSize: "12px",
              }}
            >
              {sample.name} · {sample.variable}
            </div>

            <div
              style={{
                fontSize: sample.size,
                fontWeight: sample.weight,
                color: "#17151A",
              }}
            >
              The quick brown fox jumps over the lazy dog.
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};