import React, { useEffect, useState } from "react";
import AboutCollegeV2 from "./aboutCollegeV2";
import BackToTop from "./backToTop";
import Companies from "./companies";
import Counter from "./counter";
import Navbar from "./Navbar/navbar";
import { EventComponent } from "./events/eventComponent";
import Footer from "./footer";
import Header from "./header";
import Movement from "./movement";
import News_bul from "./News_bul";
import Video from "./video";
import { Preloader } from "./Preloader/preloader.jsx";
import { AnimatePresence } from "framer-motion";
import Chatbot from './chatbot/bot.jsx'

const main = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			try {
				const LocomotiveScroll = (await import("locomotive-scroll")).default;
				const locomotiveScroll = new LocomotiveScroll();

				setTimeout(() => {
					setIsLoading(false);
					document.body.style.cursor = "default";
					window.scrollTo(0, 0);
				}, 1500);
			} catch (error) {
				console.error("Failed to load locomotive-scroll:", error);
				setIsLoading(false);
			}
		})();
	}, []);

	return (
		<>
			<AnimatePresence mode="wait">
				{isLoading && <Preloader />}
			</AnimatePresence>
			<Header />
			<Navbar />
			<Video />
			<Movement />
			<EventComponent />
			<AboutCollegeV2 />
			<News_bul />
			<Counter />
			<Companies />
      <Chatbot />
			<Footer />
			<BackToTop />
		</>
	);
};

export default main;
