import varacha from "./assets/varacha-team.webp";
import ghoddodroad from "./assets/ghoddodroad-team.webp";
import vip from "./assets/VIP-team.webp";
import vesu from "./assets/vesu-team.webp";
import adajan from "./assets/adajan-team.webp";

const varachaTeam = {
  frontDesk: "",
  generalTrainer: "Mr.Kalpesh",
  personalTrainer: "Mr.Bharat",
  branchManager: "Kaushik Parmar",
  pic: varacha,
};

const vipRoadTeam = {
  frontDesk: "Heena Pote and Sonali Dhanavade",
  generalTrainer: "Rens Patel",
  personalTrainer: "Smit Khalasi, Divyesh Parmar and Harvesp Kapadia",
  branchManager: "Phulchandra Singh",
  pic: vip,
};

const adajanTeam =  {
  frontDesk: "Divya Solanki",
  generalTrainer: ["Sagar Nayak", "Jenish Amdavadi"],
  personalTrainer: ["Shaan Sharma"," Divyang More","Jenish Solanki"],
  branchManager: "Pavan Rana",
  pic: adajan,
};

const vesuTeam = {
  frontDesk: "Harshita Choudhary",
  generalTrainer: "Rupang Patel",
  personalTrainer: "Nitesh Kaala and Utsav Khalasi",
  branchManager: "Tapan More",
  pic: vesu,
};

const ghoddodroadTeam ={
  frontDesk: "Sayli kadam and Samrudhi bandry",
  generalTrainer: "Omer Saiyed",
  personalTrainer:
    "Heta Panwala, Brijesh Solanki, Veerzad Jabbar, Yogesh Solanki and Devang Dabekar",
  branchManager: "Khudabux Bacha",
  pic: ghoddodroad,
};


import vesuGym from "./assets/vesu-gym.webp";
import vesuGymDesk from "./assets/vesu-gym-desk.webp";
import vesuFrontDesk from "./assets/vesu-front-desk.webp";
import vesuEquipment1 from "./assets/vesu-equipment-1.webp";
import vesuEquipment2 from "./assets/vesu-equipment-2.webp";
import vesuEquipment3 from "./assets/vesu-equipment-3.webp";

import varachaEquipment from "./assets/varacha-equipment-1.webp";
import varachaEquipment2 from "./assets/varacha-equipment-2.webp";
import varachaGym from "./assets/varacha-gym.webp";
import varacha4 from "./assets/varacha-4.webp";
import varacha2 from "./assets/varacha-2.webp";
import varachaConsult from "./assets/varacha-consultancy.webp";

import ghoddodroad1 from "./assets/ghoddodroad-1.webp";
import ghoddodroad2 from "./assets/ghoddodroad-2.webp";
import ghoddodroad3 from "./assets/ghoddodroad-3.webp";
import ghoddodroad5 from "./assets/ghoddodroad-5.webp";
import ghoddodequipment from "./assets/ghoddodroad-equipment.webp";
import ghoddodfrontDesk from "./assets/ghoddodroad-front-desk.webp";

import viproadequipment1 from "./assets/vip-equipment-1.webp";
import viproadequipment2 from "./assets/vip-equipment-2.webp";
import viproadequipment3 from "./assets/vip-equipment-3.webp";
import viproadequipment4 from "./assets/vip-equipment-4.webp";

import adajanEquipments from "./assets/adajan-equipments.webp";
import adajanFrontDesk from "./assets/adajan-gym-desk.webp";
import adajanGym1 from "./assets/adajan-gym.webp";
import adajanGym2 from "./assets/adajan-gym-2.webp";
import groupWorkout from "./assets/group.webp";
import carpetArea from "./assets/carpet-area.webp";

export const branches = [
    {
      id: "branch1",
      name: "Vesu",
      team: vesuTeam,
      link: "https://maps.app.goo.gl/vVPeS8NT2ShJ5Fqx5",
      address:
        "Udhana - Magdalla Rd, Someshwar Square,Opp. Someshwar Enclave, Vesu, Surat, Gujarat 395007",
      showcase: [
        {span: "col-span-1", src: vesuGym},
        {span: "col-span-2", src: vesuFrontDesk},
        {span: "col-span-2", src: vesuGymDesk},
        {span: "col-span-1", src: vesuEquipment1},
        {span: "col-span-1", src: vesuEquipment3},
        {span: "col-span-2", src: vesuEquipment2},
      ],
    },
    {
      id: "branch2",
      name: "Ghod Dod Road",
      team: ghoddodroadTeam,
      link: "https://maps.app.goo.gl/jqDT8crS52HPXeRL6",
      address:
      "2nd floor, Regent Square, Regent Arcade, Ghod Dod Rd, Surat, Gujarat 395007",
      showcase: [
        {span: "col-span-1", src: ghoddodroad2},
        {span: "col-span-2", src: ghoddodroad1},
        {span: "col-span-2", src: ghoddodroad3},
        {span: "col-span-1", src: ghoddodequipment},
        {span: "col-span-1", src: ghoddodroad5},
        {span: "col-span-2 object-top", src: ghoddodfrontDesk},
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
        {span: "col-span-1", src: adajanEquipments},
        {span: "col-span-2", src: adajanFrontDesk},
        {span: "col-span-2", src: adajanGym1},
        {span: "col-span-1", src: groupWorkout},
        {span: "col-span-1", src: adajanGym2},
        {span: "col-span-2", src: carpetArea},
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
        {span: "col-span-1", src: viproadequipment1},
        {span: "col-span-2 object-top", src: viproadequipment4},
        {span: "col-span-2", src: viproadequipment3},
        {span: "col-span-1", src: viproadequipment2},

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
        {span: "col-span-1", src: varachaEquipment},
        {span: "col-span-2", src: varachaGym},
        {span: "col-span-2 object-top", src: varachaEquipment2},
        {span: "col-span-1", src: varacha4},
        {span: "col-span-1", src: varachaConsult},
        {span: "col-span-2", src: varacha2},
      ],
    },
  ];