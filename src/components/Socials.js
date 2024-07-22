import React from "react";
// import social data
import { socialData } from "../data";

const Socials = () => {
  return (
    <ul className="flex justify-center items-center gap-x-[30px]">
      {socialData.map((item, index) => {
        return (
          <li key={index}>
            <a
              href={item.href}
              // eslint-disable-line react/jsx-no-target-blank
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
