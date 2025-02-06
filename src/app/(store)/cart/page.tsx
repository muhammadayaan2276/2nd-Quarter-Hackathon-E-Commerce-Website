"use client";

import Service from "@/components/Service";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext"; // Import the custom hook

export default function Cart() {
  const { items, updateQty, removeFromCart } = useCart(); // Use items, updateQty, and removeFromCart from context
  console.log(items)
  // Calculate Subtotal and Total
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <div className="relative w-full h-[300px] md:h-[390px] overflow-hidden">
                 {/* Background Image */}
                 <Image src="/Rectangle 1.png" alt="shop background" layout="fill" objectFit="cover" />
         
                 {/* Centered Content */}
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                   {/* Logo */}
                   <Image src="/Meubel House_Logos-05.png" alt="logo" height={46} width={140} className="mx-auto -mb-4" />
         
                   {/* Shop Text */}
                   <h1 className="text-4xl md:text-6xl text-[#000000] font-medium mb-5">Cart</h1>
         
                   <div className="flex justify-center items-center text-lg pb-16">
                   <Link href="/">
                  <h3 className="font-medium text-[14px] md:text-[16px] font-poppins text-[#000000]">Home</h3>
                  </Link>
                     <MdKeyboardArrowRight className="mx-2 w-[16px] md:w-[20px] h-[16px] md:h-[20px] text-[#000000]" />
                     <h3 className='font-poppins text-[14px] md:text-[16px] font-[300] text-[#000000]'>Cart</h3>
                   </div>
                 </div>
               </div>
      <div className="flex justify-center items-center mx-auto px-2 sm:px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Product Table for Large Screens */}
            <div className="hidden sm:block lg:col-span-2 bg-white shadow-md rounded-lg">
              {items.length > 0 ? (
                <table className="w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-yellow-100">
                      <th className="text-left py-4 px-6 text-gray-600 font-medium">
                        Product
                      </th>
                      <th className="text-left py-4 px-6 text-gray-600 font-medium">
                        Price
                      </th>
                      <th className="text-left py-4 px-6 text-gray-600 font-medium">
                        Quantity
                      </th>
                      <th className="text-left py-4 px-6 text-gray-600 font-medium">
                        Subtotal
                      </th>
                      <th className="text-left py-4 px-6 text-gray-600 font-medium">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id} className="border-b border-gray-200">
                        <td className="py-4 px-6 flex items-center">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={64}
                            height={64}
                            className="rounded"
                          />
                          <span className="ml-4 text-gray-700">{item.name}</span>
                        </td>
                        <td className="py-4 px-6 text-gray-700">
                         $ {item.price.toLocaleString()}
                        </td>
                        <td className="py-4 px-6">
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQty(item.id, parseInt(e.target.value))
                            }
                            className="w-16 border border-gray-300 rounded p-1 text-center"
                          />
                        </td>
                        <td className="py-4 px-6 text-gray-700">
                          $ {(item.price * item.quantity).toLocaleString()}
                        </td>
                        <td className="py-4 px-6 text-red-500 cursor-pointer">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:underline"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-center text-gray-700 py-6">
                  Your cart is empty.
                </p>
              )}
            </div>

            {/* Product Cards for Mobile */}
            <div className="sm:hidden">
              {items.length > 0 ? (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-morelightyellow shadow-md rounded-lg mb-4"
                  >
                    <div className="flex p-5 space-y-4 flex-col xs:flex-row justify-center items-center">
                      <div>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="rounded bg-lightyellow"
                        />
                      </div>
                      <div className="space-y-2 px-5 w-full">
                        <div className="flex justify-between gap-4">
                          <p>Product:</p>
                          <p>{item.name}</p>
                        </div>
                        <div className="flex justify-between gap-4">
                          <p>Price:</p>
                          <p> $ {item.price.toLocaleString()}</p>
                        </div>
                        <div className="flex justify-between gap-4">
                          <p>Quantity:</p>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQty(item.id, parseInt(e.target.value))
                            }
                            className="w-16 border border-gray-300 rounded p-1 text-center"
                          />
                        </div>
                        <div className="flex justify-between gap-4">
                          <p>Subtotal:</p>
                          <p> $ {(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:underline text-sm mt-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-700 py-6">
                  Your cart is empty.
                </p>
              )}
            </div>

            {/* Cart Totals */}
            <div className="bg-morelightyellow shadow-md rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-700 border-b pb-4 mb-4">
                Cart Totals
              </h2>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Subtotal</span>
                <span> $ {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-darkyellow font-bold text-lg">
                <span>Total</span>
                <span> $ {subtotal.toLocaleString()}</span>
              </div>
              <Link href={"/checkout"}>
                <button className="mt-6 w-full bg-lightyellow hover:bg-darkyellow text-black py-3 px-4 rounded shadow">
                  Check Out
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Service />
    </div>
  );
}
