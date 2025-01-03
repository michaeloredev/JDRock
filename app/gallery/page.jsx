'use client';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const images = [
  '/gall01.jpg',
  '/gall02.jpg',
  '/gall03.jpg',
  '/gall04.jpg',
  '/gall05.jpg',
  '/gall06.jpg',
  '/gall07.jpg',
  '/gall07a.jpg',
  '/gall08.jpg',
  '/gall09.jpg',
  '/gall10.jpg',
  '/gall11.jpg',
  '/gall12.jpg',
  '/gall13.jpg',

];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
    
      <div className="container mx-auto py-8 bg-gray-500 bg-opacity-80 rounded-lg my-8 px-8" >
        <h1 className="arvo-bold text-white text-3xl font-bold mb-4">Gallery</h1>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((imgSrc, index) => (
            <div
              key={index}
              className="cursor-pointer rounded shadow hover:shadow-lg transition"
              onClick={() => openModal(imgSrc)}
            >
            <div className="relative w-full h-48">
                <Image
                  src={imgSrc}
                  alt={`Gallery Image ${index + 1}`}
                  fill
                  className="object-cover rounded"
                  // You can optionally specify priority={true} for above-the-fold images
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-70"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded shadow-lg relative"
            // Stop click from closing the modal if user clicks inside the modal
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-[-18px] right-1 text-gray-600 hover:text-gray-900 font-bold text-6xl"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
