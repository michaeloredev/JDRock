import React from "react";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
// import Image from "next/image";
// import { motion } from "framer-motion";

// import checkList from "@/public/images/checklist-icon.png";

export default function NavBanner() {
  return (
    <>
      <div className="w-full h-[100px] md:h-[200px] bg-black relative">
        {/* Background Image Layer */}
        <div className="absolute inset-0 bg-[url('/images/banner-bg-BW.jpg')] bg-cover bg-center opacity-50"></div>

        {/* Text Layer */}
        <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-between  h-full">
          <div>
            <h1 className="text-4xl  text-white matrix-OL [text-shadow:_2px_5px_2px_rgb(0_0_0_/_40%)] md:text-8xl md:ml-24">
              J.D. Rock
            </h1>
          </div>
          <div>
            <h2 className="md:text-4xl md:mr-24 text-white arvo [text-shadow:_2px_5px_2px_rgb(0_0_0_/_40%)] ">
              Custom Home Improvement
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-column h-[50px] md:h-[75px] bg-green-800 flex items-center justify-between md:px-12 md:flex-row">

        <div className="hidden max-md:flex">
          <HamburgerMenu />
        </div>
        <div className="flex max-md:hidden">
          <Link href="/" className="flex text-white arvo text-xl lg:px-8 md:px-2 ">
            Home
          </Link>
          <Link href="/about" className="flex text-white arvo text-xl lg:px-8 md:px-2">
            About
          </Link>
          <Link href="/services" className="flex text-white arvo text-xl lg:px-8 md:px-2">
            Services
          </Link>
          <Link href="process" className="flex text-white arvo text-xl lg:px-8 md:px-2">
            Process
          </Link>
          <Link href="gallery" className="flex text-white arvo text-xl lg:px-8 md:px-2">
            Gallery
          </Link>
          <Link
            href="/pages/testimonials"
            className="flex text-white arvo text-xl px-2"
          >
            Testimonials
          </Link>
        </div>
        <div className="flex flex-nowrap text-white arvo text-xl px-2">
          <div>443-244-0484</div>
        </div>
      </div>



    </>
  );
}
