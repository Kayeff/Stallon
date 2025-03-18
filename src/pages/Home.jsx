import Hero from "../components/Hero";
import ProgramSection from "../components/ProgramSection";
import AmenitiesSection from "../components/AmenitiesSection";
import GallerySection from "../components/GallerySection";
import TestimonialSection from "../components/TestimonialSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-start gap-20 p-4 font-clash-grotesk overflow-x-hidden">
      <Hero />
      <ProgramSection />
      <AmenitiesSection />
      <GallerySection />
      <TestimonialSection />
    </main>
  );
}
