import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), dts()],
  build: {
    lib: {
      name: "tamagui-ds-lib",
      entry: {
        index: resolve(__dirname, "src/index.ts"),
      },
    },
    rollupOptions: {
      external: ["react", "react-native", /react-native-.*/i, "react-dom"],
    },
  },
});
