import React from 'react'
import { delay, motion } from "framer-motion";
function Contact() {
  return (
    <>
      <div className='min-h-96 bg-gradient-to-r from-gray-700 to-black'>
        <div className='border-b border-neutral-900 pb-20'></div>
        <motion.h1 whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:-100}}
          transition={{duration:0.5}} className='text-white text-center my-10 text-4xl font-thin'>Get in touch</motion.h1>
        <div className='text-center tracking-tighter'>
          <motion.p  whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}} className='text-white my-4'>Ghaziabad, India</motion.p>
          <motion.p  whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1.5}} className='text-white my-4'>7428124260</motion.p>
          <a href="mailto:yash03saini@gmail.com" className='text-white underline'>yash03saini@gmail.com</a>
        </div>
      </div>
    </>
  )
}

export default Contact
