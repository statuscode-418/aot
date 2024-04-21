import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 flex flex-col items-start">
          <h1 className="text-xl font-bold mb-2">ACADEMY OF TECHNOLOGY</h1>
          <p className="text-sm">
            One Lomb Memorial Drive <br />
            Rochester, NY 14623 <br />
            585-475-2411
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
              <a href="#" className="text-gray-300 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Twitter
              </a>
            </nav>
          </div>
        </div>
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

