import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaHandshake,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaQuoteLeft,
  FaShieldAlt,
} from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import ContactForm from "@/components/ContactForm.jsx";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { featuredTestimonialIds, testimonials } from "@/lib/testimonials";
import heroImage from "@/public/gall08.jpg";
import introImage from "@/public/gall07.jpg";

const highlights = [
  { icon: FaHandshake, title: "One call does it all", text: "Smallest repair to largest remodel" },
  { icon: FaShieldAlt, title: "5-year warranty", text: "On all of our workmanship" },
  { icon: TbRulerMeasure, title: "Free estimates", text: "Clear, fair, and no pressure" },
  { icon: FaMapMarkerAlt, title: "Local & trusted", text: "Serving Frederick County, MD" },
];

// One porch project, from footings to finished
const projectSteps = [
  { src: "/gall01.jpg", caption: "Footings & framing" },
  { src: "/gall05.jpg", caption: "Roof structure" },
  { src: "/gall07.jpg", caption: "Decking & trim" },
  { src: "/gall08.jpg", caption: "Finished screened porch" },
];

const featured = featuredTestimonialIds.map((id) => testimonials.find((t) => t.id === id));

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-950">
        <Image
          src={heroImage}
          alt="Screened-in back porch built by J.D. Rock"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="-z-10 object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950/90 via-brand-950/60 to-transparent" />
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-36">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Custom home improvement &middot; Frederick, MD
          </p>
          <h1 className="max-w-2xl font-heading text-4xl font-bold leading-tight text-white md:text-6xl">
            If it&apos;s in or on your home, we do it.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-stone-100 md:text-xl">
            Remodeling, additions, and repairs from one trusted local team. Quality materials and
            outstanding workmanship at an affordable price.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="accent" size="lg">
              Get a Free Estimate
            </Button>
            <Button href={site.phoneHref} variant="outline-light" size="lg">
              <FaPhoneAlt aria-hidden="true" />
              Call {site.phone}
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-b border-stone-200 bg-white">
        <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xl text-brand-700">
                <Icon aria-hidden="true" />
              </span>
              <span>
                <span className="block font-heading font-bold text-brand-800">{title}</span>
                <span className="block text-sm text-stone-600">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Owner's intro */}
      <Section innerClassName="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl font-bold text-brand-800 md:text-4xl">
            Your one call for every home project
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-stone-700">
            <p>
              J.D. Rock Custom Home Improvements is your best choice in Frederick and surrounding
              counties for all your remodeling and repair needs. We pride ourselves on being able to
              handle your smallest to largest project or repair. Our clients appreciate the fact
              that they only have to call one number to handle all their needs.
            </p>
            <p>
              We pride ourselves on using the highest quality materials, outstanding workmanship, at
              an affordable price. We look forward to the privilege of serving you now and in the
              future with all your home improvement needs.
            </p>
          </div>
          <p className="mt-6 font-heading text-lg italic text-brand-700">
            &mdash; Christopher Ore, Owner
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
          <Image
            src={introImage}
            alt="Covered porch with new decking under construction"
            fill
            placeholder="blur"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </Section>

      {/* Services preview */}
      <Section tone="muted">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="font-heading text-3xl font-bold text-brand-800 md:text-4xl">
              What we do
            </h2>
            <p className="mt-3 max-w-xl text-lg text-stone-600">
              From a single repair to a whole-house renovation, handled by one team.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:underline"
          >
            All services <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map(({ slug, title, summary, icon: Icon }) => (
            <li key={slug}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <Icon aria-hidden="true" className="text-3xl text-brand-600" />
                <h3 className="mt-4 font-heading text-xl font-bold text-stone-900">{title}</h3>
                <p className="mt-2 text-stone-600">{summary}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      {/* Project walkthrough */}
      <Section>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="font-heading text-3xl font-bold text-brand-800 md:text-4xl">
              From footings to finished
            </h2>
            <p className="mt-3 max-w-xl text-lg text-stone-600">
              One recent project: a covered, screened-in porch built from the ground up.
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:underline"
          >
            View the gallery <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projectSteps.map(({ src, caption }, i) => (
            <li key={src}>
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow">
                  <Image
                    src={src}
                    alt={caption}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 flex items-center gap-3 font-medium text-stone-800">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  {caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ol>
      </Section>

      {/* Testimonials */}
      <Section tone="brand">
        <h2 className="font-heading text-3xl font-bold md:text-4xl">What our customers say</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featured.map(({ id, name, location, quote }, i) => (
            <figure
              key={id}
              className={`rounded-lg bg-white p-6 text-stone-800 shadow-lg ${i === 0 ? "lg:col-span-2 md:p-8" : ""}`}
            >
              <FaQuoteLeft aria-hidden="true" className="text-2xl text-accent" />
              <blockquote className={`mt-3 leading-relaxed ${i === 0 ? "text-lg md:text-xl" : ""}`}>
                {quote}
              </blockquote>
              <figcaption className="mt-4 font-semibold text-brand-800">
                {name} <span className="font-normal text-stone-500">&middot; {location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <Link
          href="/testimonials"
          className="mt-8 inline-flex items-center gap-2 font-semibold text-white hover:underline"
        >
          Read more reviews <FaArrowRight aria-hidden="true" />
        </Link>
      </Section>

      {/* Estimate request */}
      <Section tone="muted" innerClassName="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="font-heading text-3xl font-bold text-brand-800 md:text-4xl">
            Get your free estimate
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Tell us about your project and we&apos;ll get back to you. Consultations and estimates
            are always free, with no pressure.
          </p>
          <ul className="mt-8 space-y-4 text-stone-800">
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-xl font-semibold text-brand-700 hover:underline"
              >
                <FaPhoneAlt aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt aria-hidden="true" className="text-brand-600" />
              {site.serviceArea}
            </li>
            <li className="flex items-center gap-3">
              <FaShieldAlt aria-hidden="true" className="text-brand-600" />
              {site.warranty}
            </li>
          </ul>
        </div>
        <Card className="lg:col-span-3 md:p-8">
          <ContactForm />
        </Card>
      </Section>
    </>
  );
}
