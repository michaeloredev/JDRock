"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Divide as Hamburger } from "hamburger-react";
import { FaHome, FaQuestionCircle, FaHammer } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { TbChartArrows } from "react-icons/tb";
import { AiFillPicture } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";

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
        color="#fff"
      />
      <div
        className={`absolute flex flex-col bg-green-800 bg-opacity-90 h-full top-[150px] w-full left-0 border-t-2  transform transition-transform duration-300 ease-in-out z-10 overflow-hidden ${
          isOpen ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center mt-6 mb-3">
          <div className="ml-4">
            <FaHome style={{ color: "white" }} size={24} />
          </div>
          <div>
            <Link
              href="/"
              onClick={handleClose}
              className="text-white arvo text-2xl px-2"
            >
              Home
            </Link>
          </div>
        </div>

        <div className="flex items-center my-3">
          <div className="ml-4">
            <MdPermContactCalendar style={{ color: "white" }} size={24} />
          </div>

          <Link
            href="/contact"
            onClick={handleClose}
            className="text-white arvo text-2xl px-2"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center my-3">
          <div className="ml-4">
            <FaQuestionCircle style={{ color: "white" }} size={24} />
          </div>
          <Link
            href="/about"
            onClick={handleClose}
            className="text-white arvo text-2xl px-2 "
          >
            About
          </Link>
        </div>

        <div className="flex items-center my-3">
          <div className="ml-4">
            <FaHammer style={{ color: "white" }} size={24} />
          </div>
          <Link
            href="/services"
            onClick={handleClose}
            className="text-white arvo text-2xl px-2 "
          >
            Services
          </Link>
        </div>

        <div className="flex items-center my-3">
          <div className="ml-4">
            <TbChartArrows style={{ color: "white" }} size={24} />
          </div>
          <Link href="/process" onClick={handleClose} className="text-white arvo text-2xl px-2 ">
            Process
          </Link>
        </div>

        <div className="flex items-center my-3">
          <div className="ml-4">
            <AiFillPicture style={{ color: "white" }} size={24} />
          </div>
          <Link href="/gallery" onClick={handleClose} className="text-white arvo text-2xl px-2 ">
            Gallery
          </Link>
        </div>

        <div className="flex items-center my-3">
          <div className="ml-4">
            <CgNotes style={{ color: "white" }} size={24} />
          </div>
          <Link href="/testimonials" onClick={handleClose} className="text-white arvo text-2xl px-2 ">
            Testimonials
          </Link>
        </div>
      </div>
    </>
  );
}
