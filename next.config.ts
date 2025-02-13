import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		reactCompiler: true,
		serverComponentsHmrCache: true,

		// staleTimes
		ppr: "incremental",
	},

	logging: {
		fetches: {
			fullUrl: false,
		},
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
