import founder from "../assets/founder.webp";
import Heading from "../components/Heading";
import Para from "../components/Para";

export default function About() {
  return (
    <main className="w-full flex items-center justify-start flex-col gap-10 font-clash-grotesk p-4 mb-10">
      <div className="w-full text-strong-green cursor-default flex items-center justify-center flex-col gap-8">
        <Heading title={"Our"} spanText={"Story"} />
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 text-platinium laptop:w-[70%]">
          <img
            className="w-full h-80 object-cover border border-platinium/20 justify-self-center tablet:justify-self-end mobile-l:w-96 laptop:w-[90%] laptop:h-full"
            src={founder}
            alt="founders-img"
            loading="lazy"
          />
          <div className="w-full flex flex-col gap-2">
            <Para
              text="Founded by Mr. Percy Surty and Mrs. Kashmira Surty, Stallon Gym
              began its journey in 1995 in Navsari and expanded to Surat in
              2008, with branches in Vesu, GhodDod Road, Althan, Adajan, and
              Varacha. From the very beginning, our mission has been to provide
              world-class fitness solutions under one roof, helping individuals
              transform not just their bodies but their lives."
            />
            <Para
              text="Our tagline - 'A GOOD COACH CAN CHANGE YOUR BODY, A GREAT COACH CAN CHANGE YOUR
                LIFE' - embodies our commitment to a holistic approach to health and
              fitness. With state-of-the-art equipment, expert trainers, and
              innovative programs, we are dedicated to delivering measurable
              results that empower our members to reach their full potential."
            />
            <Para
              text="At Stallon Gym, we don’t just build strength, we build confidence,
              endurance, and a community driven by the passion for fitness. Join
              us on the journey to a fitter, healthier India!"
            />
            <div className="flex items-center justify-center mobile-l:indent-40 tablet:indent-32 laptop:indent-60">
              <p className="font-clash-grotesk text-base font-medium">
                - Thank you , Percy & Kashmira
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
