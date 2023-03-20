import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

function SocialLink() {
  const Links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      herf: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      herf: "https://github.com",
    },
    {
      id: 3,
      child: (
        <>
          Gmali <HiOutlineMail size={30} />
        </>
      ),
      herf: "mailto:foo@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      herf: "/vishakhabhayan.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] fixed left-0">
      <ul>
        {Links.map(({ id, child, download, style, herf }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-500/50 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] " +
              " " +
              style
            }
          >
            <a
              href={herf}
              className="flex justify-between items-center w-full text-white "
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
  );
}

export default SocialLink;
