import { api } from "~/lib/api-client";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { StarIcon } from "lucide-react";
import { fakeDb } from "~/lib/fake-db";

interface Props {
	params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: Props) {
	const { id } = await params;
	const product = await api.products.get(Number(id), {
		next: {
			revalidate: 3600,
		},
	});

	void fakeDb.saveProductVisit(id);
	const visits = await fakeDb.getProductVisits(id);

	return (
		<div className="mx-auto max-w-7xl px-4 py-24">
			<Card className="overflow-hidden bg-background/50">
				<CardHeader>
					<div className="flex items-start justify-between">
						<div>
							<CardTitle className="text-2xl">{product.title}</CardTitle>
							<p className="mt-2 text-sm text-muted-foreground">
								{product.description}
							</p>
						</div>
						<div className="flex items-center gap-2">
							<Badge variant="secondary">{product.category}</Badge>
							<Badge variant="outline" className="">
								{visits} views
							</Badge>
						</div>
					</div>
				</CardHeader>
				<CardContent className="grid gap-6 md:grid-cols-2">
					<div className="relative aspect-square overflow-hidden rounded-lg">
						<Image
							src={product.thumbnail}
							alt={product.title}
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 50vw"
							priority
						/>
					</div>

					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<div className="space-y-1">
								<p className="text-sm text-muted-foreground">Price</p>
								<p className="text-2xl font-bold">${product.price}</p>
							</div>
							<div className="space-y-1">
								<p className="text-sm text-muted-foreground">Discount</p>
								<p className="text-2xl font-bold text-destructive">
									{product.discountPercentage}%
								</p>
							</div>
						</div>

						<div className="flex items-center gap-2">
							<StarIcon className="h-5 w-5 fill-primary text-primary" />
							<span className="font-bold">{product.rating}</span>
						</div>

						<div className="space-y-1">
							<p className="text-sm text-muted-foreground">Brand</p>
							<p className="font-medium">{product.brand}</p>
						</div>

						<div className="space-y-1">
							<p className="text-sm text-muted-foreground">Stock</p>
							<p className="font-medium">{product.stock} units</p>
						</div>

						<div className="grid grid-cols-3 gap-2">
							{product.images.map((image, i) => (
								<div
									key={i}
									className="relative aspect-square overflow-hidden rounded-md"
								>
									<Image
										src={image}
										alt={`${product.title} ${i + 1}`}
										fill
										className="object-cover"
										sizes="(max-width: 768px) 33vw, 16vw"
									/>
								</div>
							))}
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
