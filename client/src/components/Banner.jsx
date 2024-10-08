import React from "react";
import profile from "../../public/assets/profile.jpeg";
import { delay, motion } from "framer-motion";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Banner() {
  return (
    <>
      <div className="flex min-h-screen  flex-col md:flex-row p-8 md:p-16 gap-10 bg-gradient-to-r from-gray-700 to-black">
        {/* Left Block (Text) */}
        <div className="w-full flex flex-col justify-center items-center md:w-1/2 space-y-6">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-white text-6xl font-thin text-center"
          >
            YASHASHVI SAINI
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tighter text-transparent text-center"
          >
            Full Stack Developer
          </motion.span>
          <motion.p
            variants={container(1 )}
            initial="hidden"
            animate="visible"
            className="tracking-tighter text-white font-light text-lg text-center max-w-lg"
          >
            I'm a passionate Full Stack Developer with expertise in building
            dynamic, responsive web applications. I specialize in front-end
            technologies like React and Tailwind CSS, and back-end technologies
            including Node.js, Express, and MongoDB. With a solid foundation in
            the MERN stack, I aim to craft seamless user experiences and develop
            scalable solutions that help businesses grow. I thrive in creating
            clean, efficient code, and I’m always eager to tackle new challenges
            in the ever-evolving world of web development.
          </motion.p>
        </div>

        {/* Right Block (Image) */}
        <div className="w-full flex justify-center items-center md:w-1/2">
          <motion.img
          initial={{x:100,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:1,delay:1.2}}
            src={profile}
            alt="profile"
            className="h-auto w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
