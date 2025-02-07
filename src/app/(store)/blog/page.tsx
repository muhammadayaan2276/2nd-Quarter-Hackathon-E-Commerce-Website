'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdAccountCircle } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useState } from 'react';
import Service from '@/components/Service';

const Blog = () => {
 




  return (
    <div className="bg-[#FFFFFF]">
     {/* Background Section */}
          <div className="relative w-full h-[300px] md:h-[390px] overflow-hidden">
            {/* Background Image */}
            <Image src="/Rectangle 1.png" alt="shop background" layout="fill" objectFit="cover" />
    
            {/* Centered Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              {/* Logo */}
              <Image src="/Meubel House_Logos-05.png" alt="logo" height={46} width={140} className="mx-auto -mb-4" />
    
              {/* Shop Text */}
              <h1 className="text-4xl md:text-6xl text-[#000000] font-medium mb-5">Blog</h1>
    
              <div className="flex justify-center items-center text-lg pb-16">
              <Link href="/">
            <h3 className="font-medium text-[14px] md:text-[16px] font-poppins text-[#000000]">Home</h3>
            </Link>
                <MdKeyboardArrowRight className="mx-2 w-[16px] md:w-[20px] h-[16px] md:h-[20px] text-[#000000]" />
                <h3 className='font-poppins text-[14px] md:text-[16px] font-[300] text-[#000000]'>Blog</h3>
              </div>
            </div>
          </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-16 ml-12">
        <div className="flex-1">
  <div className="mb-16">
    <Image
      src="/Rectangle 68.png"
      alt="Blog post"
      width={800}
      height={300} 
      className="rounded-lg w-[400px] h-[200px] lg:w-[800px] lg:h-[400px] md:w-[500px] md:h-[300px]  xl:h-[500px] xl:w-[1000px] object-cover" 
    />
    <div className="mt-4 flex gap-6">
      <div className="flex flex-col items-center text-[#9F9F9F] font-medium">
        <MdAccountCircle className="text-[20px]" />
        <span className='text-[15px] py-1'>Admin</span>
      </div>
      <div className="flex flex-col items-center  text-[#9F9F9F] font-medium">
        <FaCalendar className="text-[20px]" />
        <span className='text-[15px] py-1'>14 Oct 2022</span>
      </div>
      <div className="flex flex-col items-center text-[#9F9F9F] font-medium">
        <FaTag className="text-[20px]" />
        <span className='text-[15px] py-1'>Wood</span>
      </div>
    </div>
    <h2 className="text-xl font-semibold mt-5 text-black sm:text-2xl">
      Going all-in with millennial design
    </h2>
    <p className="text-[#9F9F9F] mt-4 text-sm leading-relaxed sm:text-md">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
    </p>
    <div className="pb-[6px] pt-8">
      <button className="text-center font-poppins text-[16px] font-medium text-[#000000] border-b-2 border-[#000000] pb-2">
        Read more
      </button>
    </div>
  </div>

  <div className="mb-16">
    <Image
      src="/Rectangle 68 (1).png"
      alt="Blog post"
      width={800}
      height={300}
      className="rounded-lg w-[400px] h-[200px]  lg:w-[800px] lg:h-[400px] md:w-[500px] md:h-[300px]  xl:h-[500px] xl:w-[1000px] object-cover" 
    />
    <div className="mt-4 flex gap-6">
      <div className="flex flex-col items-center text-sm text-[#9F9F9F] font-medium">
      <MdAccountCircle className="text-[20px]" />
      <span className='text-[15px] py-1'>Admin</span>
      </div>
      <div className="flex flex-col items-center text-sm text-[#9F9F9F] font-medium">
      <FaCalendar className="text-[20px]" />
        <span className='text-[15px] py-1 text-nowrap'>14 Oct 2022</span>
      </div>
      <div className="flex flex-col items-center text-sm text-[#9F9F9F] font-medium">
      <FaTag className="text-[20px]" />
      <span className='text-[15px] py-1'>Handmade</span>
      </div>
    </div>
    <h2 className="text-xl font-semibold mt-5 text-black sm:text-2xl">
      Exploring new ways of decorating
    </h2>
    <p className="text-[#9F9F9F] mt-4 text-sm leading-relaxed sm:text-md">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
    </p>
    <div className="pb-[6px] pt-8">
      <button className="text-center font-poppins text-[16px] font-medium text-[#000000] border-b-2 border-[#000000] pb-2">
        Read more
      </button>
    </div>
  </div>

  <div className="mb-16">
    <Image
      src="/Rectangle 68 (2).png"
      alt="Blog post"
      width={800}
      height={300} 
      className="rounded-lg w-[400px] h-[200px]  lg:w-[800px] lg:h-[400px] md:w-[500px] md:h-[300px] xl:h-[500px] xl:w-[1000px] object-cover" 
    />
    <div className="mt-4 flex gap-6">
      <div className="flex flex-col items-center text-sm text-[#9F9F9F]  font-medium">
      <MdAccountCircle className="text-[20px]" />
      <span className='text-[15px] py-1'>Admin</span>
      </div>
      <div className="flex flex-col items-center text-sm text-[#9F9F9F] font-medium">
      <FaCalendar className="text-[20px]" />
      <span className='text-[15px] py-1'>14 Oct 2022</span>
      </div>
      <div className="flex flex-col items-center text-sm text-[#9F9F9F] font-medium">
      <FaTag className="text-[20px]" />
      <span className='text-[15px] py-1'>Wood</span>
      </div>
    </div>
    <h2 className="text-xl font-semibold mt-5 text-black sm:text-2xl">
      Handmade pieces that took time to make
    </h2>
    <p className="text-[#9F9F9F] mt-4 text-sm leading-relaxed sm:text-md">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
    </p>
    <div className="pt-7">
      <button className="text-center font-poppins text-[16px] font-medium text-[#000000] border-b-2 border-[#000000] pb-2">
        Read more
      </button>
    </div>
  </div>
</div>


      

    <div className='pr-12'>

    <div className="flex mb-8 border-2 border-gray-300 rounded-md h-12 w-72 ">
      {/* Search Button */}
      <button className="p-2">
        <IoSearch className="text-black" size={24} />
      </button> 

        {/* Search Input */}
        <input
        type="text"
        placeholder="Search products..."
        className="w-full h-full px-2 outline-none text-black"
      />
      
      
    </div>


      

    {/* Categories Section */}
<div className="mb-12">
  <h3 className="text-xl font-semibold text-black mb-7">Categories</h3>
  <ul className="space-y-9  text-gray-400 text-md">
    <li className="flex cursor-pointer ">
      <span>Crafts</span>
      <span className="pl-[230px]">2</span>
    </li>
    <li className="flex cursor-pointer ">
      <span>Design</span>
      <span className="pl-[224px]">8</span>
    </li>
    <li className="flex cursor-pointer ">
      <span>Handmade</span>
      <span className="pl-[195px]">7</span>
    </li>
    <li className="flex cursor-pointer ">
      <span>Interior</span>
      <span className="pl-[225px]">1</span>
    </li>
    {/* Adjust spacing for Wood */}
    <li className="flex cursor-pointer ">
      <span>Wood</span>
      <span className="pl-[234px]">6</span>
    </li>
  </ul>
</div>

    <div className='mt-[110px]'>
     <h3 className="text-xl font-semibold text-black mb-7 ">Recent Posts</h3>
     <div className="space-y-10">
       
       <div className="flex items-center gap-4">
         <Image
           src="/Rectangle 69.png"
           alt="Recent post"
           width={80}
           height={80}
           className="rounded-md"
         />
         <div className='font-medium text-[#000000]'>
         <p className='text-[16px] text-nowrap'>Going all-in with </p>
         <p className='text-[16px]'>millennial design</p>
         <p className='text-[14px] text-[#9F9F9F] mt-2'>03 Aug 2022</p>
       </div>
       </div>

       <div className="flex items-center gap-4">
         <Image
           src="/Rectangle 69 (1).png"
           alt="Recent post"
           width={80}
           height={80}
           className="rounded-md"
         />
         <div>
         <p className='text-[16px]'>Exploring new ways </p>
         <p className='text-[16px]'>of decorating</p>
         <p className='text-[14px] text-[#9F9F9F] mt-2'>03 Aug 2022</p>
       </div>
       </div>
       
       
       <div className="flex items-center gap-4">
         <Image
           src="/Rectangle 69 (2).png"
           alt="Recent post"
           width={80}
           height={80}
           className="rounded-md"
         />
         <div>
         <p className='text-[16px] text-wrap'>Handmade pieces </p>
         <p className='text-[16px]'> that took time to make</p>
         <p className='text-[14px] text-[#9F9F9F] mt-2'>03 Aug 2022</p>
       </div>
       </div>

       <div className="flex items-center gap-4">
         <Image
           src="/Rectangle 69 (3).png"
           alt="Recent post"
           width={80}
           height={80}
           className="rounded-md"
         />
         <div>
         <p className='text-[16px]'>Modern home in </p>
         <p className='text-[16px]'> Milan</p>
         <p className='text-[14px] text-[#9F9F9F] mt-2'>03 Aug 2022</p>
       </div>
       </div>

       <div className="flex items-center gap-4">
         <Image
           src="/Rectangle 69 (4).png"
           alt="Recent post"
           width={80}
           height={80}
           className="rounded-md"
         />
         <div>
         <p className='text-[16px]'>Colorful office </p>
         <p className='text-[16px]'> redesign</p>
         <p className='text-[14px] text-[#9F9F9F] mt-2'>03 Aug 2022</p>
       </div>
       </div>

     </div>
   </div>
</div>

        </div>
        {/* Pagination Section */}
        <div className="flex justify-center gap-7  pt-4">
          <button className="bg-[#FBEBB5] font-normal text-[20px] font-poppins text-[#000000] rounded-md py-2 px-4 lg:px-5">1</button>
          <button className="bg-[#FFF9E5] font-normal text-[20px] font-poppins text-[#000000] rounded-md py-2 px-4 lg:px-5">2</button>
          <button className="bg-[#FFF9E5] font-normal text-[20px] font-poppins text-[#000000] rounded-md py-2 px-4 lg:px-5">3</button>
          <button className="bg-[#FFF9E5] font-[300] text-[20px] font-poppins text-[#000000] rounded-md py-2 px-4 lg:px-5">Next</button>
        
        </div>

      </div>
      <Service/>
    </div>
  )
}


export default Blog
