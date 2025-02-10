import { lazy } from "react";
import Section from "../components/Section";

const Hero = lazy(() => import("../components/Hero"));
const LocationSection = lazy(() => import("../components/LocationSection"));
const ProgramSection = lazy(() => import("../components/ProgramSection"));
const GallerySection = lazy(() => import("../components/GallerySection"));
const AmenitiesSection = lazy(() => import("../components/AmenitiesSection"));
const TestimonialSection = lazy(() =>
  import("../components/TestimonialSection")
);

export default function Home() {
  return (
    <>
      <Section className="py-10 flex items-start justify-center">
        <Hero />
      </Section>
      <LocationSection />
      <Section className={"min-h-screen"}>
        <ProgramSection />
      </Section>
      <Section className={"min-h-screen"}>
        <AmenitiesSection />
      </Section>
      <Section className={"min-h-screen"}>
        <GallerySection />
      </Section>
      <Section className={"min-h-screen"}>
        <TestimonialSection />
      </Section>
    </>
  );
}
