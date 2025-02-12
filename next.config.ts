import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		reactCompiler: true,
		serverComponentsHmrCache: true,
	},

	images: {
		remotePatterns: [
			{
				hostname: "cdn.dummyjson.com",
			},
		],
	},
};

export default nextConfig;
