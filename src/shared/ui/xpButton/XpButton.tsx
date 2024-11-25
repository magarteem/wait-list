import s from "./xpButton.module.scss";
import XP from "../../assets/icons/xp.png";
import ReferralIcon from "../../assets/icons/referralIcon.png";
import cn from "classnames";

interface Props {
  xp: number;
  completed: boolean;
  typeIcon?: "xp" | "referral";
  showXpText?: boolean;
  classNameContainer?: string;
}

export const XpButton = ({
  xp,
  completed,
  typeIcon = "xp",
  showXpText = true,
  classNameContainer,
}: Props) => {
  return (
    <div
      className={cn(s.xpBtn, { [s.completed]: completed }, classNameContainer)}
    >
      <img
        src={typeIcon === "xp" ? XP : ReferralIcon}
        alt="xp"
        width={20}
        height={20}
      />
      <span>
        {xp} {showXpText && <span className={s.xpText}>XP</span>}
      </span>
    </div>
  );
};
