"use client";

import { useState, useEffect } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import { SearchCommand } from "@/components/SearchBar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CartDropDown from "@/components/CartDropDown";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";


export default function Navbar() {
  const { isSignedIn } = useUser();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-10 w-full mx-auto max-w-screen-xl px-6 md:px-16 lg:px-32  ${
        isScrolled
          ? "bg-amber-200 shadow-lg backdrop-blur-md"
          : "bg-amber-200"
      }`}
    >
      <div className="flex items-center justify-between h-16">
        {/* Left: Logo */}
        <Link href="/" className="text-lg font-bold text-gray-900">
          <Image src={"/logo.png"} alt="Logo" width={50} height={50} />
        </Link>

        {/* Middle: Navigation Links */}
        <nav className="hidden md:flex gap-x-8">
          <Link href="/" className="text-gray-800 hover:text-black">
            Home
          </Link>
          <Link href="/shop" className="text-gray-800 hover:text-black">
            Shop
          </Link>
          <Link href="/blog" className="text-gray-800 hover:text-black">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-black">
            Contact
          </Link>
        </nav>

        {/* Right: Icons */}
        <div className="flex items-center space-x-6">
          {/* Account */}
          {!isSignedIn ? (
            <SignInButton />
          ) : (
            <div className="flex justify-center items-center gap-2">
              <UserButton />
            </div>
          )}

          {/* Search */}
          <SearchCommand />

          {/* Wishlist */}
          <Link href="/wishlist" className="text-gray-800 hover:text-black">
            <IoMdHeartEmpty size={22} />
          </Link>

          {/* Cart */}
          <Sheet>
            <SheetTrigger>
              <IoCartOutline size={22} className="text-gray-800 hover:text-black" />
            </SheetTrigger>
            <SheetContent>
              <CartDropDown />
            </SheetContent>
          </Sheet>

          {/* Hamburger Menu for Mobile */}
          <div className=" flex flex-col h-full justify-between py-6">
          <Sheet>
            <SheetTrigger>
              <RxHamburgerMenu size={22} className="text-gray-800 hover:text-black md:hidden" />
            </SheetTrigger>
            <SheetContent className="p-4 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
            <ul className="flex flex-col gap-8 items-center text-white">
            <li>
              <Link
                href="/"
                className="text-2xl  font-semibold hover:text-black transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="text-2xl font-semibold  hover:text-black transition duration-300"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-2xl font-semibold  hover:text-black transition duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-2xl font-semibold  hover:text-black transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      </div>
    </header>
    
  );
}
