import kickstart from "./assets/kickstart.svg";
import conquer from "./assets/conquer.svg";
import commit from "./assets/commit.svg";
import transform from "./assets/transform.svg";

export const membership_data = [
  {
    id: "plan1",
    src: kickstart,
    title: "Kickstart",
    about: "Perfect for beginners or those looking for a short-term commitment",
    duration: 1,
    extra: 0,
    price: 3000,
    facilities: [
      {
        id: "f1",
        name: "General Trainer Assistance",
        availableWithPackage: true,
      },
      {
        id: "f2",
        name: "Full Gym Access",
        availableWithPackage: true,
      },
      {
        id: "f3",
        name: "Steam Bath",
        availableWithPackage: true,
      },
      {
        id: "f4",
        name: "Zumba & Yoga Complimentary",
        availableWithPackage: false,
      },
    ],
  },
  {
    id: "plan2",
    title: "Commit",
    src: commit,
    about: "A great option to build consistency & endurance.",
    duration: 3,
    extra: 0,
    price: 5000,
    facilities: [
      {
        id: "f1",
        name: "General Trainer Assistance",
        availableWithPackage: true,
      },
      {
        id: "f2",
        name: "Full Gym Access",
        availableWithPackage: true,
      },
      {
        id: "f3",
        name: "Steam Bath",
        availableWithPackage: true,
      },
      {
        id: "f4",
        name: "Zumba & Yoga Complimentary",
        availableWithPackage: false,
      },
    ],
  },
  {
    id: "plan3",
    title: "Transform",
    src: transform,
    about: "Ideal for those who are serious about change.",
    duration: 6,
    extra: 0,
    price: 8000,
    facilities: [
      {
        id: "f1",
        name: "General Trainer Assistance",
        availableWithPackage: true,
      },
      {
        id: "f2",
        name: "Full Gym Access",
        availableWithPackage: true,
      },
      {
        id: "f3",
        name: "Steam Bath",
        availableWithPackage: true,
      },
      {
        id: "f4",
        name: "Zumba & Yoga Complimentary",
        availableWithPackage: true,
      },
    ],
  },
  {
    id: "plan4",
    title: "Conquer",
    src: conquer,
    about: "The ultimate plan for long-term fitness & peak performance.",
    duration: 12,
    extra: 3,
    price: 12000,
    facilities: [
      {
        id: "f1",
        name: "Extra 3 months",
        availableWithPackage: true,
      },
      {
        id: "f2",
        name: "General Trainer Assistance",
        availableWithPackage: true,
      },
      {
        id: "f3",
        name: "Full Gym Access",
        availableWithPackage: true,
      },
      {
        id: "f4",
        name: "Steam Bath",
        availableWithPackage: true,
      },
      {
        id: "f5",
        name: "Zumba & Yoga Complimentary",
        availableWithPackage: true,
      },
    ],
  },
];
