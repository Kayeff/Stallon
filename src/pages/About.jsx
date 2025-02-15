import founder from "../assets/founder.webp";
import Heading from "../components/Heading";

export default function About() {
  return (
    <main className="w-full min-h-screen flex items-center justify-start flex-col py-10">
      <div className="w-[90%] text-strong-green cursor-default flex items-center justify-center flex-col space-y-4">
        <div className="w-full flex items-center justify-center flex-col">
          <Heading title={"About"} spanText={"Us"} />
        </div>
        <div className="grid grid-cols-1 gap-8 tablet-xs:grid-cols-2 laptop:w-full laptop-l:w-[80%] laptop-4k:w-[60%] text-platinium">
          <img
            className="w-full h-80 object-cover object-top tablet-xs:h-80 laptop:h-96 laptop-l:h-[30rem] laptop-4k:h-[40rem]"
            loading="lazy"
            src={founder}
            alt=""
          />
          <div className="space-y-3 font-clash-grotesk w-full laptop-4k:text-2xl text-xs mobile-m:text-sm tablet-xs:text-sm tablet:text-sm laptop:text-base laptop-l:text-lg">
            <h1 className="text-2xl uppercase font-semibold ">
              Our <span className="text-strong-green">Story</span>
            </h1>
            <p className="">
              Founded by Mr. Percy Surty and Mrs. Kashmira Surty, Stallon Gym
              began its journey in 1995 in Navsari and expanded to Surat in
              2008, with branches in Vesu, GhodDod Road, Althan, Adajan, and
              Varacha. From the very beginning, our mission has been to provide
              world-class fitness solutions under one roof, helping individuals
              transform not just their bodies but their lives.
            </p>
            <p className="">
              Our tagline{" "}
              <span className="text-strong-green">
                A GOOD COACH CAN CHANGE YOUR BODY, A GREAT COACH CAN CHANGE YOUR
                LIFE
              </span>{" "}
              embodies our commitment to a holistic approach to health and
              fitness. With state-of-the-art equipment, expert trainers, and
              innovative programs, we are dedicated to delivering measurable
              results that empower our members to reach their full potential.
            </p>
            <p className="">
              At Stallon Gym, we don’t just build strength, we build confidence,
              endurance, and a community driven by the passion for fitness. Join
              us on the journey to a fitter, healthier India!
            </p>
            <p className="text-end font-clash-grotesk text-sm font-medium pt-2 laptop-4k:text-xl">
              - Thank you , Percy & Kashmira
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center py-10">
        <a className="px-6 py-3 border border-strong-green bg-strong-green text-black cursor-pointer hover:bg-strong-green/15 hover:text-platinium transition-all duration-300 font-clash-grotesk font-medium">
          Explore Our Branches
        </a>
      </div>
    </main>
  );
}
