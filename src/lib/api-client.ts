export type Product = {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: string[];
};

type PaginatedResponse<T> = {
	products: T[];
	total: number;
	skip: number;
	limit: number;
};

const BASE_URL = "https://dummyjson.com";

export const api = {
	products: {
		list: async (params?: {
			limit?: number;
			skip?: number;
			next?: NextFetchRequestConfig;
		}) => {
			const searchParams = new URLSearchParams({ delay: "1000" });
			if (params?.limit) searchParams.set("limit", params.limit.toString());
			if (params?.skip) searchParams.set("skip", params.skip.toString());

			const response = await fetch(`${BASE_URL}/products?${searchParams}`, {
				next: params?.next,
			});
			return (await response.json()) as PaginatedResponse<
				Pick<Product, "id" | "title" | "thumbnail">
			>;
		},
		get: async (id: number, params?: { next?: NextFetchRequestConfig }) => {
			const response = await fetch(`${BASE_URL}/products/${id}?delay=500`, {
				next: params?.next,
			});
			return (await response.json()) as Product;
		},
		search: async (query: string) => {
			const response = await fetch(`${BASE_URL}/products/search?q=${query}`);
			return (await response.json()) as PaginatedResponse<Product>;
		},
		categories: async () => {
			const response = await fetch(`${BASE_URL}/products/categories`);
			return (await response.json()) as string[];
		},
	},
};
