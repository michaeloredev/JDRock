import React from "react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex justify-center md:flex-row md:justify-around mt-8 ">
        <div className="bg-gray-500 bg-opacity-80 w-11/12 p-6 rounded-lg text-white arvo text-xl ">
          <ContactForm />
        </div>
      </div>
  );
}
