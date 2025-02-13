import { Link } from "next-view-transitions";
import { auth } from "~/lib/auth";
import { Profile } from "./profile";
import { LoginBtn } from "./login-btn";
import { Suspense } from "react";

export const Nav = async () => {
	return (
		<nav className="fixed left-0 top-0 z-50 flex w-full gap-4 bg-background/75 px-4 py-2">
			<Link href="/">Home</Link>
			<Link href="/products">Products</Link>
			<div className="ml-auto">
				<Suspense>
					<AuthNav />
				</Suspense>
			</div>
		</nav>
	);
};

const AuthNav = async () => {
	const session = await auth.getSession();

	return session ? <Profile session={session} /> : <LoginBtn />;
};
