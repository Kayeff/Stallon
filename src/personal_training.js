import beginner from "./assets/beginner.svg";
import intermediate from "./assets/intermediate.svg";
import advanced from "./assets/advanced.svg";
import proChamp from "./assets/pro-champ.svg";

export const pt_data = [
  {
    id: "plan1",
    title: "Beginner",
    img: beginner,
    about:
      "Start your fitness journey with expert guidance, personalized workouts, and the right techniques to build a strong base.",
    duration: 1,
    trainer: [
      { level: "level 1", price: 5000 },
      { level: "level 2", price: 6000 },
    ],
  },
  {
    id: "plan2",
    img: intermediate,
    title: "Intermediate",
    about:
      "Take your training to the next level with structured programs designed to improve strength, endurance, and performance.",
    duration: 3,
    trainer: [
      { level: "level 1", price: 12000 },
      { level: "level 2", price: 15000 },
    ],
  },
  {
    id: "plan3",
    img: advanced,
    title: "Advanced",
    about:
      "Push your limits with high-intensity training, advanced techniques, and specialized coaching for maximum results.",
    duration: 6,
    trainer: [
      { level: "level 1", price: 22000 },
      { level: "level 2", price: 25000 },
    ],
  },
  {
    id: "plan4",
    img: proChamp,
    title: "ProChamp",
    about:
      "Achieve elite fitness with tailored coaching, performance tracking, and next-level training designed for champions.",
    duration: 12,
    trainer: [
      { level: "level 1", price: 40000 },
      { level: "level 2", price: 45000 },
    ],
  },
];
