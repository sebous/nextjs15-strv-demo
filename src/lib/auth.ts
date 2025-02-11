import { getIronSession, SessionOptions } from "iron-session";
import { cookies } from "next/headers";

const COOKIE_OPTS: SessionOptions = {
	cookieName: "xd",
	password: process.env.SESSION_SECRET!,
	ttl: 60 * 60 * 6, // 6 hours
	cookieOptions: {
		secure: process.env.NODE_ENV === "production",
	},
};

export type SessionUser = {
	username: string;
	avatarUrl: string;
};

async function getInternalSession() {
	return await getIronSession<SessionUser>(await cookies(), COOKIE_OPTS);
}

async function getSession() {
	const session = await getInternalSession();

	await new Promise((resolve) => setTimeout(resolve, 500));

	if (!session.username) return null;

	return {
		username: session.username,
		avatarUrl: session.avatarUrl,
	} satisfies SessionUser;
}

async function login() {
	const session = await getInternalSession();

	session.username = "User 1";
	session.avatarUrl =
		"https://en.meming.world/images/en/thumb/2/2c/Surprised_Pikachu_HD.jpg/300px-Surprised_Pikachu_HD.jpg";

	await session.save();
}

async function logout() {
	const session = await getInternalSession();
	session.destroy();
}

export const auth = {
	login,
	getSession,
	logout,
};
