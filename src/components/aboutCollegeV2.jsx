import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const aboutCollegeV2 = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView({
		triggerOnce: true,
		rootMargin: "-100px",
	});

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<motion.div
			className=" h-[80vh] bg-cover p-10 my-2"
			animate={controls}
			initial="hidden"
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 50 },
			}}
			transition={{ duration: 0.8, ease: "easeInOut" }}
		>
			<div className="h-[10%] w-full text-center text-aot-indigo flex justify-center items-center lg:text-5xl md:text-3xl text-2xl font-bold">
				<h1>About College</h1>
			</div>
			<div className="h-[5%]"></div>
			<div className="flex h-[85%]">
				<motion.div
					className="w-1/2 justify-center items-center hidden md:flex"
					ref={ref}
					animate={controls}
					initial="hidden"
					variants={{
						visible: { opacity: 1, y: 0 },
						hidden: { opacity: 0, y: 50 },
					}}
					transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
				>
					<div className="bg-[url('/assets/aot1.png')] bg-cover border-[5px] border-aot-indigo w-9/12 h-[75%] rounded-[1.8rem]"
						style={{ boxShadow: '10px 10px 15px 0px rgba(128,128,128,1)' }}></div>
				</motion.div>
				<motion.div
					className=" text-blue-900 text-bold overflow-auto lg:w-1/2 w-full p-10 h-[100%] lg:text-lg md:text-base text-sm text-justify scrollbar-hide "
					ref={ref}
					animate={controls}
					initial="hidden"
					variants={{
						visible: { opacity: 1, y: 0 },
						hidden: { opacity: 0, y: 50 },
					}}
					transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
				>
					<FaQuoteLeft size={48}/>
					<p className="text-2xl mt-10 font-bold">Academy of Technology (AOT), located amidst the beautiful surroundings
						of Adisaptagram, has been a beacon of educational excellence since its
						founding in 2003. More than just an engineering college, AOT is a
						symbol of ingenuity and dedication, weaving a lovely mix of technology
						and ethics. <br /> Founded by the visionary "Ananda Educational
						Development and Charitable Organisation" (AEDCO), AOT has evolved over
						18 years, constantly reinventing itself to embrace the boundless
						horizons of engineering and technology. Our journey is not merely
						about imparting knowledge; it's a transformative experience that
						encourages every student to think differently and explore new
						possibilities.</p>
				</motion.div>

			</div>
		</motion.div>
	);
};

export default aboutCollegeV2;
