import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
//import { tamaguiPlugin, tamaguiExtractPlugin } from "@tamagui/vite-plugin";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    // tamaguiPlugin({
    //   config: "./src/tamagui.config.ts",
    //   components: ["tamagui"],
    // }),
    // optional, adds the optimizing compiler:
    //tamaguiExtractPlugin(tamaguiConfig),
    dts(),
  ],
  build: {
    lib: {
      name: "tamagui-ds-lib",
      entry: {
        index: resolve(__dirname, "src/index.ts"),
      },
    },
    rollupOptions: {
      external: ["react", "react-native", "react-native-safe-area-context"],
    },
  },
});
