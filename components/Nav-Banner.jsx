
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import checkList from "@/public/images/checklist-icon.png";

export default function NavBanner() {



  return (
    <>
      <div className="w-full h-[200px] bg-black relative">
        {/* Background Image Layer */}
        <div className="absolute inset-0 bg-[url('/images/banner-bg-BW.jpg')] bg-cover bg-center opacity-50"></div>

        {/* Text Layer */}
        <div className="relative flex items-center justify-between  h-full">
          <h1 className="text-8xl ml-24 text-white matrix-OL [text-shadow:_2px_5px_2px_rgb(0_0_0_/_40%)]">
            J.D. Rock
          </h1>
          <h2 className="text-4xl mr-24 text-white arvo [text-shadow:_2px_5px_2px_rgb(0_0_0_/_40%)]">
            Custom Home Improvement
          </h2>
        </div>
      </div>
      <div className="h-[75px] bg-green-800 flex items-center justify-between px-12">
        <div className="flex">
          <Link href="/"  className="text-white arvo text-xl px-8">
            Home
          </Link>
          <Link href="/about" className="text-white arvo text-xl px-8">
            About
          </Link>
          <Link href="/services" className="text-white arvo text-xl px-8">
            Services
          </Link>
          <Link href="/pages/process" className="text-white arvo text-xl px-8">
            Process
          </Link>
          <Link href="/pages/gallery" className="text-white arvo text-xl px-8">
            Gallery
          </Link>
          <Link href="/pages/testimonials" className="text-white arvo text-xl px-8">
            Testimonials
          </Link>
        </div>
        <Image src={checkList} alt="checklist icon" width={40} />
      </div>
    </>
  );
}
