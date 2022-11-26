import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

const __dirname = path.resolve();
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src/") }],
  },
  plugins: [react()],
});
