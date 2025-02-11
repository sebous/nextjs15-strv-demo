import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="text-center">
					<h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
						Welcome to Our Platform
					</h1>
					<p className="mt-3 text-xl text-gray-500 dark:text-gray-400">
						The fastest way to build and deploy your next project
					</p>
					<div className="mt-8">
						<Link
							href="/dashboard"
							className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
						>
							Go to Dashboard
						</Link>
					</div>
				</div>

				<div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
						>
							<h3 className="text-lg font-medium text-gray-900 dark:text-white">
								{feature.title}
							</h3>
							<p className="mt-2 text-base text-gray-500 dark:text-gray-400">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

const features = [
	{
		title: "Feature 1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		title: "Feature 2",
		description: "Sed do eiusmod tempor incididunt ut labore et dolore magna.",
	},
	{
		title: "Feature 3",
		description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
	},
];
