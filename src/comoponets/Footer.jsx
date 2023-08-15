import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
 
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin 
        </>
      ),
      href: "https://www.linkedin.com/in/aditya-patel-286662212",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub 
        </>
      ),
      href: "https://github.com/Aditya4936",
    },
    {
      id: 3,
      child: (
        <>
          Mail 
        </>
      ),
      href: "mailto:6984akv@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-[5rem] flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className=" flex flex-col flex-wrap">
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="text-gray-300">
              I am a Computer Engineering Student. Currently, I love to Work on
              Web application using Technologies like React, TailWind, Next Js
              and Bootstrap.
            </p>
          </div>
          <div className="pt-0">
            <h2 className="text-lg font-semibold mb-4 ">Social-Media</h2>
            <ul>
              {links.map(({ id, child, href, style, download }) => (
                <li key={id} className={style}>
                  <a
                    href={href}
                    className="flex gap-5 items-center w-full text-gray-300 hover:text-gray-400"
                    download={download}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {child}
                  </a>
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
          <p className="text-gray-500">
            &copy; 2023 Aditya Patel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
