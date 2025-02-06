import React from 'react'
import Image from 'next/image';

const OurInstagram = () => {
  return (
    <div className='relative w-full h-screen bg-[#FAF4F4]'>
      {/* Background Image */}
      <Image 
        src="/Rectangle 17.png" 
        alt="background" 
        layout="fill" // Makes the image fill the container
        objectFit="cover" // Ensures the image covers the entire div
        className="z-0" // Ensure it's behind the content
      />

      {/* Text and Button container */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-[#000000] z-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Our Instagram</h1>
        <h3 className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8">Follow our store on Instagram</h3>
        <button className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-[#FAF4F4] bg-gray-200 rounded-[50px] text-[#000000] text-lg sm:text-xl font-semibold transition duration-300 hover:bg-gray-300">
          Follow Us
        </button>
      </div>
    </div>
  )
}

export default OurInstagram;
