import React from "react";
// import data
import { footerData } from "../data";
// import motion
import { motion } from "framer-motion";
// import fadeIn
import { fadeIn } from "../variants";

// stagger container
const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const Footer = () => {
  // destructure footer data
  const { about, links, program } = footerData;
  return (
    <footer className="section bg-dark">
      <div className="container mx-auto">
        {/* grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="text-white flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          {/* about */}
          <motion.div
            variants={fadeIn("up")}
            className="flex-1 flex flex-col gap-y-6"
          >
            {/* title */}
            <div className="font-primary text-xl uppercase tracking-[0.08em]">
              {about.title}
            </div>
            {/* subtitle */}
            <div className="leading-relaxed text-[#dbdbdb]">
              {about.subtitle}
            </div>
            {/* address, phone & email */}
            <div className="flex flex-col gap-y-4 font-semibold text-[#dbdbdb]">
              {/* address  */}
              <div className="flex items-center gap-x-[10px]">
                <div>{about.address.icon}</div>
                <div>{about.address.name}</div>
              </div>
              {/* phone  */}
              <div className="flex items-center gap-x-[10px]">
                <div>{about.phone.icon}</div>
                <div>{about.phone.number}</div>
              </div>
              {/* email  */}
              <div className="flex items-center gap-x-[10px]">
                <div>{about.email.icon}</div>
                <div>{about.email.address}</div>
              </div>
            </div>
          </motion.div>
          {/* links */}
          <motion.div
            variants={fadeIn("up")}
            className="flex-1 flex flex-col xl:items-center"
          >
            <div>
              <div className="font-primary text-xl uppercase tracking-[0.08em] mb-6">
                {links.title}
              </div>
              <ul className="flex flex-col gap-y-4 text-[#dbdbdb]">
                {links.items.map((item, index) => {
                  // destructure item
                  const { href, name } = item;
                  return (
                    <li key={index}>
                      <a href={href} className="hover:text-white transition">
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
          {/* program */}
          <motion.div variants={fadeIn("up")} className="flex-1">
            <div className="font-primary text-xl uppercase tracking-[0.08em] mb-6">
              {program.title}
            </div>
            <ul className="flex flex-col gap-y-4 text-[#dbdbdb]">
              {program.items.map((item, index) => {
                return <li key={index}>{item.name}</li>;
              })}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
