const tones = {
  default: "",
  muted: "bg-stone-100",
  brand: "bg-brand-700 text-white",
};

export default function Section({
  tone = "default",
  className = "",
  innerClassName = "",
  children,
  ...props
}) {
  return (
    <section className={`${tones[tone]} ${className}`} {...props}>
      <div className={`mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16 ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
