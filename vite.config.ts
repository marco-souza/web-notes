import path from "node:path";
import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";
import solidPlugin from "vite-plugin-solid";

const match = ["https://*/*", "http://*/*"];

export default defineConfig({
  assetsInclude: ["./src/static/**"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
      "#": path.resolve(__dirname, "/"),
    },
  },
  plugins: [
    solidPlugin(),
    monkey({
      entry: "src/index.tsx",
      userscript: {
        icon: "https://vitejs.dev/logo.svg",
        namespace: "npm/vite-plugin-monkey",
        match,
      },
    }),
  ],
});
