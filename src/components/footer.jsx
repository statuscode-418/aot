import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
//import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 flex flex-col items-start order-1 md:order-1">
        <img src="../assets/aot-logo.jpg" alt="AOT Logo" className="h-15 w-auto mr-2" /><br></br>
          <h1 className="text-2xl mb-2">ACADEMY OF TECHNOLOGY</h1>
          <p className="text-lg">
            G.T.Road (Adisaptagram), <br />
            Aedconagar, Hooghly-712121, <br />
            West Bengal, India
          </p>
        </div>
        <div className="col-span-2 grid grid-cols-2 order-2 md:order-2 text-xl">
          <nav className="flex space-x-7 w-full justify-start md:justify-center">
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
          <div className="flex col-span-1 mr-12">
            <nav className="flex space-x-4 w-full justify-end">
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
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-12 m-4">
      <h2 className="text-2xl mb-2">Locate Us</h2>
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
      <div className="mt-8 flex flex-col items-center text-center text-sm">
        <p>
          © 2024 Academy of Technology. All Rights Reserved.
        </p>
        <nav className="flex space-x-4 justify-center">
          <a href="#" className="text-gray-500 hover:text-white">
            Land Acknowledgement
          </a>
          <a href="#" className="text-gray-500 hover:text-white">
            Disclaimer
          </a>
          <a href="#" className="text-gray-500 hover:text-white">
            Copyright Infringement
          </a>
          <a href="#" className="text-gray-500 hover:text-white">
            Privacy Statement
          </a>
          <a href="#" className="text-gray-500 hover:text-white">
            Non Discrimination
          </a>
        </nav>
        <p className="mt-4">Here to help you learn, plan, and grow</p>
      </div>
    </footer>
  );
};

export default Footer;


