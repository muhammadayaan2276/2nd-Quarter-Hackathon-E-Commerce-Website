import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegClock } from 'react-icons/fa';
import { CiCalendar } from 'react-icons/ci';

const OurBlogs = () => {
  return (
    <div className="bg-[#FFFFFF] w-full h-auto pt-[60px]">
      <div className="text-center mb-14 fade-in">
        <h1 className="text-[36px] font-poppins font-medium text-[#000000]">Our Blogs</h1>
        <p className="mt-3 text-[16px] font-poppins font-medium text-[#9F9F9F]">
          Find a bright idea to suit your taste with our great selection
        </p>
      </div>

      {/* Grid for blogs */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8 px-8">
        {/* Blog 1 */}
        <div className="w-full max-w-[393px] mx-auto fade-in">
          <Link href="/blog">
            <Image
              src="/Rectangle 13.png"
              alt="Granite dining table with dining chair"
              width={400}
              height={400}
              className="object-cover rounded-[10px] w-full h-[354px]"
            />
          </Link>
          <h3 className="mt-5 text-[#000000] text-center font-poppins text-[20px] font-normal">
            Going all-in with millennial design
          </h3>
          <div className="mt-3 text-center">
            <a
              href="/blog"
              className="font-medium text-[#000000] text-[20px] border-b-2 border-[#000000] pb-[9px]"
            >
              Read More
            </a>
            <div className="flex items-center mt-6 space-x-2 justify-center">
              <FaRegClock className="text-[#000000] w-[18px] h-[18px]" />
              <p className="text-[#000000] pr-4">5 min</p>
              <CiCalendar className="text-[#000000] w-[22px] h-[22px]" />
              <p className="text-[#000000]">12th Oct 2022</p>
            </div>
          </div>
        </div>

        {/* Blog 2 */}
        <div className="w-full max-w-[393px] mx-auto fade-in">
          <Link href="/blog">
            <Image
              src="/Rectangle 14.png"
              alt="Outdoor bar table and stool"
              width={400}
              height={400}
              className="object-cover rounded-[10px] w-full h-[354px]"
            />
          </Link>
          <h3 className="mt-5 text-[#000000] text-center font-poppins text-[20px] font-normal">
            Going all-in with millennial design
          </h3>
          <div className="mt-3 text-center">
            <a
              href="/blog"
              className="font-medium text-[#000000] text-[20px] border-b-2 border-[#000000] pb-[9px]"
            >
              Read More
            </a>
            <div className="flex items-center mt-6 space-x-2 justify-center">
              <FaRegClock className="text-[#000000] w-[18px] h-[18px]" />
              <p className="text-[#000000] pr-4">5 min</p>
              <CiCalendar className="text-[#000000] w-[22px] h-[22px]" />
              <p className="text-[#000000]">12th Oct 2022</p>
            </div>
          </div>
        </div>

        {/* Blog 3 */}
        <div className="w-full max-w-[393px] mx-auto fade-in">
          <Link href="/blog">
            <Image
              src="/Rectangle 15.png"
              alt="Plain console with teak mirror"
              width={400}
              height={400}
              className="object-cover rounded-[10px] w-full h-[354px]"
            />
          </Link>
          <h3 className="mt-5 text-[#000000] text-center font-poppins text-[20px] font-normal">
            Going all-in with millennial design
          </h3>
          <div className="mt-3 text-center">
            <a
              href="/blog"
              className="font-medium text-[#000000] text-[20px] border-b-2 border-[#000000] pb-[9px]"
            >
              Read More
            </a>
            <div className="flex items-center mt-6 space-x-2 justify-center">
              <FaRegClock className="text-[#000000] w-[18px] h-[18px]" />
              <p className="text-[#000000] pr-4">5 min</p>
              <CiCalendar className="text-[#000000] w-[22px] h-[22px]" />
              <p className="text-[#000000]">12th Oct 2022</p>
            </div>
          </div>
        </div>
      </div>

      {/* View All Posts Button */}
      <Link href="/blog">
        <div className="text-center py-[66px] fade-in">
          <button className="text-center font-poppins text-[18px] font-medium text-[#000000] border-b-2 border-[#000000] pb-3">
            View All Posts
          </button>
        </div>
      </Link>
    </div>
  );
};

export default OurBlogs;
