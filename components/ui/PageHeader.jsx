export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <header className="border-b border-stone-200 bg-stone-100">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14">
        {eyebrow && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-600">
            {eyebrow}
          </p>
        )}
        <h1 className="font-heading text-3xl font-bold text-brand-800 md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-stone-600">{subtitle}</p>
        )}
      </div>
    </header>
  );
}
