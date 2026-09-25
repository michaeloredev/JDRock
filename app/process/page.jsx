import CallToAction from "@/components/ui/CallToAction";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";

export const metadata = {
  title: "Our Process",
  description:
    "From free consultation and estimate through design, permits, construction, and a thorough punch list, here's how J.D. Rock works.",
};

const steps = [
  {
    title: "Consultation and Estimate",
    text: "Our process is simple: begin with a no-pressure consultation, receive a clear, fair estimate, and let our courteous team handle the rest. We’re here to ensure your new home truly feels like your own.",
  },
  {
    title: "Design Process",
    text: "Next, our collaborative design process begins, ensuring your vision comes to life. We’ll listen closely, refine the details together, and maintain open communication—no hidden costs, no surprises.",
  },
  {
    title: "Permits",
    text: "Once you approve the design, we’ll handle all the necessary permits and make sure every aspect meets local building codes. Relax knowing our expertise keeps your project compliant and on track.",
  },
  {
    title: "Construction",
    text: "With permits in hand, our skilled team gets to work. We’ll maintain high standards of craftsmanship while working efficiently, ensuring your project progresses smoothly and on schedule.",
  },
  {
    title: "Punch List",
    text: "Before we consider the job done, we’ll create a thorough punch list of any final touches. We won’t collect final payment until every last detail meets our standards—and yours.",
  },
  {
    title: "Completion",
    text: "After all punch list items are resolved, we ensure you’re fully satisfied. With your approval, we settle the final payment, knowing we’ve delivered a home transformation that meets your expectations.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Process"
        title="Simple, clear, and no surprises"
        subtitle="Six steps from your first call to a finished project, with open communication the whole way."
      />

      <Section>
        <ol className="relative mx-auto max-w-3xl">
          {steps.map(({ title, text }, i) => (
            <li key={title} className="relative flex gap-6 pb-10 last:pb-0">
              {/* Connector line between step markers */}
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-6 top-12 -ml-px h-[calc(100%-3rem)] w-0.5 bg-brand-200"
                />
              )}
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-700 font-heading text-lg font-bold text-white shadow">
                {i + 1}
              </span>
              <div className="pt-2">
                <h2 className="font-heading text-2xl font-bold text-brand-800">{title}</h2>
                <p className="mt-2 text-lg leading-relaxed text-stone-700">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <CallToAction
        title="Let's start with step one"
        text="Schedule your free, no-pressure consultation and estimate today."
      />
    </>
  );
}
