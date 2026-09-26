"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Divide as Hamburger } from "hamburger-react";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "@/components/ui/Button";
import mountain from "@/public/images/Mountain.svg";
import { navLinks, site } from "@/lib/site";

const isActive = (pathname, href) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);

  // Close the mobile menu on navigation or Escape
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 md:h-20">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label={`${site.name} home`}>
          <Image src={mountain} alt="" className="h-8 w-auto md:h-10" priority />
          <span className="flex flex-col leading-none">
            <span className="font-display text-2xl text-brand-700 md:text-3xl">
              {site.shortName}
            </span>
            <span className="mt-1 hidden text-xs font-medium uppercase tracking-wider text-stone-500 sm:block lg:hidden xl:block">
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const active = isActive(pathname, href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-brand-50 text-brand-700"
                        : "text-stone-700 hover:bg-stone-100 hover:text-brand-700"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.phone}`}
            className="flex items-center gap-2 whitespace-nowrap rounded-md px-2 py-2 font-semibold text-brand-700 hover:bg-brand-50"
          >
            <FaPhoneAlt aria-hidden="true" />
            <span className="hidden sm:inline lg:hidden xl:inline">{site.phone}</span>
          </a>
          <Button href="/contact" variant="accent" size="sm" className="hidden md:inline-flex">
            Free Estimate
          </Button>
          <div className="lg:hidden">
            <Hamburger
              rounded
              size={24}
              toggled={isOpen}
              toggle={setOpen}
              color="#005524"
              label="Toggle menu"
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        aria-label="Mobile"
        className={`overflow-hidden border-stone-200 bg-white transition-[max-height] duration-300 ease-in-out lg:hidden ${
          isOpen ? "max-h-[32rem] border-t" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-4 py-3 sm:px-6">
          {navLinks.map(({ href, label }) => {
            const active = isActive(pathname, href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  tabIndex={isOpen ? 0 : -1}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-md px-3 py-3 text-lg font-medium ${
                    active ? "bg-brand-50 text-brand-700" : "text-stone-800 hover:bg-stone-100"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li className="mt-3 md:hidden">
            <Button href="/contact" variant="accent" className="w-full" tabIndex={isOpen ? 0 : -1}>
              Get a Free Estimate
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
