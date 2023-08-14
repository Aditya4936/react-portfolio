import React from "react";
import Hero from "../assets/hero1.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name='Home'className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-500">
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center
        h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl text-white">I'm a Full Stack Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a Computer Engineering Student. Currently, I love to Work on
            Web application using Technologies like React, TailWind, Next Js and
            Bootstrap.
          </p>
          <div>
            <Link to="Projects" smooth duration={500} className="group text-white w-fit cursor-pointer px-6 py-3 my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-600 to-violet-400">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25}  className="ml-1"/>
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={Hero} alt="maro photo"  className="rounded-2xl 
          mx-auto w-2/3 md:w-full hover:animate-pulse"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
