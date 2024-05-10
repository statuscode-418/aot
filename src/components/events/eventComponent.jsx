import React, { useRef, useEffect } from "react";
import { EventCarousel } from "./eventCourasel";
import { events } from "../../constants/event";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export const EventComponent = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView({
		triggerOnce: false,
		rootMargin: "-100px",
	});

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		} else {
			controls.start("hidden");
		}
	}, [controls, inView]);

	return (
		<motion.div
			className="w-full h-[50vh] bg-[url('/assets/aot_bg.png')] bg-cover py-4 my-2"
			ref={ref}
			animate={controls}
			initial="hidden"
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 50 },
			}}
			transition={{ duration: 0.8, ease: "easeInOut" }}
		>
			<div className="w-full flex justify-center items-center h-[10%] lg:h-[20%]">
				<h1 className="text-aot-indigo font-bold text-2xl md:text-3xl lg:text-5xl">
					Events
				</h1>
			</div>
			<div className="w-full h-[80%] lg:h-[60%]">
				<EventCarousel events={events}></EventCarousel>
			</div>
			<div className="h-[10%] items-center justify-center flex lg:h-[20%]">
				<button className="bg-aot-indigo text-white p-2 rounded-md text-sm md:text-base">
					View All
				</button>
			</div>
		</motion.div>
	);
};
