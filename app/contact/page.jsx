import { FaMapMarkerAlt, FaPhoneAlt, FaShieldAlt } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";
import Card from "@/components/ui/Card";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Request a free, no-pressure estimate from J.D. Rock Custom Home Improvements, or call 443-244-0484.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get your free estimate"
        subtitle="Tell us about your project and we'll get back to you. Consultations and estimates are always free, with no pressure."
      />
      <Section innerClassName="grid gap-10 lg:grid-cols-5">
        <Card className="md:p-8 lg:col-span-3">
          <ContactForm />
        </Card>
        <div className="lg:col-span-2">
          <h2 className="font-heading text-2xl font-bold text-brand-800">Prefer to talk?</h2>
          <p className="mt-2 text-stone-600">Give us a call and we&apos;ll be glad to help.</p>
          <ul className="mt-6 space-y-4 text-stone-800">
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
      </Section>
    </>
  );
}
