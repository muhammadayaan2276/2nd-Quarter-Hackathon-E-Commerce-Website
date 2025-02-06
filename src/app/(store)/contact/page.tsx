'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaLocationDot } from "react-icons/fa6"
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import Service from '@/components/Service';

const Contact = () => {
  return (
    <div className='bg-[#FFFFFF]'>
      {/* Background Section */}
               <div className="relative w-full h-[300px] md:h-[390px] overflow-hidden">
                 {/* Background Image */}
                 <Image src="/Rectangle 1.png" alt="shop background" layout="fill" objectFit="cover" />
         
                 {/* Centered Content */}
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                   {/* Logo */}
                   <Image src="/Meubel House_Logos-05.png" alt="logo" height={46} width={140} className="mx-auto -mb-4" />
         
                   {/* Shop Text */}
                   <h1 className="text-4xl md:text-6xl text-[#000000] font-medium mb-5">Contact</h1>
         
                   <div className="flex justify-center items-center text-lg pb-16">
                   <Link href="/">
                  <h3 className="font-medium text-[14px] md:text-[16px] font-poppins text-[#000000]">Home</h3>
                  </Link>
                     <MdKeyboardArrowRight className="mx-2 w-[16px] md:w-[20px] h-[16px] md:h-[20px] text-[#000000]" />
                     <h3 className='font-poppins text-[14px] md:text-[16px] font-[300] text-[#000000]'>Contact</h3>
                   </div>
                 </div>
               </div>

      {/* Get In Touch Section */}
      <div className="text-center mt-10 md:mt-[85px] mb-8 md:mb-16 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-black font-poppins">
          Get In Touch With Us
        </h2>
        <p className="text-[#9F9F9F] text-sm md:text-base font-poppins font-normal mt-4">
          For More Information About Our Product & Services. Please Feel Free To Drop Us
        </p>
        <p className='text-[#9F9F9F] text-sm md:text-base font-poppins font-normal'>
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      {/* Contact Information & Form */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-12 lg:gap-16 mt-12 md:mt-28 px-6 md:px-12">
        {/* Contact Information */}
        <div className="flex flex-col gap-8">
          <div className="flex items-start gap-4 md:ml-11">
            <FaLocationDot className='text-[#000000] mt-[6px] text-[21px]' />
            <div>
              <h3 className="text-lg md:text-[22px] font-semibold text-black">Address</h3>
              <p className="text-[#000000] text-sm md:text-[15px]">236 5th SE Avenue, New</p>
              <p className="text-[#000000] text-sm md:text-[15px]">York NY10000, United</p>
              <p className="text-[#000000] text-sm md:text-[15px]">States</p>
            </div>
          </div>
          <div className="flex items-start gap-4 md:ml-11">
            <FaPhoneAlt className='text-[#000000] mt-2 text-[20px]' />
            <div>
              <h3 className="text-lg md:text-[22px] font-semibold text-black">Phone</h3>
              <p className="text-[#000000] text-sm md:text-[15px]">Mobile: +(84) 546-6789</p>
              <p className="text-[#000000] text-sm md:text-[15px]">Hotline: +(84) 456-6789</p>
            </div>
          </div>
          <div className="flex items-start gap-4 md:ml-11">
            <FaClock className='text-[#000000] mt-2 text-[20px]' />
            <div>
              <h3 className="text-lg md:text-[22px] font-semibold text-black">Working Time</h3>
              <p className="text-[#000000] text-sm md:text-[15px]">Monday-Friday: 9:00 - 20:00</p>
              <p className="text-[#000000] text-sm md:text-[15px]">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="w-full lg:w-1/2 bg-white px-6 md:px-20 pb-16" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-6 md:gap-9">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-[16px] font-medium text-black mb-4">Your Name</label>
              <input type="text" id="name" className="border-[2px] border-gray-300 rounded-md p-4 text-sm" placeholder="Abc" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-[16px] font-medium text-black mb-4">Email Address</label>
              <input type="email" id="email" className="border-[2px] border-gray-300 rounded-md p-4 text-sm" placeholder="Abc@def.com" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className="text-[16px] font-medium text-black mb-4">Subject</label>
              <input type="subject" id="subject" className="border-[2px] border-gray-300 rounded-md p-4 text-sm" placeholder="This is optional" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-[16px] font-medium text-black mb-4">Message</label>
              <textarea id="message" className="border-[2px] border-gray-300 rounded-md p-6 text-sm" placeholder="Hi! I'd like to ask about"></textarea>
            </div>
            <div>
              <button className="text-[#000000] border-[1px] rounded-[15px] border-black hover:bg-amber-100 py-3 px-[85px] font-medium">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <Service/>
    </div>
  );
};

export default Contact;
