"use client";

import Link from "next/link";
import Service from "@/components/Service";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useWishlist } from "@/context/CartContext"; // Assuming you've created WishlistContext for global state management
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import { WishlistItem } from "@/context/CartContext";

export default function MyAccount() {
  const { items, removeFromWishlist } = useWishlist();

  return (
    <div className="">
      <div className="relative w-full h-[300px] md:h-[390px] overflow-hidden">
                 {/* Background Image */}
                 <Image src="/Rectangle 1.png" alt="shop background" layout="fill" objectFit="cover" />
         
                 {/* Centered Content */}
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                   {/* Logo */}
                   <Image src="/Meubel House_Logos-05.png" alt="logo" height={46} width={140} className="mx-auto -mb-4" />
         
                   {/* Shop Text */}
                   <h1 className="text-4xl md:text-6xl text-[#000000] font-medium mb-5">Wishlist</h1>
         
                   <div className="flex justify-center items-center text-lg pb-16">
                   <Link href="/">
                  <h3 className="font-medium text-[14px] md:text-[16px] font-poppins text-[#000000]">Home</h3>
                  </Link>
                     <MdKeyboardArrowRight className="mx-2 w-[16px] md:w-[20px] h-[16px] md:h-[20px] text-[#000000]" />
                     <h3 className='font-poppins text-[14px] md:text-[16px] font-[300] text-[#000000]'>Wishlist</h3>
                   </div>
                 </div>
               </div>

      {/* Wishlist Section */}
      <div className="mt-12 flex flex-col items-center justify-center space-y-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Your Wishlist
        </h2>
        <div className="flex w-full justify-center items-center px-4 sm:px-6 md:px-12">
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {items.length > 0 ? (
              items.map((item: WishlistItem) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
                >
                  {/* Image Section */}
                  <div className="relative h-[250px] flex justify-center items-center bg-lightgray rounded-t-lg overflow-hidden group">
                    <Link
                      href={`/shop/${item.id}`}
                      className="absolute inset-0"
                    >
                      <Image
                        src={item.image}
                        alt={item.name || "Product Image"}
                        className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-200"
                        width={600} // Set the image width
                        height={600} // Set the image height
                      />
                    </Link>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-red-100 transition duration-200"
                      title="Remove from Wishlist"
                    >
                      <FaHeart className="text-red-500 group-hover:text-red-600" />
                    </button>
                  </div>
                  {/* Product Info */}
                  <div className="p-5 text-center">
                    <h3 className="font-semibold text-xl text-gray-900 truncate">
                      {item.name}
                    </h3>
                    <p className="text-lg text-gray-600 mt-2">${item.price}</p>
                    <div className="mt-4">
                      <Link
                        href={`/shop/${item.id}`}
                        className="text-indigo-600 hover:text-indigo-800 font-medium text-sm"
                      >
                        View Product
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center">
                <p className="text-amber-200 font-normal text-lg">
                  Your wishlist is empty. Start adding some favorites!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
<br />
<br />
<br />
      {/* Service Section */}
      <Service />
    </div>
  );
}
