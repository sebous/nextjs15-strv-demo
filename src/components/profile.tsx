"use client";

import { SessionUser } from "~/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { logout } from "~/actions/auth";

export const Profile = ({ session }: { session: SessionUser }) => {
	return (
		<div className="flex items-center gap-2">
			<Avatar>
				<AvatarImage src={session.avatarUrl} onDoubleClick={() => logout()} />
				<AvatarFallback>{session.username.slice(0, 2)}</AvatarFallback>
			</Avatar>
			<span>{session.username}</span>
		</div>
	);
};
