import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/redsgn/", // 👈 dette er vigtigt
  plugins: [react()],
});
