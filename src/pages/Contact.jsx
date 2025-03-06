import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiYoutubeFill,
} from "@remixicon/react";
import Heading from "../components/Heading";
import SmallSection from "../components/SmallSection";
import { branches } from "../branches";
import LocationLink from "../components/LocationLink";
import Form from "../components/Form";
import Para from "../components/Para";

export default function Contact() {
  return (
    <main className="w-full flex items-center justify-start flex-col py-10 font-clash-grotesk text-platinium cursor-default">
      <div className="w-[90%] grid grid-cols-1 gap-8 laptop:grid-cols-2 laptop:w-[90%] text-platinium pb-10">
        <div className="flex items-center justify-start laptop:items-start flex-col space-y-8 p-2 w-full">
          <div className="w-[90%] flex items-center laptop:items-start justify-center flex-col space-y-2">
            <Heading title={"Get in"} spanText={"Touch"} />
            <Para
              text="We're here to help you on your fitness journey! Whether you have
            questions about our memberships, training programs, or facilities,
            feel free to reach out."
            />
          </div>
          <div className="w-full space-y-8">
            <SmallSection
              title="Our Branches"
              className="w-full grid grid-cols-1 tablet:grid-cols-3 gap-4"
            >
              {branches.map((branch) => {
                return <LocationLink branch={branch} key={branch.id} />;
              })}
            </SmallSection>
            <div className="w-full grid grid-cols-1 tablet:grid-cols-2 gap-8">
              <SmallSection title="Phone or Mail us">
                <div className="flex items-start justify-start flex-col space-y-1">
                  <a
                    className="hover:text-strong-green duration-300 transition-colors"
                    href="tel:7096004208"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>+91 7096004208</span>
                  </a>
                  <a
                    className="font-medium hover:text-strong-green duration-300 transition-colors"
                    href="mailto:stallongym111@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>stallongym111@gmail.com</span>
                  </a>
                </div>
              </SmallSection>
              <SmallSection title="Follow us">
                <div className="flex items-start justify-start space-x-2">
                  <a
                    className="hover:text-strong-green duration-300 transition-colors"
                    href="https://www.instagram.com/stallon_gym_official/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiInstagramFill />
                  </a>
                  <a
                    className="hover:text-strong-green duration-300 transition-colors"
                    href="https://www.facebook.com/stallongymindia.mediablock.india/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiFacebookCircleFill />
                  </a>
                  <a
                    className="hover:text-strong-green duration-300 transition-colors"
                    href="https://www.youtube.com/@StallonGym/featured"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiYoutubeFill />
                  </a>
                </div>
              </SmallSection>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-start flex-col space-y-8 p-2">
          <div className="w-full flex items-center laptop:items-start justify-start flex-col space-y-4">
            <Heading title="Send us a" spanText="Message" />
            <Para
              text="Have a question? Fill out the form below, and we'll get back to
              you as soon as possible!"
            />
          </div>
          <Form />
        </div>
      </div>
    </main>
  );
}
