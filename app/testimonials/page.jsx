import { FaQuoteLeft } from "react-icons/fa";
import ExpandableQuote from "@/components/ExpandableQuote";
import CallToAction from "@/components/ui/CallToAction";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
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
      </Section>

      <CallToAction
        title="Join our happy customers"
        text="Tell us about your project and get a free, no-pressure estimate."
      />
    </>
  );
}
