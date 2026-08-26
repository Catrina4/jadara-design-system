import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "JADARA Design System",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Welcome: Story = {
  render: () => (
    <main
      style={{
        minHeight: "100vh",
        padding: "72px 64px",
        background:
          "linear-gradient(135deg, #ffffff 0%, #faf7fc 100%)",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Brand */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              display: "grid",
              placeItems: "center",
              borderRadius: "12px",
              background: "#9B4CC2",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            J
          </div>

          <span
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#17151A",
            }}
          >
            JADARA
          </span>
        </div>

        {/* Hero */}
        <h1
          style={{
            maxWidth: "800px",
            margin: 0,
            fontSize: "56px",
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            color: "#17151A",
          }}
        >
          JADARA Design System
        </h1>

        <p
          style={{
            maxWidth: "650px",
            marginTop: "24px",
            fontSize: "20px",
            lineHeight: 1.6,
            color: "#625D67",
          }}
        >
          A unified visual language for building
          consistent, accessible and beautiful JADARA
          experiences.
        </p>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "64px",
          }}
        >
          <FeatureCard
            title="Foundations"
            description="Colors, typography, spacing, radius and elevation."
          />

          <FeatureCard
            title="Components"
            description="Reusable UI building blocks for the entire platform."
          />

          <FeatureCard
            title="Patterns"
            description="Real interface patterns designed for JADARA."
          />
        </div>

        {/* Principles */}
        <section
          style={{
            marginTop: "80px",
            paddingTop: "40px",
            borderTop: "1px solid #E7E2EA",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              margin: 0,
              color: "#17151A",
            }}
          >
            Design principles
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "32px",
              marginTop: "32px",
            }}
          >
            <Principle
              title="Clear"
              text="Interfaces should be easy to understand."
            />

            <Principle
              title="Consistent"
              text="The same patterns should behave the same way."
            />

            <Principle
              title="Accessible"
              text="Everyone should be able to use JADARA."
            />

            <Principle
              title="Human"
              text="Technology should feel welcoming, not complicated."
            />
          </div>
        </section>
      </div>
    </main>
  ),
};

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        padding: "28px",
        border: "1px solid #E7E2EA",
        borderRadius: "16px",
        background: "#ffffff",
      }}
    >
      <h3
        style={{
          margin: 0,
          fontSize: "18px",
          color: "#17151A",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          marginTop: "10px",
          marginBottom: 0,
          color: "#625D67",
          lineHeight: 1.5,
          fontSize: "14px",
        }}
      >
        {description}
      </p>
    </div>
  );
}

function Principle({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div>
      <h3
        style={{
          margin: 0,
          fontSize: "16px",
          color: "#17151A",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          marginTop: "8px",
          color: "#625D67",
          fontSize: "14px",
          lineHeight: 1.5,
        }}
      >
        {text}
      </p>
    </div>
  );
}