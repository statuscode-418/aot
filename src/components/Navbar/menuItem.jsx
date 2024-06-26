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
				className="cursor-pointer font-bold  uppercase hover:bg-[#ffcc00] hover:border-2 hover:border-[#ffcc00] hover:text-[#232c69] focus:outline-none px-4 py-1 relative"
			>
				<a href={item.link} className="block w-full h-full text-base">
					{item.label}
				</a>
				{item.submenu && isHovered && (
					<motion.div
						initial={{ opacity: 0, x: 10, y: -10 }}
						animate={{ opacity: 1, x: 0, y: 0 }}
						exit={{ opacity: 0, x: 10, y: -10 }}
						transition={{ duration: 0.2 }}
						className="absolute left-0 border-2 border-black top-full mt-1 w-[200px] bg-[#232c69]  text-[#ffcc00] shadow-md rounded-md p-2 z-10 text-center"
					>
						{item.submenu.map((subItem, index) => (
							<div key={index}>
								<MenuItem item={subItem} />
								<hr className="bg-[#232C69]" />{" "}
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
							className="absolute left-full top-0 mt-1 w-[180px] bg-[#232c69] shadow-md rounded-md p-2 z-10 border-[#ffcc00]"
							style={{ border: "2px solid #000000" }}
						>
							{item.subSubmenu.map((subSubItem, index) => (
								<div key={index} className="py-1 border-b border-[#ffcc00]">
									<div className="cursor-pointer text-[#ffcc00] font-bold uppercase text-base hover:bg-[#ffcc00] hover:text-[#232c69] focus:outline-none px-4 py-1 relative text-center">
										<a
											href={subSubItem.link}
											//className="text-[#ffcc00] hover:text-[#232c69]"
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
