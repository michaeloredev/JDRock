"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

// Photo grid per project, with a shared lightbox that steps through every photo
export default function Gallery({ projects }) {
  const photos = projects.flatMap((p) => p.photos.map((photo) => ({ ...photo, project: p.title })));
  const [index, setIndex] = useState(null);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  const open = (src, trigger) => {
    triggerRef.current = trigger;
    setIndex(photos.findIndex((p) => p.src === src));
  };
  const close = () => dialogRef.current?.close();
  const step = useCallback(
    (delta) => setIndex((i) => (i + delta + photos.length) % photos.length),
    [photos.length]
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (index !== null && dialog && !dialog.open) dialog.showModal();
  }, [index]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  };

  const current = index !== null ? photos[index] : null;

  return (
    <>
      {projects.map((project) => (
        <section key={project.id} aria-labelledby={project.id} className="mb-14 last:mb-0">
          <h2 id={project.id} className="font-heading text-2xl font-bold text-brand-800 md:text-3xl">
            {project.title}
          </h2>
          <p className="mt-2 text-lg text-stone-600">{project.description}</p>
          <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {project.photos.map((photo) => (
              <li key={photo.src}>
                <button
                  type="button"
                  onClick={(e) => open(photo.src, e.currentTarget)}
                  className="group relative block aspect-[4/3] w-full overflow-hidden rounded-lg bg-stone-200 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {/* Native <dialog> provides focus trapping, Escape to close, and focus restore */}
      <dialog
        ref={dialogRef}
        onClose={() => {
          setIndex(null);
          triggerRef.current?.focus();
        }}
        onKeyDown={onKeyDown}
        onClick={(e) => e.target === dialogRef.current && close()}
        aria-label="Photo viewer"
        className="m-0 h-full max-h-none w-full max-w-none bg-black/95 p-0 backdrop:bg-black/80"
      >
        {current && (
          <div className="flex h-full flex-col" onClick={(e) => e.target === e.currentTarget && close()}>
            <div className="flex items-center justify-between px-4 py-3 text-white">
              <p className="text-sm text-stone-300">
                {index + 1} / {photos.length}
              </p>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="rounded-full p-2 text-2xl hover:bg-white/10"
              >
                <FaTimes aria-hidden="true" />
              </button>
            </div>

            <div className="relative min-h-0 flex-1" onClick={(e) => e.target === e.currentTarget && close()}>
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-xl text-white hover:bg-black/70 md:left-4"
              >
                <FaChevronLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-xl text-white hover:bg-black/70 md:right-4"
              >
                <FaChevronRight aria-hidden="true" />
              </button>
            </div>

            <div className="px-4 py-4 text-center text-white">
              <p className="font-medium">{current.alt}</p>
              <p className="mt-1 text-sm text-stone-400">{current.project}</p>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
