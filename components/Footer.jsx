import Link from "next/link";
import Image from "next/image";
import { FaGoogle, FaMapMarkerAlt, FaPhoneAlt, FaShieldAlt } from "react-icons/fa";
import mountain from "@/public/images/Mountain.svg";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      {/* Mountain base is the same green as the footer, so it rises out of it */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Image src={mountain} alt="" className="ml-auto block h-auto w-48 translate-y-px md:w-72" />
      </div>

      <div className="bg-brand-700 text-brand-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl text-white">{site.shortName}</p>
            <p className="mt-1 text-sm uppercase tracking-wider text-brand-200">{site.tagline}</p>
            <p className="mt-4 italic text-brand-100">&ldquo;{site.motto}&rdquo;</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-heading text-lg font-bold text-white">Explore</h2>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-brand-100 hover:text-white hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-heading text-lg font-bold text-white">Get in touch</h2>
            <ul className="mt-3 space-y-3">
              <li>
                <a href={site.phoneHref} className="flex items-center gap-3 font-semibold text-white hover:underline">
                  <FaPhoneAlt aria-hidden="true" className="text-accent" />
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt aria-hidden="true" className="text-accent" />
                {site.serviceArea}
              </li>
              <li className="flex items-center gap-3">
                <FaShieldAlt aria-hidden="true" className="text-accent" />
                {site.warranty}
              </li>
              <li>
                <a
                  href={site.reviewPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:underline"
                >
                  <FaGoogle aria-hidden="true" className="text-accent" />
                  Leave us a Google review
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-600">
          <p className="mx-auto max-w-6xl px-4 py-5 text-sm text-brand-200 sm:px-6">
            &copy; {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
