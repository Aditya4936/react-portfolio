import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
      const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-[5rem] mt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="invisible lg:visible md:visible flex flex-col flex-wrap">
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="text-gray-300">
              I am a Computer Engineering Student. Currently, I love to Work on
              Web application using Technologies like React, TailWind, Next Js
              and Bootstrap
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {links.map(({ id, link }) => (
                <li key={id} className="hover:text-gray-400">
                  <Link to={link} smooth duration={500}>
                    {link}
                  </Link>
                </li>
              ))}

            </ul>
          </div>
            <div>
            <h2 className="text-lg font-semibold mb-4 ">Contact Us</h2>
            <p className="text-gray-300">
              701,Shiv-Shakti Park, Morbi
              <br />
              Gujrat,India
              <br />
              Email: 6984akv@gmail.com
              <br />
              Phone: +91 8780589862
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-500">&copy; 2023 Aditya Patel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
