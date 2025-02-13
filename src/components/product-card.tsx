import { ChevronRight } from "lucide-react";
import { Link } from "next-view-transitions";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import Image from "next/image";
import { api } from "~/lib/api-client";

export async function ProductCard({
	id,
	title,
	imgSrc,
}: {
	id: number;
	title: string;
	imgSrc: string;
}) {
	const { price } = await api.products.get(id, {
		next: {
			revalidate: 3600,
		},
	});
	// add price
	return (
		<Card className="bg-background/50">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent className="group flex flex-col gap-4">
				<div className="overflow-hidden rounded-md">
					<Image
						src={imgSrc}
						alt={title}
						width={150}
						height={150}
						className="transition-all duration-200 group-hover:scale-110"
					/>
				</div>
				<div className="flex items-center justify-between">
					<span>Price: {price}</span>
					<Link href={`/products/${id}`}>
						<Button size={"icon"}>
							<ChevronRight />
						</Button>
					</Link>
				</div>
			</CardContent>
		</Card>
	);
}
