import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 flex flex-col items-start">
          <h1 className="text-xl font-bold mb-2">ACADEMY OF TECHNOLOGY</h1>
          <p className="text-sm">
            G.T.Road (Adisaptagram), <br />
            Aedconagar, <br />
            Chinsurah-Mogra, <br />
            West Bengal 712121
          </p>
        </div>
        <div className="col-span-2 grid grid-cols-2">
          <nav className="flex space-x-4 w-full justify-start md:justify-center">
            <a href="#" className="text-gray-300 hover:text-white">
              Techfind
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Events
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              News Bulletin
            </a>
          </nav>
          <div className="flex col-span-1">
            <nav className="flex space-x-4 w-full justify-end">
              <motion.a
                href="https://www.facebook.com/www.aot.edu.in"
                className="text-gray-300"
                whileHover={{ scale: 1.2 }}
              >
                <FaFacebook size={32} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/aotconnect/"
                className="text-gray-300"
                whileHover={{ scale: 1.2 }}
              >
                <FaInstagram size={32} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/school/academy-of-technology/"
                className="text-gray-300"
                whileHover={{ scale: 1.2 }}
              >
                <FaLinkedin size={32} />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-300"
                whileHover={{ scale: 1.2 }}
              >
                <FaSquareXTwitter size={32} />
              </motion.a>
            </nav>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 m-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.111293948669!2d88.37654!3d22.95300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4de2e7a2a27%3A0x27b4e3a65c28867a!2sAcademy%20of%20Technology!5e0!3m2!1sen!2sin!4v1632734095701!5m2!1sen!2sin"
          width="400"
          height="200"
          // 22.895599, 88.402496
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
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
          <a href="#" className="text-gray-500 hover:text-white">
            Emergency Information
          </a>
        </nav>
        <p className="mt-4">Here to help you learn, plan, and grow</p>
      </div>
    </footer>
  );
};

export default Footer;

