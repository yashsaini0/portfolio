import React from "react";
import react from "../../public/assets/react.png";
import mongo from "../../public/assets/mongo.jpeg";
import express from "../../public/assets/express.webp";
import tailwind from "../../public/assets/tailwind.svg";
import nodejs from "../../public/assets/nodejs.png";
import { delay, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-700 to-black mb-20">
        <motion.h1  whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:-100}}
          transition={{duration:1.5}} className="text-white text-center text-6xl font-thin mb-5">
          Technologies
        </motion.h1>
        <motion.div  whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1.5}} className="flex flex-wrap justify-center items-center gap-4 md:gap-7">
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="border-2 p-3 border-gray-200 rounded-3xl my-6 md:my-10"
          >
            <img
              className="h-20 w-20 md:h-28 md:w-28"
              src={react}
              alt="react"
            />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="border-2 p-3 border-gray-200 rounded-3xl my-6 md:my-10"
          >
            <img
              className="h-20 w-20 md:h-28 md:w-28"
              src={tailwind}
              alt="react"
            />
          </motion.div>
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="border-2 p-3 border-gray-200 rounded-3xl my-6 md:my-10"
          >
            <img
              className="h-20 w-20 md:h-28 md:w-28"
              src={nodejs}
              alt="react"
            />
          </motion.div>
          <motion.div
            variants={iconVariants(7)}
            initial="initial"
            animate="animate"
            className="border-2 p-3 border-gray-200 rounded-3xl my-6 md:my-10"
          >
            <img
              className="h-20 w-20 md:h-28 md:w-28 filter invert"
              src={express}
              alt="react"
            />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="border-2 p-3 border-gray-200 rounded-3xl my-6 md:my-10"
          >
            <img
              className="h-20 w-20 md:h-28 md:w-28"
              src={mongo}
              alt="react"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Technologies;
