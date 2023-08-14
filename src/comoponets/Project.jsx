import React from "react";
import realestate from "../assets/project/realestate.jpg";
import spotifyCLon from "../assets/project/spotifyCLon.jpg";
import swapshoes from "../assets/project/swapshoes.jpg";
import wooCommarce from "../assets/project/wooCommarce.jpg";
import ecommarce from "../assets/project/ecommarce.jpg";
import todolist from "../assets/project/todolist.jpg";
const Project = () => {
  return (
    <div name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6"> Check out some of my Project</p>
        </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 px-12 sm:px-0">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={realestate}
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center ">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://realestate-frontend-web-site-aditya.pages.dev" target="_blank" rel="noreferrer">
                  Demo
                </a>
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://github.com/Aditya4936" target="_blank" rel="noreferrer">Code</a>
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={swapshoes}
             
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center ">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://swap-shoes-baadfdhg8-aditya4936.vercel.app/" target="_blank" rel="noreferrer">
                  Demo
                </a>
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://github.com/Aditya4936/Swap-Shoes-frontend" target="_blank" rel="noreferrer">Code</a>
              </button>
            </div>
          </div>
        
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={wooCommarce}
             
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center ">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://github.com/Aditya4936/Nayanthara_E-Commerce" target="_blank" rel="noreferrer">
                  Demo
                </a>
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://github.com/Aditya4936/Nayanthara_E-Commerce" target="_blank" rel="noreferrer">Code</a>
              </button>
            </div>
          </div>
        
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={ecommarce}
             
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center ">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://github.com/Aditya4936/e-commerce" target="_blank" rel="noreferrer">
                  Demo
                </a>
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://github.com/Aditya4936/e-commerce" target="_blank" rel="noreferrer">Code</a>
              </button>
            </div>
          </div>
        
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={todolist}
             
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center ">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://to-do-list-aditya6984.vercel.app/" target="_blank" rel="noreferrer">
                  Demo
                </a>
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://github.com/Aditya4936/To-Do_List" target="_blank" rel="noreferrer">Code</a>
              </button>
            </div>
          </div>
        
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={spotifyCLon}
             
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center ">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://aditya-spotify-clone.netlify.app/" target="_blank" rel="noreferrer">
                  Demo
                </a>
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://github.com/Aditya4936/Spotify-Clone" target="_blank" rel="noreferrer">Code</a>
              </button>
            </div>
          </div>
        
      </div>
    </div>
    </div>
  );
};

export default Project;
