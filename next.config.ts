import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// Only enabled during `next dev`, so it doesn't affect production builds / CI.
if (process.env.NODE_ENV !== "production") {
  import("@opennextjs/cloudflare").then(({ initOpenNextCloudflareForDev }) => {
    initOpenNextCloudflareForDev();
  });
}

export default nextConfig;
