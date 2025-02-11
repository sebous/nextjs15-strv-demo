"use client";
import { motion } from "framer-motion";

export const AnimatedBackground = () => (
	<motion.svg
		className="absolute left-1/2 top-1/4 z-0 h-[80vh] w-[80vh] -translate-x-1/2"
		viewBox="0 0 100 100"
		xmlns="http://www.w3.org/2000/svg"
	>
		<defs>
			<filter id="glow">
				<feGaussianBlur stdDeviation="2" result="coloredBlur" />
				<feMerge>
					<feMergeNode in="coloredBlur" />
					<feMergeNode in="SourceGraphic" />
				</feMerge>
			</filter>
		</defs>

		<motion.circle
			cx="50"
			cy="50"
			r="20"
			className="fill-primary/15"
			filter="url(#glow)"
			initial={{ scale: 0.5, opacity: 0.3 }}
			animate={{
				scale: [0.5, 2, 0.5],
				opacity: [0.3, 0.1, 0.3],
			}}
			transition={{
				duration: 6,
				repeat: Infinity,
				ease: "easeInOut",
			}}
		/>

		<motion.circle
			cx="50"
			cy="50"
			r="15"
			className="fill-primary/20"
			filter="url(#glow)"
			initial={{ scale: 0.5, opacity: 0.3 }}
			animate={{
				scale: [0.5, 1.5, 0.5],
				opacity: [0.3, 0.2, 0.3],
			}}
			transition={{
				duration: 4.5,
				repeat: Infinity,
				ease: "easeInOut",
				delay: 0.5,
			}}
		/>

		<motion.circle
			cx="50"
			cy="50"
			r="10"
			className="fill-primary/25"
			filter="url(#glow)"
			initial={{ scale: 0.5, opacity: 0.3 }}
			animate={{
				scale: [0.5, 1, 0.5],
				opacity: [0.3, 0.4, 0.3],
			}}
			transition={{
				duration: 3,
				repeat: Infinity,
				ease: "easeInOut",
				delay: 1,
			}}
		/>
	</motion.svg>
);
