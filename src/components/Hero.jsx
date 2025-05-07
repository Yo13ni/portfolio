import React from 'react'
import Image from '../assets/image.png'
import { FaDownload } from "react-icons/fa";
const Hero = () => {
  return (
<>
<section className="bg-black text-white flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-16 py-12">
<div className="text-center md:text-left max-w-md">
    <h1 className="text-4xl font-bold mb-2">Yonatan Awoke</h1>
    <p className="text-yellow-400 text-xl font-semibold mb-4">Full Stack Developer</p>
    <a
      href="/resume.pdf"
      download
      className="inline-flex items-center gap-2  bg-yellow-400 text-black border border-yellow-400 rounded-full px-4 py-1 hover:bg-transparent hover:text-yellow-400 transition"
    >
      Resume<FaDownload className="text-lg" /> 
    </a>
  </div>
        <div className="flex justify-center mt-6">
        <img src={Image} alt=""
className='mx-auto mb-8 w-65 h-60  rounded object-cover transform 
transition-transform duration-300 hover:scale-105'
/>
        </div>
      </section>

</>
  )
}

export default Hero