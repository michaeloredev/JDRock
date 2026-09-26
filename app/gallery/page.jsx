import Gallery from "@/components/Gallery";
import CallToAction from "@/components/ui/CallToAction";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import { projects } from "@/lib/gallery";

export const metadata = {
  title: "Gallery",
  description:
    "Photos of recent remodeling, addition, deck, and repair projects by J.D. Rock Custom Home Improvements.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Our recent work"
        subtitle="A look at projects from start to finish. Tap any photo to see it larger."
      />
      <Section>
        <Gallery projects={projects} />
      </Section>
      <CallToAction
        title="Picture your project here"
        text="Tell us what you have in mind and get a free, no-pressure estimate."
      />
    </>
  );
}
