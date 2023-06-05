import { defineConfig } from "vite";

export default defineConfig({
  // 代理
  proxy: {
    "/api": {
      target: "https://mibook.codeslive.top",
      changeOrigin: true,
      // rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },

})
