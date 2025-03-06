import varacha from "./assets/varacha-team.webp";
import varachaBM from "./assets/varacha-bm.webp";
import varachaEquipment from "./assets/varacha-equipment-1.webp";
import varachaEquipment2 from "./assets/varacha-equipment-2.webp";
import varachaGym from "./assets/varacha-gym.webp";
import varacha4 from "./assets/varacha-4.webp";
import varacha2 from "./assets/varacha-2.webp";
import varachaConsult from "./assets/varacha-consultancy.webp";

import vesu from "./assets/vesu-team.webp";
import vesuGym from "./assets/vesu-gym.webp";
import vesuGymDesk from "./assets/vesu-gym-desk.webp";
import vesuFrontDesk from "./assets/vesu-front-desk.webp";
import vesuEquipment1 from "./assets/vesu-equipment-1.webp";
import vesuEquipment2 from "./assets/vesu-equipment-2.webp";
import vesuEquipment3 from "./assets/vesu-equipment-3.webp";
import vesuBM from "./assets/vesu-bm.webp";

import ghoddodroad from "./assets/ghoddodroad-team.webp";
import ghoddodroad1 from "./assets/ghoddodroad-1.webp";
import ghoddodroad2 from "./assets/ghoddodroad-2.webp";
import ghoddodroad3 from "./assets/ghoddodroad-3.webp";
import ghoddodroad5 from "./assets/ghoddodroad-5.webp";
import ghoddodequipment from "./assets/ghoddodroad-equipment.webp";
import ghoddodfrontDesk from "./assets/ghoddodroad-front-desk.webp";
import ghoddodroadBM from "./assets/ghoddodroad-bm.webp";

import vip from "./assets/VIP-team.webp";
import viproadequipment1 from "./assets/vip-equipment-1.webp";
import viproadequipment2 from "./assets/vip-equipment-2.webp";
import viproadequipment3 from "./assets/vip-equipment-3.webp";
import viproadequipment4 from "./assets/vip-equipment-4.webp";
import vipBM from "./assets/vip-bm.webp";

import adajanEquipments from "./assets/adajan-equipments.webp";
import adajanFrontDesk from "./assets/adajan-gym-desk.webp";
import adajanGym1 from "./assets/adajan-gym.webp";
import adajanGym2 from "./assets/adajan-gym-2.webp";
import groupWorkout from "./assets/group.webp";
import carpetArea from "./assets/carpet-area.webp";
import adajan from "./assets/adajan-team.webp";
import adajanBM from "./assets/adajan-bm.webp";

const varachaTeam = {
  frontDesk: "",
  generalTrainer: "Mr.Kalpesh",
  personalTrainer: "Mr.Bharat",
  branchManager: {
    name: "Kaushik Parmar",
    pic: varachaBM,
    achievements: [
      "Gold Medal Winner in Running ( 2017 )",
      "Silver Medal Winner in Long Jump ( 2017 )",
    ],
    areaOfExpertise: [
      "Knowledge of Anatomy and Physiology",
      "Motivational Skills",
      "Group Workout",
      "Ability to adapt needs of every clients",
    ],
  },
  pic: varacha,
};

const vipRoadTeam = {
  frontDesk: "Heena Pote and Sonali Dhanavade",
  generalTrainer: "Rens Patel",
  personalTrainer: "Smit Khalasi, Divyesh Parmar and Harvesp Kapadia",
  branchManager: {
    name: "Phulchandra Singh",
    pic: vipBM,
    achievements: [
      "4 times Full Powerlifting Gujarat, 2nd rank",
      "Full Powerlifting National, 3rd rank ( 2022 )",
      "3 times Strength Lifting Gujarat, 2nd rank",
      "Full Powerlifting National Gold medal",
      "Champion of Champions trophy",
    ],
    areaOfExpertise: ["Strength training", "Fat loss training", "Weight gain"],
  },
  pic: vip,
};

const adajanTeam = {
  frontDesk: "Divya Solanki",
  generalTrainer: "Sagar Nayak, Jenish Amdavadi",
  personalTrainer: "Shaan Sharma, Divyang More, Jenish Solanki",
  branchManager: {
    name: "Pavan Rana",
    pic: adajanBM,
    achievements: [
      "7+ Years of Experience",
      "500+ Transformations Given",
      "2nd Place in Men's Physique",
      "2nd Place in Bodybuilding",
      "Managed 800-900 members",
    ],
    areaOfExpertise: [
      "Bodybuilding",
      "Cross Fit",
      "Weight Loss",
      "Powerlifting",
    ],
  },
  pic: adajan,
};

const vesuTeam = {
  frontDesk: "Harshita Choudhary",
  generalTrainer: "Rupang Patel",
  personalTrainer: "Nitesh Kaala and Utsav Khalasi",
  branchManager: {
    name: "Tapan More",
    pic: vesuBM,
    achievements: [
      "Certified from K11 School Of Fitness Sciences",
      "150+ Transformations",
      "From Floor Trainer to Branch Manager",
    ],
    areaOfExpertise: [
      "Weight Training",
      "Gym Management",
      "Functional Workout",
      "Crossfit Training",
    ],
  },
  pic: vesu,
};

const ghoddodroadTeam = {
  frontDesk: "Sayli kadam and Samrudhi bandry",
  generalTrainer: "Omer Saiyed",
  personalTrainer:
    "Heta Panwala, Brijesh Solanki, Veerzad Jabbar, Yogesh Solanki and Devang Dabekar",
  branchManager: {
    name: "Khudabux Bacha",
    pic: ghoddodroadBM,
    achievements: [
      "Gold Medal Winner in Freestyle Wrestling ( 2011 )",
      "Gold Medal Winner in Freestyle Wrestling ( 2013 ) ",
    ],
    areaOfExpertise: [
      "Knowledge of anatomy and physiology",
      "Motivational skills",
      "Ability to adapt needs of every clients",
    ],
  },
  pic: ghoddodroad,
};

export const branches = [
  {
    id: "branch1",
    name: "Vesu",
    team: vesuTeam,
    link: "https://maps.app.goo.gl/vVPeS8NT2ShJ5Fqx5",
    address:
      "Udhana - Magdalla Rd, Someshwar Square,Opp. Someshwar Enclave, Vesu, Surat, Gujarat 395007",
    showcase: [
      { span: "col-span-2 tablet-xs:col-span-1", src: vesuGym },
      { span: "col-span-2 tablet-xs:col-span-1", src: vesuFrontDesk },
      { span: "col-span-2", src: vesuGymDesk },
      { span: "col-span-2 tablet-xs:col-span-1", src: vesuEquipment1 },
      { span: "col-span-2 tablet-xs:col-span-1", src: vesuEquipment3 },
      { span: "col-span-2", src: vesuEquipment2 },
    ],
    manager: {
      name: "",
    },
  },
  {
    id: "branch2",
    name: "Ghod Dod Road",
    team: ghoddodroadTeam,
    link: "https://maps.app.goo.gl/jqDT8crS52HPXeRL6",
    address:
      "2nd floor, Regent Square, Regent Arcade, Ghod Dod Rd, Surat, Gujarat 395007",
    showcase: [
      { span: "col-span-2 tablet-xs:col-span-1", src: ghoddodroad2 },
      { span: "col-span-2 tablet-xs:col-span-1", src: ghoddodroad1 },
      { span: "col-span-2", src: ghoddodroad3 },
      { span: "col-span-2 tablet-xs:col-span-1", src: ghoddodequipment },
      { span: "col-span-2 tablet-xs:col-span-1", src: ghoddodroad5 },
      { span: "col-span-2 object-top", src: ghoddodfrontDesk },
    ],
  },
  {
    id: "branch3",
    name: "Adajan",
    team: adajanTeam,
    link: "https://maps.app.goo.gl/V7PC5kScVHL6kGmg6",
    address:
      "1st floor, Riddhi Shoppers building, Opp. Star Bazar, Maher Nager, Jalaram Society, Adajan Gam, Adajan, Surat, Gujarat 395009",
    showcase: [
      { span: "col-span-2 tablet-xs:col-span-1", src: adajanEquipments },
      { span: "col-span-2 tablet-xs:col-span-1", src: adajanFrontDesk },
      { span: "col-span-2", src: adajanGym1 },
      { span: "col-span-2 tablet-xs:col-span-1", src: groupWorkout },
      { span: "col-span-2 tablet-xs:col-span-1", src: adajanGym2 },
      { span: "col-span-2", src: carpetArea },
    ],
  },
  {
    id: "branch4",
    name: "VIP Road",
    team: vipRoadTeam,
    link: "https://maps.app.goo.gl/zfCf4xBa6k1buq4v5",
    address:
      "4th Floor, Western Shoppers, VIP Road, opp. Metro Mall, Anand Park, Althan, Surat, Gujarat 395017",
    showcase: [
      {
        span: "col-span-2 tablet-xs:col-span-1",
        src: viproadequipment1,
      },
      {
        span: "col-span-2 tablet-xs:col-span-1 object-top",
        src: viproadequipment4,
      },
      { span: "col-span-2", src: viproadequipment3 },
      { span: "col-span-2 tablet-xs:col-span-1", src: viproadequipment2 },
      { span: "col-span-2 tablet-xs:col-span-1", src: vip },
    ],
  },
  {
    id: "branch5",
    name: "Mota Varacha",
    team: varachaTeam,
    link: "https://maps.app.goo.gl/vVPeS8NT2ShJ5Fqx5",
    address:
      "Raghuvir Shoppers, near Lajamni Chowk, Mota Varachha, Surat, Gujarat 394101",
    showcase: [
      { span: "col-span-2 tablet-xs:col-span-1", src: varachaEquipment },
      { span: "col-span-2 tablet-xs:col-span-1", src: varachaGym },
      { span: "col-span-2 object-top", src: varachaEquipment2 },
      { span: "col-span-2 tablet-xs:col-span-1", src: varacha4 },
      { span: "col-span-2 tablet-xs:col-span-1", src: varachaConsult },
      { span: "col-span-2", src: varacha2 },
    ],
  },
];
