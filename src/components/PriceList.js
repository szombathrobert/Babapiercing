// PriceList.js

import React from "react";
import { priceListData } from "../data";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "../variants";

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const PriceList = () => {
  const { title, services, warning_parent, warning_home } = priceListData;
  const { ref, inView } = useInView();
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <section
      id="pricelist"
      className="section bg-dark text-white py-8"
      ref={ref}
    >
      <div className="container mx-auto">
        <motion.h2
          className="h2 text-center mb-8 text-white"
          variants={fadeIn("up")}
          initial="hidden"
          animate={controls}
        >
          {title}
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="flex flex-wrap justify-center gap-x-10"
        >
          {/* Babáknak és Gyerekeknek */}
          <motion.div
            variants={fadeIn("up")}
            className="price-column mx-4 my-8 text-center flex-1"
          >
            <h3 className="font-bold mb-6 text-lg">Babáknak és Gyerekeknek</h3>
            {Array.isArray(services.Babáknak) ? (
              // Ha a services.Babáknak egy lista
              <ul className="list-disc list-inside">
                {services.Babáknak.map((service, serviceIndex) => (
                  <motion.li
                    key={serviceIndex}
                    variants={fadeIn("up")}
                    className="mb-3 text-sm"
                  >
                    <span className="font-medium">{service.name}</span>:{" "}
                    {service.price}
                  </motion.li>
                ))}
              </ul>
            ) : (
              // Ha a services.Babáknak egy objektum
              Object.keys(services.Babáknak).map((subcategory, subIndex) => (
                <div key={subIndex} className="mb-4">
                  <h4 className="font-semibold mb-2">{subcategory}</h4>
                  <ul className="list-disc list-inside">
                    {services.Babáknak[subcategory].map(
                      (service, serviceIndex) => (
                        <motion.li
                          key={serviceIndex}
                          variants={fadeIn("up")}
                          className="mb-3 text-sm"
                        >
                          <span className="font-medium">{service.name}</span>:{" "}
                          {service.price}
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>
              ))
            )}
          </motion.div>

          {/* Felnőtteknek */}
          <motion.div
            variants={fadeIn("up")}
            className="price-column mx-4 my-8 text-center flex-1"
          >
            <h3 className="font-bold mb-6 text-lg">Felnőtteknek</h3>
            {Array.isArray(services.Felnőtteknek) ? (
              // Ha a services.Felnőtteknek egy lista
              <ul className="list-disc list-inside">
                {services.Felnőtteknek.map((service, serviceIndex) => (
                  <motion.li
                    key={serviceIndex}
                    variants={fadeIn("up")}
                    className="mb-3 text-sm"
                  >
                    <span className="font-medium">{service.name}</span>:{" "}
                    {service.price}
                  </motion.li>
                ))}
              </ul>
            ) : (
              // Ha a services.Felnőtteknek egy objektum
              Object.keys(services.Felnőtteknek).map(
                (subcategory, subIndex) => (
                  <div key={subIndex} className="mb-4">
                    <h4 className="font-semibold mb-2">{subcategory}</h4>
                    <ul className="list-disc list-inside">
                      {services.Felnőtteknek[subcategory].map(
                        (service, serviceIndex) => (
                          <motion.li
                            key={serviceIndex}
                            variants={fadeIn("up")}
                            className="mb-3 text-sm"
                          >
                            <span className="font-medium">{service.name}</span>:{" "}
                            {service.price}
                          </motion.li>
                        )
                      )}
                    </ul>
                  </div>
                )
              )
            )}
          </motion.div>
        </motion.div>

        {/* Figyelmeztetés hozzáadása a lap aljára */}
        <motion.div variants={fadeIn("up")} className="text-center my-8">
          <div className="text-2xl text-red-500">
            <p>{warning_parent}</p>
            <small>{warning_home}</small>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceList;
