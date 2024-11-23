import s from "./socialQuestsLayout.module.scss";
import { XpButton } from "../../ui/xpButton/XpButton";
import { Button } from "../../ui/button/Button";
import { ReactComponent as Completed } from "../../assets/icons/completed.svg";
import cn from "classnames";

interface Props {
  title: string;
  textContent: string;
  xp: number;
  completed: boolean;
}

export const SocialQuestsLayout = ({
  title,
  textContent,
  xp,
  completed,
}: Props) => {
  return (
    <div className={s.socialQuestsLayout}>
      <h3 className={cn(s.title, { [s.completed]: completed })}>{title}</h3>
      <span className={s.textContent}>{textContent}</span>
      <div className={s.xpBlock}>
        <XpButton completed={completed} xp={xp} />
        <Button
          icon={completed ? <Completed /> : null}
          btnTypeStyle={completed ? "completed" : "primary"}
        >
          {completed && <div>Completed</div>}
          {!completed && (title === "Edit Username" ? "Edit" : "Get Started")}
        </Button>
      </div>
    </div>
  );
};
