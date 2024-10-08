import React from "react";
import think from "../../public/assets/think.jpg";
import { delay, motion } from "framer-motion";

function About() {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-700 to-black min-h-screen">
        <h1 className="my-20 text-center text-5xl font-thin text-white">
          About me
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center px-4">
          <motion.div 
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:0.5}}
          className="w-full md:w-1/2 flex justify-center ">
            <img
              className="w-full max-w-sm rounded-3xl md:max-w-md py-10 md:py-3"
              src={think}
              alt="think"
            />
          </motion.div>
          <motion.div 
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:100}}
          transition={{duration:0.5}}
          className="w-full md:w-1/2 flex justify-center md:justify-start">
            <p className="text-white max-w-xl my-2 py-14 text-center md:text-left px-8">
              I’m a detail-oriented Full Stack Developer with a passion for
              building engaging and user-friendly web applications. I’ve honed
              my skills in both front-end and back-end development, specializing
              in the MERN stack (MongoDB, Express, React, Node.js). My
              experience spans from crafting sleek, responsive user interfaces
              to designing efficient server-side logic and database management
              systems. I’m always exploring new technologies and continuously
              improving my coding practices to stay ahead in the rapidly
              evolving tech landscape. My goal is to create innovative digital
              solutions that not only meet business needs but also deliver
              exceptional user experiences. When I’m not coding, you’ll find me
              playing the guitar or working on personal projects to sharpen my
              skills.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default About;
