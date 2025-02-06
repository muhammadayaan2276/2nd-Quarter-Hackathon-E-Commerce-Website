'use client'
import React, { useState } from "react";

const FAQAndHelpCenter = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What materials are used to craft your furniture?",
      answer: "Our furniture is made from high-quality materials like solid wood, engineered wood, and premium metals, ensuring durability and elegance.",
    },
    {
      question: "How do I maintain the quality of my wooden furniture?",
      answer: "Wipe with a damp cloth, avoid direct sunlight, and use coasters or mats to protect from water or heat damage.",
    },
    {
      question: "Do you offer customizable furniture designs?",
      answer: "Yes, we provide customizable furniture options. You can choose sizes, colors, and finishes to match your style.",
    },
    {
      question: "Is assembly required for the furniture, and do you provide assistance?",
      answer: "Some items require assembly. We provide detailed instructions, and professional assembly services are available upon request.",
    },
    {
      question: "What warranty do you offer on your furniture products?",
      answer: "We offer a 1-year warranty on all our furniture products, covering manufacturing defects and structural issues.",
    },
    {
      question: "Do you provide installation services after furniture delivery?",
      answer: "Yes, we provide professional installation services for an additional charge. Our team ensures your furniture is set up perfectly.",
    },
  ];

  const handleToggle = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-green-400 to-yellow-500 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white">
        Frequently Asked Questions
      </h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 bg-white rounded-lg p-4 hover:shadow-xl transition-all"
          >
            <button
              className="flex justify-between items-center w-full text-base sm:text-lg md:text-xl font-semibold text-gray-900"
              onClick={() => handleToggle(index)}
            >
              {faq.question}
              <span className="ml-2">
                {activeIndex === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </span>
            </button>
            {activeIndex === index && (
              <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAndHelpCenter;
