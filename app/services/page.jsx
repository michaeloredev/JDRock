import { FaShieldAlt } from "react-icons/fa";
import CallToAction from "@/components/ui/CallToAction";
import Card from "@/components/ui/Card";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import { services } from "@/lib/services";

export const metadata = {
  title: "Services",
  description:
    "Whole-house renovations, additions, dormers, kitchen and bath remodeling, exterior improvements, and window replacement in Frederick County, MD.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything in or on your home"
        subtitle="From a single repair to a whole-house renovation, one call to J.D. Rock handles it all."
      />

      <Section>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ slug, title, description, icon: Icon }) => (
            <li key={slug} id={slug} className="scroll-mt-24">
              <Card className="h-full">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-2xl text-brand-700">
                  <Icon aria-hidden="true" />
                </span>
                <h2 className="mt-4 font-heading text-xl font-bold text-stone-900">{title}</h2>
                <p className="mt-3 leading-relaxed text-stone-600">{description}</p>
              </Card>
            </li>
          ))}
          <li className="lg:col-span-2">
            <div className="flex h-full flex-col items-start justify-center gap-5 rounded-lg border-2 border-accent bg-amber-50 p-6 sm:flex-row sm:items-center md:p-8">
              <FaShieldAlt aria-hidden="true" className="shrink-0 text-5xl text-brand-700" />
              <div>
                <h2 className="font-heading text-2xl font-bold text-brand-800">
                  Backed by a 5-year warranty
                </h2>
                <p className="mt-2 text-lg text-stone-700">
                  All workmanship is covered by an industry-leading 5-year warranty.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </Section>

      <CallToAction />
    </>
  );
}
