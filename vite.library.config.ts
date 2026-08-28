import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),

    dts({
      entryRoot: "src",
      include: ["src/index.ts"],
      outDir: "dist",
      insertTypesEntry: true,
      rollupTypes: false,
      copyDtsFiles: false,
      tsconfigPath: "./tsconfig.library.json",
    }),
  ],

  build: {
    lib: {
      entry: path.resolve(dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },

    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "lucide-react",
      ],

      output: {
        assetFileNames: "styles.css",
      },
    },

    sourcemap: true,
  },
});
