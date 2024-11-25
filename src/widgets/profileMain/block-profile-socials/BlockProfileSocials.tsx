import { SocialsProfileType } from "../../../shared/const/socialsProfile";
import { CardLayout } from "../../../shared/layouts/cardLayout/CardLayout";
import { Button } from "../../../shared/ui/button/Button";
import { XpButton } from "../../../shared/ui/xpButton/XpButton";
import s from "./blockProfileSocials.module.scss";
import { ReactComponent as Completed } from "../../../shared/assets/icons/completed.svg";

import cn from "classnames";

interface Props {
  socialsProfile: SocialsProfileType[];
}

export const BlockProfileSocials = ({ socialsProfile }: Props) => {
  return (
    <div className={s.socials}>
      <h2 className={s.titleSocials}> Socials</h2>

      <div className={s.socialsCards}>
        {socialsProfile.slice(0, 5).map((x: SocialsProfileType) => (
          <CardLayout
            key={x.id}
            classNamesContainer={cn(s.customSocialsCard, {
              [s.completed]: x.completed,
            })}
          >
            <div className={s.socialsHeader}>
              <div className={s.socialsType}>
                <img src={x.avatar} alt={x.name} />
                <span
                  className={cn(s.socialsName, {
                    [s.completedText]: x.completed,
                  })}
                >
                  {x.name}
                </span>
              </div>
              <XpButton
                completed={x.completed}
                xp={x.xp}
                //classNameContainer={s.customXpCounts}
              />
            </div>

            <Button
              size="fullWidth"
              icon={x.completed ? <Completed /> : null}
              btnTypeStyle={x.completed ? "completed" : "primary"}
            >
              {x.completed ? "Connected" : "Connect"}
            </Button>
          </CardLayout>
        ))}
      </div>
    </div>
  );
};
