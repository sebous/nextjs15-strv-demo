import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	experimental: {
		reactCompiler: true,
		serverComponentsHmrCache: true,
	},

	// logging: {
	// 	fetches: {
	// 		fullUrl: true,
	// 	},
	// },

	images: {
		remotePatterns: [
			{
				hostname: "cdn.dummyjson.com",
			},
		],
	},
};

export default nextConfig;
