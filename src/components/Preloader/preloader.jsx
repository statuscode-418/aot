import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anime";
import "./style.css";

export const words = Array.from({ length: 2024 - 2003 + 1 }, (_, index) =>
	String(2003 + index),
);

export const Preloader = () => {
	const [index, setIndex] = useState(0);
	const [dimension, setDimension] = useState({ width: 0, height: 0 });

	useEffect(() => {
		setDimension({ width: window.innerWidth, height: window.innerHeight });
	}, []);

	useEffect(() => {
		const timeoutDuration = index === 0 ? 500 : 50; // Decreased timeout duration for faster speed
		const timeout = setTimeout(() => {
			if (index === words.length - 1) return;
			setIndex(index + 1);
		}, timeoutDuration);

		return () => clearTimeout(timeout);
	}, [index]);

	const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
		dimension.height
	} Q${dimension.width / 2} ${dimension.height + 300} 0 ${
		dimension.height
	}  L0 0`;
	const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
		dimension.height
	} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

	const curve = {
		initial: {
			d: initialPath,
			transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
		},
		exit: {
			d: targetPath,
			transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
		},
	};

	return (
		<motion.div
			variants={slideUp}
			initial="initial"
			exit="exit"
			className="introduction"
		>
			{dimension.width > 0 && (
				<>
					<motion.p variants={opacity} initial="initial" animate="enter">
						<span></span>
						{words[index]}
					</motion.p>
					<svg style={{ fill: "yellow" }}>
						{" "}
						{/* Change the fill color to yellow */}
						<motion.path
							variants={curve}
							initial="initial"
							exit="exit"
						></motion.path>
					</svg>
				</>
			)}
		</motion.div>
	);
};

export default Preloader;
