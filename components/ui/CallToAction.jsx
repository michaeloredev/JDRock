import { FaPhoneAlt } from "react-icons/fa";
import Button from "./Button";
import Section from "./Section";
import { site } from "@/lib/site";

export default function CallToAction({
  title = "Ready to start your project?",
  text = "Tell us what you have in mind. Consultations and estimates are free, with no pressure.",
}) {
  return (
    <Section tone="brand" innerClassName="text-center">
      <h2 className="font-heading text-2xl font-bold md:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100">{text}</p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button href="/contact" variant="accent" size="lg">
          Get a Free Estimate
        </Button>
        <Button href={site.phoneHref} variant="outline-light" size="lg">
          <FaPhoneAlt aria-hidden="true" />
          {site.phone}
        </Button>
      </div>
    </Section>
  );
}
