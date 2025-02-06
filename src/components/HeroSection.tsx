import Image from "next/image";
import Link from "next/link";
import "animate.css";  // Importing animate.css for animations

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-[#A2C2E4] via-[#B8E4D8] to-[#D0F0C0] w-full pt-32 md:pt-0 flex flex-col md:flex-row justify-center items-center min-h-screen mx-auto px-4 sm:px-6 md:px-16 lg:px-32 lg:w-full">
      {/* Text Section */}
      <div className="text-center md:text-left md:pl-8 w-full animate__animated animate__fadeIn animate__delay-1s">
        <h1 className="text-4xl md:text-6xl font-light text-gray-800 animate__animated animate__fadeIn animate__delay-2s">
          Rocket Single Seater
        </h1>
        <p className="text-lg text-gray-600 pt-12 animate__animated animate__fadeIn animate__delay-3s">
          <Link href="/shop">
            <span className="border-b border-gray-400">Shop Now</span>
          </Link>
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-8 md:mt-0 flex justify-center w-full animate__animated animate__fadeIn animate__delay-4s">
        <Image
          src="/hersofa.png"
          alt="Hero"
          width={1000}
          height={1000}
          priority
        />
      </div>
    </section>
  );
}
