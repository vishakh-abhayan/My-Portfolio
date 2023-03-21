import React from "react";

import arrayDestruc from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import usestate from "../assets/portfolio/usestate.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";

function Portfoli() {
  const Images = [
    {
      id: 1,
      src: arrayDestruc,
    },
    {
      id: 2,
      src: installNode,
    },
    {
      id: 3,
      src: reactParallax,
    },
    {
      id: 4,
      src: navbar,
    },
    {
      id: 5,
      src: reactSmooth,
    },
    {
      id: 6,
      src: usestate,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl inline font-bold border-b-4 border-b-gray-500">
            Projects
          </p>
          <p className="py-6">check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
          {Images.map(({ id, src }) => (
            <div className="shadow-md shadow-gray-500 rounded-lg">
              <img
                key={id}
                src={src}
                alt=""
                className="rounded-md hover:scale-105 duration-200"
              />
              <div className="flex justify-center items-center">
                <button className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfoli;
