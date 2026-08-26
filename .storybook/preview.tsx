import type { Preview } from "@storybook/react";
// @ts-expect-error Storybook loads the stylesheet at runtime.
import "../src/foundations/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    layout: "centered",

    backgrounds: {
      default: "light",
      values: [
        {
          name: "Light",
          value: "#ffffff",
        },
        {
          name: "Soft",
          value: "#f8f7fb",
        },
      ],
    },
  },
};

export default preview;
