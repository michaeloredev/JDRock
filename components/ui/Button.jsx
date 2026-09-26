import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  primary:
    "bg-brand-700 text-white hover:bg-brand-600 focus-visible:outline-brand-700",
  accent:
    "bg-accent text-accent-ink hover:bg-accent-hover focus-visible:outline-accent",
  outline:
    "border-2 border-brand-700 text-brand-700 hover:bg-brand-50 focus-visible:outline-brand-700",
  "outline-light":
    "border-2 border-white/80 text-white hover:bg-white/10 focus-visible:outline-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-6 py-3 text-lg",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    // tel:/mailto:, redirects, and new-tab links don't go through the Next router
    if (!href.startsWith("/") || props.target === "_blank") {
      return (
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
