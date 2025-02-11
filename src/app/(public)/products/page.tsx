import { apiClient } from "~/lib/api-client";

interface Props {
	searchParams: Promise<{
		page?: number;
	}>;
}

export default async function Dashboard({ searchParams }: Props) {
	const { page = 1 } = await searchParams;
	const products = await apiClient.products.list({
		limit: 10,
		skip: (page - 1) * 10,
		next: {
			revalidate: 60,
		},
	});

	return (
		<div className="min-h-screen bg-gray-100 dark:bg-gray-900">
			<div className="py-6">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
						Dashboard
					</h1>
				</div>
				<div>
					<h2>Products</h2>
					<ul>
						{products.products.map((product) => (
							<ProductCard
								key={product.id}
								id={product.id}
								title={product.title}
							/>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

async function ProductCard({ id, title }: { id: number; title: string }) {
	const productDetails = await apiClient.products.get(id, {
		next: { revalidate: 60 },
	});
	return (
		<li>
			{title} {productDetails.price}
		</li>
	);
}
