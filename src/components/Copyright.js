import React from "react";
// import motion
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Copyright = () => {
  return (
    <div className="bg-dark text-[#dbdbdb] py-6 border-t border-[#2b2b2b]">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          variants={fadeIn("right")}
          transition={{
            type: "tween",
            duration: 0.8,
            delay: 0.2,
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="tracking-[0.02em] text-base text-center"
        >
          &copy; 2024{" "}
          <span className="font-semibold text-white">Babapiercing.</span> Minden
          jog fenttartva.
        </motion.div>
      </div>
    </div>
  );
};

export default Copyright;
