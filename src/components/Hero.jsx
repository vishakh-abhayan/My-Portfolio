import React from "react";
import HeroImage from "../assets/heroimg.png";
import { HiArrowNarrowRight as Angele } from "react-icons/hi";

function Hero() {
  return (
    <div
      name="hero"
      className=" w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="md:flex-row h-full px-4 max-w-screen-lg mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            I,m a MERN Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            who loves to solve problems digitally with top notch technologies. I
            am specialised in web technologies.
          </p>
          <div>
            <button className="group cursor-pointer text-white w-fit py-3 px-6 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 ">
              Projects
              <span className="group-hover:rotate-90 duration-200">
                <Angele className="ml-4" size={25} />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            src={HeroImage}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
