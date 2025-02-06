import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import "animate.css";  // Importing animate.css for animations

const Gallery = () => {
  return (
    <div className='bg-green-500 w-full h-full pt-[17px] pb-[55px] gap-[30px] flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center'>
      
      {/* Left Image and Heading for Granite Square Side Table */}
      <div className='flex flex-col items-center animate__animated animate__fadeIn animate__delay-5s'>
        <Image 
          src="/squaretable.png" 
          alt="Granite Square Side Table" 
          width={500} 
          height={500} 
          className="object-cover"
        />
        <h3 className='font-poppins text-[30px] font-medium text-[#000000] mt-[-80px] mb-[-10px] w-[182px] h-[54px] text-center'>
          Side Table
        </h3>
        <Link href="/shop">
        <span className='font-poppins text-[20px] w-[125px] h-[36px] font-medium text-[#000000] underline cursor-pointer mb-[80px] text-center'>
          View More
        </span>
        </Link>
      </div>

      {/* Right Image and Heading for Cloud Sofa Three Seater */}
      <div className='flex flex-col items-center animate__animated animate__fadeIn animate__delay-5s'>
        <Image 
          src="/cloudsofa.png" 
          alt="Cloud Sofa Three Seater" 
          width={500} 
          height={500} 
          className="object-cover mr-20"
        />
        <h3 className='font-poppins  text-[30px] w-[182px] text-nowrap h-[54px] font-medium text-[#000000] mt-[-57px] mb-[35px] text-center'>
          Cloud Sofa 
        </h3>
        <h3 className='font-poppins  text-[30px] w-[182px] text-nowrap h-[54px] font-medium text-[#000000] mt-[-57px] mb-[-4px] text-center'>
          Three Seater
        </h3>
        <Link href="/shop">
        <span className='font-poppins text-[20px] w-[125px] h-[36px] font-medium text-[#000000] pb-4 underline cursor-pointer text-center'>
          View More
        </span>
        </Link>
      </div>
      
    </div>
  )
}

export default Gallery;
