import React, { useState } from "react";
import { motion } from "framer-motion";

const MenuItem = ({ item }) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleHover = () => {
		setIsHovered(!isHovered);
	};

	return (
		<li>
			<div
				onMouseEnter={handleHover}
				onMouseLeave={handleHover}
				className="cursor-pointer font-bold  uppercase hover:bg-[#0047ab] hover:text-white focus:outline-none px-4 py-2 relative"
			>
				<a href={item.link} className="block w-full h-full">
					{item.label}
				</a>
				{item.submenu && isHovered && (
					<motion.div
						initial={{ opacity: 0, x: 10, y: -10 }}
						animate={{ opacity: 1, x: 0, y: 0 }}
						exit={{ opacity: 0, x: 10, y: -10 }}
						transition={{ duration: 0.2 }}
						className="absolute left-full border-2 border-black top-0 mt-1 w-[200px] bg-[#ffd700]  text-[#000080] shadow-md rounded-md p-2 z-10"
					>
						{item.submenu.map((subItem, index) => (
							<div key={index}>
								<MenuItem item={subItem} />
								<hr style={{ borderColor: "black" }} />{" "}
								{/* Change the border color to black */}
							</div>
						))}
					</motion.div>
				)}
				{/* Render subSubmenu for Resources and Admissions */}
				{(item.label === "Resources" ||
					item.label === "Admissions" ||
					item.label === "Department") &&
					isHovered && (
						<motion.div
							initial={{ opacity: 0, x: 10, y: -10 }}
							animate={{ opacity: 1, x: 0, y: 0 }}
							exit={{ opacity: 0, x: 10, y: -10 }}
							transition={{ duration: 0.2 }}
							className="absolute left-full top-0 mt-1 w-[200px] bg-[#ffd700] shadow-md rounded-md p-2 z-10 border border-black"
							style={{ border: "2px solid #000000" }}
						>
							{item.subSubmenu.map((subSubItem, index) => (
								<div key={index} className="py-1 border-b border-black">
									<div className="cursor-pointer text-[#000080] font-bold uppercase hover:bg-[#0047ab] hover:text-white focus:outline-none px-4 py-2 relative">
										<a
											href={subSubItem.link}
											className="text-[#000080] hover:text-white transition duration-300 ease-in-out"
										>
											{subSubItem.label}
										</a>
									</div>
								</div>
							))}
						</motion.div>
					)}
			</div>
		</li>
	);
};

export default MenuItem;
