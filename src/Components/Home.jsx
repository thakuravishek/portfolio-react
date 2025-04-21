import React from "react";
import heroImage from "../Assets/1000288867.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white pt-20">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4">
            Hi, I'm Avishek — a frontend developer specializing in building
            dynamic and responsive web apps with React. As a fresher, I bring
            strong fundamentals in JavaScript, React, and modern web development
            practices. I enjoy creating clean, component-based UIs, working with
            hooks, and integrating APIs to build interactive user experiences.
            I'm excited to keep learning and building — check out my projects to
            see what I’ve been up to!
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-indigo-700 to-blue-400 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
