import React, { useState } from "react";
import { galleryData } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GallerySection = () => {
  const [index, setIndex] = useState(-1);
  const { title, images } = galleryData;
  const slides = images.map((image) => ({
    src: image.src,
    width: 800,
    height: 600,
  }));

  const handleImageClick = (image, index) => {
    setIndex(index);
  };

  return (
    <section className="bg-[#f9f9f9] section relative mt-[40px] lg:mt-0 lg:m-4">
      <div id="work" className="container mx-auto">
        <motion.h2
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 max-w-[370px] lg:mb-20"
        >
          {title}
        </motion.h2>
      </div>
      {/* swiper */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 900, disableOnInteraction: false }}
        slidesPerView={1} // display one slide per view on small screens
        spaceBetween={10}
        loop={true}
        speed={500}
        breakpoints={{
          768: {
            // adjust slidesPerView for larger screens
            slidesPerView: 3,
          },
        }}
        centeredSlides={true} // center-align the image carousel
        className="swiper-container mx-auto" // add mx-auto to center the swiper container
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className="w-3/4 md:w-2/3 lg:w-3/4 mx-auto text-center" // make images slightly smaller on mobile devices
              onClick={() => handleImageClick(image, index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Lightbox
        slides={slides}
        styles={{ container: { backgroundColor: "rgba(0,0,0,.9" } }}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </section>
  );
};

export default GallerySection;
