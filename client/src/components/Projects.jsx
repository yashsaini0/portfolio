import React from "react";
import kitabstore from "../../public/assets/kitabstore.png";
import connecto from "../../public/assets/connecto.png";
import { delay, motion } from "framer-motion";

function Projects() {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-700 to-black min-h-screen">
        <motion.h1 whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:-100}}
          transition={{duration:0.5}} className="text-white font-thin text-6xl text-center my-10 mt-20">
          Projects
        </motion.h1>
        <div className="flex flex-wrap justify-center items-center gap-8 px-6">
          {/* First Project */}
          <div className="flex flex-col md:flex-row justify-center items-center md:justify-center w-full max-w-5xl my-5">
            <motion.div whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}} className="w-full md:w-1/3">
              <img
                className="rounded-xl w-80"
                src={kitabstore}
                alt="KitabStore"
              />
            </motion.div >
            <motion.div whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:100}}
          transition={{duration:1.5}} className="w-full md:w-2/3 justify-center md:justify-start  mt-3 md:mt-0">
              <h6 className="text-white text-2xl font-semibold p-6">
                KitabStore
              </h6>
              <p className="text-neutral-500  justify-start  p-6">
                KitabStore is an online bookstore offering a wide range of books
                across genres. Discover your next read with easy browsing,
                user-friendly features, and secure purchasing, all from the
                comfort of your home.
              </p>
              <div className="justify-center md:justify-start my-3 flex flex-wrap space-x-2 space-y-2 md:space-y-0">
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                  React.js
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                  Tailwind CSS
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                  Node.js
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                  Express.js
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                  MongoDB
                </span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 px-6">
          {/* Second Project */}
          <div className="flex flex-col md:flex-row justify-center items-center md:justify-center w-full max-w-5xl my-5">
            <motion.div whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}} className="w-full md:w-1/3">
              <img
                className="rounded-xl w-80"
                src={connecto}
                alt="SocialMedia"
              />
            </motion.div >
            <motion.div whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:100}}
          transition={{duration:1.5}} className="w-full md:w-2/3 justify-center md:justify-start  mt-4 md:mt-0">
              <h6 className="text-white text-2xl font-semibold p-6">
                Connecto
              </h6>
              <p className="text-neutral-500  justify-start  p-6">
                Connecto is a social media platform designed to bring people
                together. Share updates, connect with friends, and discover new
                communities in a user-friendly environment. Whether you're
                posting, messaging, or engaging with content, Connecto offers a
                seamless social experience for staying connected with the world.
              </p>
              <div className="justify-center md:justify-start my-3 flex flex-wrap space-x-2 space-y-2 md:space-y-0">
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                  React.js
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                  Tailwind CSS
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                  Node.js
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                  Express.js
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                  MongoDB
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
