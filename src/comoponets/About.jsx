import React from "react";
import herox from "../assets/hero1.png";
const About = () => {
  return (
    <div
      name="About"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          "Hello there! I'm Aditya Patel, a dedicated student on a fascinating
          journey through the realm of computer science. Currently enrolled at
          Marwadi University, I'm deeply engaged in exploring the diverse
          landscapes of technology, coding, and innovation. Hailing from the
          vibrant town of Morbi, I've always been captivated by the world of
          bits and bytes. My academic journey is fueled by a desire to
          understand the intricacies of computer science and to uncover its
          potential to transform our lives.
        </p>

        <br />
        <p className="text-xl">
          As I navigate through my educational voyage, I'm committed to honing
          my skills in areas like software development, data structures, and
          algorithms. The thrill of solving complex problems and the joy of
          creating functional applications inspire me to reach for new heights.
          With my graduation expected in 2024, I'm eager to seize every
          opportunity to learn, collaborate, and innovate. This portfolio serves
          as a window into my growth, projects, and accomplishments. Join me on
          this exciting expedition as I merge creativity with code to build a
          future empowered by technology. Feel free to connect, collaborate, and
          be a part of my journey towards a brighter digital horizon!"
        </p>
      </div>
    </div>
  );
};

export default About;
