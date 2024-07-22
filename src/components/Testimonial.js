import React from "react";
//immport data
import { testimonialData } from "../data";
// import swiper react
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// import swiper styles
import "swiper/css";
// import motion
import { motion } from "framer-motion";
// import fadeIn
import { fadeIn } from "../variants";

const Testimonial = () => {
  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="py-[40px] lg:pb-[160px] lg:pt-0"
    >
      <div className="container mx-auto">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
        >
          {testimonialData.map((slide, index) => {
            // destructure slide
            const { quoteImg, message, name } = slide;
            return (
              <SwiperSlide key={index}>
                <div className="max-w-[1200px] mx-auto flex flex-col items-center lg:flex-row lg:items-start gap-x-[38px]">
                  {/* quote img */}
                  <div className="w-[154px] h-[109px] mb-5">
                    <img src={quoteImg} alt="quote Img" />
                  </div>
                  {/* message, name & occupation */}
                  <div className="flex-1 lg:mt-[54px]">
                    {/* message */}
                    <div className="text-2xl lg:text-[36px] leading-normal mb-6 lg:mb-12">
                      {message}
                    </div>
                    {/* name & occupation */}
                    <div className="flex items-center text-xl lg:text-2xl font-primary">
                      {/* name */}
                      <div className="font-semibold">{name}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Testimonial;
