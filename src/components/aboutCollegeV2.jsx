import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

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
			className="bg-[url(/assets/aot2.jpg)] h-[80vh] bg-cover p-10 my-2"
			animate={controls}
			initial="hidden"
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 50 },
			}}
			transition={{ duration: 0.8, ease: "easeInOut" }}
		>
			<div className="h-[10%] w-full text-center text-white flex justify-center items-center lg:text-4xl md:text-3xl text-2xl font-bold">
				<h1>About College</h1>
			</div>
			<div className="h-[5%]"></div>
			<div className="flex h-[85%]">
				<motion.div
					className="backdrop-blur-md bg-black bg-opacity-30 text-white overflow-auto lg:w-1/2 w-full p-10 rounded-xl h-[100%] lg:text-lg md:text-base text-sm text-justify scrollbar-hide"
					ref={ref}
					animate={controls}
					initial="hidden"
					variants={{
						visible: { opacity: 1, y: 0 },
						hidden: { opacity: 0, y: 50 },
					}}
					transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
				>
					Academy of Technology (AOT), located amidst the beautiful surroundings
					of Adisaptagram, has been a beacon of educational excellence since its
					founding in 2003. More than just an engineering college, AOT is a
					symbol of ingenuity and dedication, weaving a lovely mix of technology
					and ethics. <br /> <br /> Founded by the visionary "Ananda Educational
					Development and Charitable Organisation" (AEDCO), AOT has evolved over
					18 years, constantly reinventing itself to embrace the boundless
					horizons of engineering and technology. Our journey is not merely
					about imparting knowledge; it's a transformative experience that
					encourages every student to think differently and explore new
					possibilities. <br /> <br /> Situated on the side of G.T. Road in
					Adisaptagram, Hooghly, our campus is not just a physical space but a
					nurturing environment where academic integrity meets the vibrant
					spirit of innovation. AOT is not just a college; it's a preferred
					career destination for meritorious students, known for its academic
					standards and compelling campus placements.
				</motion.div>
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
					<div className="bg-[url('/assets/aot1.png')] bg-cover border-[5px] border-white w-9/12 h-[75%] rounded-[1.8rem]"></div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default aboutCollegeV2;
