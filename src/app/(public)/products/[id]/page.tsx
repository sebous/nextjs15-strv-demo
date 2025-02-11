import { apiClient } from "~/lib/api-client";

interface Props {
	params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: Props) {
	const { id } = await params;
	const product = await apiClient.products.get(Number(id));

	return <div>{product.title}</div>;
}
