import { AnimatedBackground } from "~/components/anim-bckgr";

// 1 hour cache right?
export const revalidate = 3600;

export default async function Home() {
	return (
		<div className="relative min-h-screen overflow-hidden bg-background">
			<AnimatedBackground />

			<div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
				<div className="text-center">
					<div>
						<h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
							Definitely not 🤖
							<span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
								{" "}
								Generated
							</span>
						</h1>
					</div>

					<p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
						Here is some blazing fast text.
					</p>
				</div>

				{/* <div className="mt-32 space-y-8">
					<h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
						Featured products
					</h2>
					<div className="grid grid-cols-3 gap-4">
						{products.map((product) => (
							<ProductCard
								key={product.id}
								id={product.id}
								title={product.title}
								imgSrc={product.thumbnail}
							/>
						))}
					</div>
				</div> */}
			</div>
		</div>
	);
}
