import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	experimental: {
		reactCompiler: true,
		serverComponentsHmrCache: true,
	},

	logging: {
		fetches: {
			fullUrl: true,
		},
	},
};

export default nextConfig;
