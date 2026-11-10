import type { NextConfig } from "next";
import { legacyRoutes } from "./src/config/legacy-routes";
const nextConfig: NextConfig = {
  webpack(config, { dev }) {
    // Avoid repeated ETIMEDOUT reads from the local persistent development cache.
    if (dev) config.cache = { type: "memory" };
    return config;
  },
  async redirects() {
    return Object.entries(legacyRoutes).map(([source, destination]) => ({ source, destination, permanent: false }));
  },
};
export default nextConfig;
