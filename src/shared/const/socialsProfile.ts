import Discord from "../assets/icons/discord-logo.svg";
import X from "../assets/icons/twitter-logo.svg";
import Telegram from "../assets/icons/telegram-logo.svg";

export interface SocialsProfileType {
  id: number;
  name: string;
  avatar: string;
  xp: number;
  completed: boolean;
}

export const socialsProfile: SocialsProfileType[] = [
  {
    id: 1,
    name: "Discord",
    avatar: Discord,
    xp: 50,
    completed: true,
  },
  {
    id: 2,
    name: "X",
    avatar: X,
    xp: 50,
    completed: false,
  },
  {
    id: 3,
    name: "Telegram",
    avatar: Telegram,
    xp: 50,
    completed: false,
  },
];
