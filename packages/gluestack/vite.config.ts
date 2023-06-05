import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      name: "gluestack-ds-lib",
      entry: {
        index: resolve(__dirname, "index.ts"),
      },
    },
    rollupOptions: {
      external: [
        "react",
        "react/jsx-runtime",
        "react-native",
        "@legendapp/tools",
      ],
    },
  },
});
