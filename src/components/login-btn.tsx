"use client";

import { Button } from "./ui/button";
import { login } from "~/actions/auth";
import { useAction } from "next-safe-action/hooks";

export const LoginBtn = () => {
	const { execute, isPending } = useAction(login);

	return (
		<Button onClick={() => execute()} disabled={isPending} variant={"link"}>
			{isPending ? "Logging in..." : "Login"}
		</Button>
	);
};
