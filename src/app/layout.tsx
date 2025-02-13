import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "~/components/nav";
import { ViewTransitions } from "next-view-transitions";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Nextjs strv demo",
	description: "Nextjs strv demo",
};

export const experimental_ppr = true;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ViewTransitions>
			<html lang="en" className="dark">
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					<Nav />
					{children}
				</body>
			</html>
		</ViewTransitions>
	);
}
