import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Thay "meowmeow2299" bằng tên repo GitHub của bà
export default defineConfig({
  plugins: [react()],
  base: "/meowmeow2299/", 
});

