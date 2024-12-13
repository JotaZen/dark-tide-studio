/** @type {import("next")}.NextConfig */
import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

const nextIntlPlugin = createNextIntlPlugin();
const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  }
};

export default nextIntlPlugin(nextConfig);
