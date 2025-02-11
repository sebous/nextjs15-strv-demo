"use client";

import { Link } from "next-view-transitions";

export const Nav = () => {
	return (
		<nav>
			<Link href="/">Home</Link>
			<Link href="/dashboard">Dashboard</Link>
		</nav>
	);
};
