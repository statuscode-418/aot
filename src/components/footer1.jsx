import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
//import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer1 = () => {
    return (
        <footer className='bg-gray-800 text-white py-8 px-4  min-h-auto md:min-h-auto'>
            <div className='flex flex-col md:flex-row ml-8'>

                {/* AOT logo and address div */}
                <div className='flex-1'>
                    <img src="../assets/aot-logo.jpg" alt="AOT" />
                    <h1 className="text-3xl mb-2 mt-4">ACADEMY OF TECHNOLOGY</h1>
                    <p className="text-lg">
                        G.T.Road (Adisaptagram), <br />
                        Aedconagar, Hooghly-712121, <br />
                        West Bengal, India
                    </p>
                </div>

                {/* Copyright and academics wagera div */}
                <div className='flex-1'>
                    <div className="flex justify-center w-full">
                        <div>
                            <div>
                                <nav className="flex space-x-4 justify-center mt-4">
                                    <a href="#" className="text-gray-300 hover:text-white">
                                        Academics
                                    </a>
                                    <a href="#" className="text-gray-300 hover:text-white">
                                        Research
                                    </a>
                                    <a href="#" className="text-gray-300 hover:text-white">
                                        Events
                                    </a>
                                    <a href="#" className="text-gray-300 hover:text-white">
                                        News Bulletin
                                    </a>
                                </nav>
                            </div>
                            <div className='mt-60'>
                                <nav className="flex space-x-4 justify-center">
                                    <a href="#" className="text-gray-500 hover:text-white whitespace-nowrap">
                                        Land Acknowledgement
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-white whitespace-nowrap">
                                        Disclaimer
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-white whitespace-nowrap">
                                        Copyright Infringement
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-white whitespace-nowrap">
                                        Privacy Statement
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-white whitespace-nowrap">
                                        Non Discrimination
                                    </a>
                                </nav>
                                <p className='flex justify-center items-center mt-3'>
                                    © 2024 Academy of Technology. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map and socials left div */}
                <div className='flex-1'>
                    <div className="absolute right-0">
                        <div className="flex flex-col col-span-1 mr-8">
                            <nav className=" flex space-x-4 justify-end">
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
                                    aria-label='LinkedIn'
                                >
                                    <FaLinkedin size={32} />
                                </motion.a>
                                <motion.a
                                    href="https://youtube.com/@academyoftechnology135?si=5RtMVG9TU-d3IZgB"
                                    className="text-gray-300"
                                    whileHover={{ scale: 1.2 }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label='YouTube'
                                >
                                    <FaYoutube size={32} />
                                </motion.a>
                            </nav>
                            <h2 className="text-2xl mb-2 mt-8">Locate Us</h2>
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
        </footer>
    )
}


export default Footer1