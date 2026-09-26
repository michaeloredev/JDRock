import { FaGoogle, FaQuoteLeft } from "react-icons/fa";
import ExpandableQuote from "@/components/ExpandableQuote";
import Button from "@/components/ui/Button";
import CallToAction from "@/components/ui/CallToAction";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import { site } from "@/lib/site";
import { testimonials } from "@/lib/testimonials";

export const metadata = {
  title: "Testimonials",
  description:
    "What homeowners across Frederick County say about working with J.D. Rock Custom Home Improvements.",
};

export default function TestimonialPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="In our customers' words"
        subtitle="Homeowners from Frederick, Thurmont, Hagerstown, and beyond on what it's like to work with J.D. Rock."
      />

      <Section>
        {/* CSS columns give a masonry layout for quotes of varying length */}
        <ul className="gap-6 md:columns-2 lg:columns-3">
          {testimonials.map(({ id, name, location, quote }) => (
            <li key={id} className="mb-6 break-inside-avoid">
              <figure className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
                <FaQuoteLeft aria-hidden="true" className="mb-3 text-2xl text-accent" />
                <ExpandableQuote text={quote} />
                <figcaption className="mt-4 border-t border-stone-100 pt-4">
                  <span className="block font-semibold text-brand-800">{name}</span>
                  <span className="block text-sm text-stone-500">{location}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-lg border border-stone-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center md:p-8">
          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-800">Worked with us?</h2>
            <p className="mt-2 text-lg text-stone-600">
              We&apos;d be grateful if you shared your experience on Google.
            </p>
          </div>
          <Button
            href={site.reviewPath}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
          >
            <FaGoogle aria-hidden="true" />
            Leave a Google review
            <span className="sr-only">(opens in a new tab)</span>
          </Button>
        </div>
      </Section>

      <CallToAction
        title="Join our happy customers"
        text="Tell us about your project and get a free, no-pressure estimate."
      />
    </>
  );
}
