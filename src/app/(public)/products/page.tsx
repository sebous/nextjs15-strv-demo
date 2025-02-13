import { api } from "~/lib/api-client";
import { ProductCard } from "~/components/product-card";
import { Link } from "next-view-transitions";
import { Button } from "~/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface Props {
	searchParams: Promise<{
		page?: string;
	}>;
}

export default async function ProductsPage({ searchParams }: Props) {
	const { page = 1 } = await searchParams;

	const products = await api.products.list({
		skip: (Number(page) - 1) * 18,
		limit: 18,
		next: {
			revalidate: 3600,
			tags: ["products"],
		},
	});

	return (
		<div className="py-6">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-8 pb-12">
				<h1 className="text-2xl font-semibold">Products</h1>
				<div className="flex items-center justify-end gap-2">
					<Button variant="outline" size={"icon"} disabled={Number(page) <= 1}>
						<Link
							href={`/products?page=${Number(page) - 1}`}
							aria-disabled={Number(page) <= 1}
						>
							<ChevronLeft />
						</Link>
					</Button>

					<Button variant="outline" size={"icon"}>
						<Link href={`/products?page=${Number(page) + 1}`}>
							<ChevronRight />
						</Link>
					</Button>
				</div>
			</div>
			<div className="mx-auto max-w-7xl">
				{/* <Suspense fallback={<div>Loading...</div>}>
					<ProductList page={Number(page)} />
				</Suspense> */}
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
					{products.products.map((product) => (
						<ProductCard
							key={product.id}
							id={product.id}
							title={product.title}
							imgSrc={product.thumbnail}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

// async function ProductList({ page }: { page: number }) {
// 	const products = await api.products.list({
// 		skip: (page - 1) * 18,
// 		limit: 18,
// 		next: {
// 			revalidate: 3600,
// 			tags: ["products"],
// 		},
// 	});

// 	return (
// 		<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
// 			{products.products.map((product) => (
// 				<ProductCard
// 					key={product.id}
// 					id={product.id}
// 					title={product.title}
// 					imgSrc={product.thumbnail}
// 				/>
// 			))}
// 		</div>
// 	);
// }
