import React from "react";
import Image from "next/image";
import Link from "next/link";

const Productpage = () => {
  const items = [
    {
      Name: "Trenton Modular Sofa_3",
      Price: "Rs. 25,000.00",
      Image: "/Bed.png",
    },
    {
      Name: "Granite Dining Table with Dining Chair",
      Price: "Rs. 25,000.00",
      Image: "/Chairs.png",
    },
    {
      Name: "Outdoor Bar Table and Stool",
      Price: "Rs. 25,000.00",
      Image: "/Bartable.png",
    },
    {
      Name: "Plain Console with Teak Mirror",
      Price: "Rs. 25,000.00",
      Image: "/Mirror.png",
    },
  ];

  return (
    <div className="w-full h-auto bg-[#F3F4F6] py-[50px] px-4">
      {/* Title Section */}
      <div className="w-full text-center mb-[30px]">
        <h1 className="font-poppins text-[36px] md:text-[40px] font-medium text-[#000000]">
         Related Products
        </h1>
        <p className="font-poppins text-[16px] md:text-[18px] font-medium text-[#9F9F9F] mt-[10px] max-w-[800px] mx-auto">
          Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
      </div>

      {/* Horizontal Scrollable Section */}
      <div className="w-full overflow-x-auto">
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-[20px] px-[10px] sm:px-[20px] md:px-[50px] justify-center sm:justify-start">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-10/12 lg:w-1/4 bg-[#FFFFFF] rounded-md shadow-lg p-[20px] text-center"
            >
              {/* Image Section */}
              <Image
                src={item.Image}
                alt={item.Name}
                width={200}
                height={200}
                className="w-full h-[200px] object-cover rounded-md"
              />

              {/* Item Details */}
              <div className="mt-[20px]">
                <h2 className="text-[18px] md:text-[20px] font-semibold text-[#000000]">
                  {item.Name}
                </h2>
                <p className="text-[16px] md:text-[18px] font-medium text-[#000000] mt-[5px]">
                  {item.Price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <div className="w-full text-center mt-[50px] md:pr-20">
        <Link href="/shop">
          <button className="w-[154px] h-[50px] bg-amber-200 hover:bg-amber-100 font-poppins text-nowrap text-[18px] md:text-[20px] font-medium text-[#000000] mx-auto border-2 border-[#000000] py-2 px-4 rounded-[5px]">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Productpage;
