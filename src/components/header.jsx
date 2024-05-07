import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaBullhorn } from "react-icons/fa";
import "../../public/styles/nav.css";

const Header = () => {
	const [displayAnnouncement, setDisplayAnnouncement] = useState(false);
	const announcementRef = useRef(null);

	const toggleAnnouncement = () => {
		setDisplayAnnouncement(!displayAnnouncement);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				announcementRef.current &&
				!announcementRef.current.contains(event.target)
			) {
				setDisplayAnnouncement(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<header className="mt-10 bg-white  z-10  top-0">
			<div className="bg-yellow-500 h-2 w-full"></div>
			<div className="container mx-auto flex justify-between items-center py-4">
				<a href="/" className="flex items-center">
					<img
						src="https://res.cloudinary.com/dtwrlsxun/image/upload/v1715102918/aot_assets/ul2qfwpxmakc92vbhtl4.jpg"
						alt="Academy of Technology"
						className="h-15 mr-2"
					/>
				</a>
				<div className="flex-grow flex flex-col items-center">
					<h1 className="text-3xl font-bold text-center">
						ACADEMY OF TECHNOLOGY
					</h1>
					<p className="text-sm mt-1">...translate your vision into reality</p>
				</div>
				<div className="relative">
					<FaBullhorn
						className="text-[#000080]"
						onClick={toggleAnnouncement}
						style={{ fontSize: "3rem" }}
					/>
					{displayAnnouncement && (
						<motion.div
							ref={announcementRef}
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.2 }}
							className="absolute top-full right-4 mt-4 pb-[30px] w-[400px] border border-[#232C69] rounded-[20px] bg-[#232C69] z-[999]"
						>
							<div className="heading text-white rounded-tl-[20px] rounded-tr-[20px] h-[35px] items-center justify-center">
								<h1 className="text-center p-[5px] font-medium">
									Announcements
								</h1>
							</div>
							<div className="body bg-white pb-[30px] pt-[10px] flex flex-col items-center justify-center gap-2">
								<ul>
									<li className="text-center p-2 text-[#232C69]">
										<span className="custom-underline">
											DKM is a good boy but KB is not
										</span>
									</li>
									<li className="text-center p-2 text-[#232C69]">
										<span className="custom-underline">
											DKM is a good boy but KB is not
										</span>
									</li>
									<li className="text-center p-2 text-[#232C69]">
										<span className="custom-underline">
											DKM is a good boy but KB is not
										</span>
									</li>
									<li className="text-center p-2 text-[#232C69]">
										<span className="custom-underline">
											DKM is a good boy but KB is not
										</span>
									</li>
								</ul>
								<button className="rounded-[15px] bg-[#232C69] p-[10px] text-white">
									see more...
								</button>
							</div>
						</motion.div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
