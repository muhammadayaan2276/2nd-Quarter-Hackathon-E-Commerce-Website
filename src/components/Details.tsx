'use client'
import React from 'react';

const Detail = () => {
  return (
    <div className=" rounded-xl bg-gradient-to-br from-yellow-200 via-pink-300 to-blue-400 items-center justify-center px-4 py-6 sm:px-6 md:px-8">
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg max-w-4xl w-full">
        {/* Header Section */}
        <h2 className="text-3xl text-center font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-400">
          Product Details
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Discover the key features, specifications, and everything you need to know about this amazing product. Designed with high quality and user satisfaction in mind.
        </p>

        {/* Key Features Section */}
        <div className="mt-6">
          <p className="text-lg font-semibold text-indigo-600">Key Features:</p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
            <li>High-quality material for durability</li>
            <li>Lightweight and easy to carry</li>
            <li>Eco-friendly and sustainable packaging</li>
            <li>Perfect for all occasions and events</li>
          </ul>
        </div>

        {/* Additional Details Section */}
        <div className="mt-6">
          <p className="text-gray-700">
            This product is crafted with meticulous attention to detail, ensuring that it meets the highest standards of quality. Its lightweight design makes it perfect for daily use, while its durability ensures that it stands the test of time. Ideal for gifting or personal use.
          </p>
          <p className="mt-2 text-gray-700">
            If you're looking for a reliable, stylish, and eco-friendly product, this is the perfect choice for you.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-8">
          <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-600 transition-all duration-300">
            Buy Now
          </button>
        </div>

        {/* Customer Support Section */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Need help?{' '}
            <a
              href="#"
              className="text-teal-600 hover:underline hover:text-teal-800"
            >
              Contact our support team.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
