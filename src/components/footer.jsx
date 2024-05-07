import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white py-8 px-4 md:min-h-auto">
			<div className="flex flex-col md:flex-row ml-8">
				<div className="flex-1 mb-8 md:mb-0">
					<img src="https://res.cloudinary.com/dtwrlsxun/image/upload/v1715102918/aot_assets/ul2qfwpxmakc92vbhtl4.jpg" alt="AOT" />
					<h1 className="text-3xl mb-2 mt-4">ACADEMY OF TECHNOLOGY</h1>
					<p className="text-lg">
						G.T.Road (Adisaptagram), <br />
						Aedconagar, Hooghly-712121, <br />
						West Bengal, India
					</p>
					<h2 className="text-2xl mt-2">Contact Us</h2>
					<div className="flex items-center mt-2">
						<IoCall size={30} />
						<div className="ml-2">
							<a
								href="tel:+916969696969"
								target="_blank"
								className="text-lg ml-2"
							>
								+91 6969696969
							</a>
						</div>
					</div>
					<div className="flex items-center mt-2">
						<MdEmail size={30} />
						<div className="ml-2">
							<a
								href="mailto:dilip.kr.maity@aot.edu.in"
								target="_blank"
								className="text-lg ml-2"
							>
								dilip.kr.maity@aot.edu.in
							</a>
						</div>
					</div>
				</div>

				{/* Copyright and academics wagera div */}
				<div className="flex-1 mb-8 md:mb-0">
					<div className="flex justify-center w-full">
						<div>
							<div>
								<nav className="flex flex-col md:flex-row space-x-0 md:space-x-4 justify-center mt-4">
									<a
										href="#"
										className="text-gray-300 hover:text-white mb-2 md:mb-0 mr-2 md:mr-0"
									>
										Academics
									</a>
									<a
										href="#"
										className="text-gray-300 hover:text-white mb-2 md:mb-0 mr-2 md:mr-0"
									>
										Research
									</a>
									<a
										href="#"
										className="text-gray-300 hover:text-white mb-2 md:mb-0 mr-2 md:mr-0"
									>
										Events
									</a>
									<a
										href="#"
										className="text-gray-300 hover:text-white mb-2 md:mb-0"
									>
										News Bulletin
									</a>
								</nav>
							</div>
							<div className="mt-8 md:mt-60">
								<nav className="flex flex-col md:flex-row space-x-0 md:space-x-4 justify-center">
									<a
										href="#"
										className="text-gray-300 hover:text-white whitespace-nowrap mb-2 md:mb-0 mr-2 md:mr-0"
									>
										Land Acknowledgement
									</a>
									<a
										href="#"
										className="text-gray-300 hover:text-white whitespace-nowrap mb-2 md:mb-0 mr-2 md:mr-0"
									>
										Disclaimer
									</a>
									<a
										href="#"
										className="text-gray-300 hover:text-white whitespace-nowrap mb-2 md:mb-0 mr-2 md:mr-0"
									>
										Copyright Infringement
									</a>
									<a
										href="#"
										className="text-gray-300 hover:text-white whitespace-nowrap mb-2 md:mb-0 mr-2 md:mr-0"
									>
										Privacy Statement
									</a>
									<a
										href="#"
										className="text-gray-300 hover:text-white whitespace-nowrap mb-2 md:mb-0"
									>
										Non Discrimination
									</a>
								</nav>
								<p className="flex justify-center items-center mt-3">
									© 2024 Academy of Technology. All Rights Reserved.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Map and socials left div */}
				<div className="flex-1">
					<div className="md:absolute right-0">
						<div className="flex flex-col md:col-span-1 mr-8">
							<nav className="flex space-x-4 justify-center md:justify-end mb-8 md:mb-0">
								<motion.a
									href="https://www.facebook.com/www.aot.edu.in"
									className="text-gray-300"
									whileHover={{ scale: 1.2 }}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Facebook"
								>
									<FaFacebook size={32} />
								</motion.a>
								<motion.a
									href="https://www.instagram.com/aotconnect/"
									className="text-gray-300"
									whileHover={{ scale: 1.2 }}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Instagram"
								>
									<FaInstagram size={32} />
								</motion.a>
								<motion.a
									href="https://www.linkedin.com/school/academy-of-technology/"
									className="text-gray-300"
									whileHover={{ scale: 1.2 }}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="LinkedIn"
								>
									<FaLinkedin size={32} />
								</motion.a>
								<motion.a
									href="https://youtube.com/@academyoftechnology135?si=5RtMVG9TU-d3IZgB"
									className="text-gray-300"
									whileHover={{ scale: 1.2 }}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="YouTube"
								>
									<FaYoutube size={32} />
								</motion.a>
							</nav>
							<div className="mb-8 md:mb-0">
								<h2 className="text-2xl mb-2 mt-2">Locate Us</h2>
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.111293948669!2d88.37654!3d22.95300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4de2e7a2a27%3A0x27b4e3a65c28867a!2sAcademy%20of%20Technology!5e0!3m2!1sen!2sin!4v1632734095701!5m2!1sen!2sin"
									width="300"
									height="200"
									style={{ border: 0 }}
									allowFullScreen=""
									loading="lazy"
									title="Location Map"
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
