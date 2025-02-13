import { unstable_cache } from "next/cache";

const visits = new Map<string, number>();

async function saveProductVisit(id: string) {
	await new Promise((resolve) => setTimeout(resolve, 500));
	visits.set(id, (visits.get(id) ?? 0) + 1);
}

const getProductVisits = unstable_cache(
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async (id: string) => {
		await new Promise((resolve) => setTimeout(resolve, 500));
		return Math.floor(Math.random() * 1000);
	},
	["product-visits"],
	{ revalidate: 60, tags: ["product-visits"] },
);

export const fakeDb = {
	saveProductVisit,
	getProductVisits,
};
