"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Divide as Hamburger } from "hamburger-react";

export default function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Hamburger
        rounded
        size={30}
        toggled={isOpen}
        toggle={setOpen}
        className="flex left-4"
      />
      {String(isOpen)}
      <div
        className={`absolute flex flex-col bg-red-500 h-full top-[150px] w-60 left-0 transform transition-transform duration-300 ease-in-out z-10 ${
          isOpen ? "-translate-x-0" : "-translate-x-60"
        }`}
      >
        <Link href="/" onClick={handleClose} className="text-white arvo text-xl px-8 my-4">
          Home
        </Link>
        <Link href="/about"  onClick={handleClose} className="text-white arvo text-xl px-8 my-4">
          About
        </Link>
        <Link href="/services" onClick={handleClose} className="text-white arvo text-xl px-8 my-4">
          Services
        </Link>
        <Link
          href="/pages/process"
          className="text-white arvo text-xl px-8 my-4"
        >
          Process
        </Link>
        <Link
          href="/pages/gallery"
          className="text-white arvo text-xl px-8 my-4"
        >
          Gallery
        </Link>
        <Link
          href="/pages/testimonials"
          className="text-white arvo text-xl px-8 my-4"
        >
          Testimonials
        </Link>
      </div>
    </>
  );
}
