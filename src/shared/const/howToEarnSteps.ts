import StepsOne from "../assets/icons/img_stepOne.webp";
import StepsTwo from "../assets/icons/img_stepTwo.webp";
import StepsThree from "../assets/icons/img_stepThree.webp";

export interface HowToEarnStepsType {
  id: number;
  title: string;
  text: string;
  img: string;
}

export const howToEarnSteps: HowToEarnStepsType[] = [
  {
    id: 1,
    title: "Refer your friends",
    text: "Share the link with friends via X or any other social platform.",
    img: StepsOne,
  },
  {
    id: 2,
    title: "Earn 100 xp for each referral",
    text: "Earn 100 points when a friend joins and links a social account (up to 50 referrals).",
    img: StepsTwo,
  },
  {
    id: 3,
    title: "Get exclusive rewards",
    text: "Points will give you access to exclusive rewards and benefits.",
    img: StepsThree,
  },
];
