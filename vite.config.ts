import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteCompression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteCompression({
      filter: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i, // 需要压缩的文件
      threshold: 1024, // 文件容量大于这个值进行压缩
      algorithm: "gzip", // 压缩方式
      ext: "gz", // 后缀名
      deleteOriginFile: false, // 压缩后是否删除压缩源文件
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5020,
    hmr: true,
    open: false,
  },
});
