'use client'
import Service from "@/components/Service";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useCart } from "@/context/CartContext";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import CheckoutForm from "@/components/check";


type FormData = {
  firstName: string;
  lastName: string;
  companyName?: string;
  country: string;
  streetAddress: string;
  city: string;
  province: string;
  zipCode: string;
  phone: string;
  email: string;
  additionalInfo?: string;
};
export default function CheckOut() {
  const { items } = useCart();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted:", data);
  };

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const formatPrice = (price: number) => price.toFixed(2);
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
                   <h1 className="text-4xl md:text-6xl text-[#000000] font-medium mb-5">Checkout</h1>
         
                   <div className="flex justify-center items-center text-lg pb-16">
                   <Link href="/">
                  <h3 className="font-medium text-[14px] md:text-[16px] font-poppins text-[#000000]">Home</h3>
                  </Link>
                     <MdKeyboardArrowRight className="mx-2 w-[16px] md:w-[20px] h-[16px] md:h-[20px] text-[#000000]" />
                     <h3 className='font-poppins text-[14px] md:text-[16px] font-[300] text-[#000000]'>Checkout</h3>
                   </div>
                 </div>
               </div>
      <div className="flex justify-center items-center mx-auto px-4 sm:px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Billing Details */}
         <CheckoutForm/>

          {/* Order Summary */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Product
              </h2>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Sub Total
              </h2>
            </div>

            <div className="border-b pb-4 mb-4">
              {/* Display Cart Items */}
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-gray-700"
                >
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>$ {formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}

              <div className="flex justify-between text-gray-700 mt-2">
                <span>Subtotal</span>
                <span>$ {formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-gray-700 font-bold text-lg mt-2">
                <span>Total</span>
                <span className="text-darkyellow">
                  $ {formatPrice(subtotal)}
                </span>
              </div>
            </div>

            {/* Payment Options */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                <input type="radio" name="payment" className="mr-2" /> Direct Bank Transfer
              </label>
              <p className="text-sm text-gray-600 mb-4">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
              </p>
              <label className="block text-gray-700 mb-2">
                <input type="radio" name="payment" className="mr-2" /> Check Payments
              </label>
              <p className="text-sm text-gray-600 mb-4">
                Please send a check to the store address. Once your check is received, your order will be processed.
              </p>
            </div>

            {/* Terms and Conditions */}
            <div className="mb-4 flex items-center">
              <input type="checkbox" className="mr-2" /> I agree to the{" "}
              <span className="text-blue-600">Terms and Conditions</span>
            </div>


            <button
            
              className="w-full bg-darkyellow hover:bg-lightyellow text-black py-3 px-4 rounded shadow"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
      <Service />
    </div>
  );
}
