import React from "react";
// import nav data
import { navData } from "../data";
// import components
import Socials from "./Socials";

const NavMobile = ({ closeMenu }) => {
  const { items } = navData;

  return (
    <nav className="w-full h-full flex flex-col justify-evenly overflow-hidden bg-white">
      <ul className="flex flex-col justify-center items-center gap-y-6 py-6 mb-8">
        {items.map((item, index) => (
          <li key={index}>
            <a
              className="text-2xl font-primary uppercase"
              href={item.href}
              onClick={closeMenu} // Hívj meg a closeMenu függvényt
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="text-2xl">
        <Socials />
      </div>
    </nav>
  );
};

export default NavMobile;
