import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],

//   server: {
//     host: "localhost",
//     port: 3000,
//   },
// });
