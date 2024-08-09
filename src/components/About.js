import React from "react";
// import about data
import { aboutData } from "../data";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn } from "../variants";
// import css
import "./style.css";

const About = () => {
  // destructure about data
  const { title, subtitle1, subtitle2, subtitle3 } = aboutData;
  return (
    <section className="lg:py-16 xl:pb-[160px]">
      <div id="about" className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-[70px] items-center">
          {/* numbers */}
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col lg:flex-row flex-1 justify-center items-center w-full h-full"
          >
            <div
              className="text-[360px] sm:text-[430px] md:text-[350px] xl:text-[700px] leading-none font-tertiary
    lg:-tracking-[0.055em] tracking-normal bg-about bg-no-repeat bg-right bg-clip-text text-transparent w-full h-auto overflow-hidden"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                backgroundSize: "contain", // Adjust size if necessary
                backgroundPosition: "right center", // Position the image to the right
                backgroundRepeat: "no-repeat", // Ensure the image does not repeat
              }}
            >
              01
            </div>
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 h-full xl:mt-48"
          >
            <h2 className="h2">{title}</h2>
            <div className="flex flex-col items-end">
              <div className="max-w-[530px] text-grey">
                <p className="mb-6">{subtitle1}</p>
                <p className="mb-9">{subtitle2}</p>
                <p className="mb-6">{subtitle3}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
