import { defineConfig } from "vite";

export default defineConfig({
  // 代理
  proxy: {
    "/api": {
      target: "https://bier.exce.site",
      changeOrigin: true,
      // rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },

})
