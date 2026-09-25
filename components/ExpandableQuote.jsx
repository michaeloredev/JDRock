"use client";

import { useId, useState } from "react";

// Clamps long quotes to a few lines with a Read more / Show less toggle
export default function ExpandableQuote({ text, threshold = 360 }) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();
  const isLong = text.length > threshold;

  return (
    <>
      <blockquote
        id={id}
        className={`leading-relaxed text-stone-700 ${isLong && !expanded ? "line-clamp-6" : ""}`}
      >
        {text}
      </blockquote>
      {isLong && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={id}
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 font-semibold text-brand-700 hover:underline"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </>
  );
}
