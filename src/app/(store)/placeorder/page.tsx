import { CheckCircleIcon } from "lucide-react";
import "animate.css";
import Link from "next/link";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-600 to-purple-700 flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-xl shadow-2xl max-w-md w-full text-center animate__animated animate__fadeIn animate__delay-1s">
        <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto mb-6 animate__animated animate__bounceIn animate__delay-2s" />
        <h1 className="text-4xl font-bold mb-4 text-gray-800 animate__animated animate__fadeIn animate__delay-3s">
          Thank You for Shopping!
        </h1>
        <p className="text-lg text-gray-600 mb-8 animate__animated animate__fadeIn animate__delay-4s">
          Your order has been successfully placed. Come and visit again!
        </p>
        <Link href="/">
<button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-xl transition duration-300 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-5s">
  Continue Shopping
</button>
</Link>
      </div>
    </div>
  );
};

export default ThankYouPage;




