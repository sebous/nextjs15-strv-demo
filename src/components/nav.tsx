import { Link } from "next-view-transitions";

export const Nav = async () => {
	return (
		<nav className="fixed left-0 top-0 z-50 flex w-full gap-4 px-4 py-2">
			<Link href="/">Home</Link>
			<Link href="/products">Products</Link>
			{/* <div className="ml-auto">
				{session ? <Profile session={session} /> : <LoginBtn />}
			</div> */}
		</nav>
	);
};
