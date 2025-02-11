"use server";
import { revalidatePath } from "next/cache";
import { actionClient } from "~/lib/action-client";
import { auth } from "~/lib/auth";

export const login = actionClient.action(async () => {
	await auth.login();
	revalidatePath("/");
});

export const logout = actionClient.action(async () => {
	await auth.logout();
	revalidatePath("/");
});
