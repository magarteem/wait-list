import { CardLayout } from "../../shared/layouts/cardLayout/CardLayout";
import { Input } from "../../shared/ui/input/Input";
import { XpButton } from "../../shared/ui/xpButton/XpButton";
import { ReactComponent as Copy } from "../../shared/assets/icons/copy.svg";
import s from "./profileMain.module.scss";
import cn from "classnames";
import { socialsProfile } from "../../shared/const/socialsProfile";
import { CustomizingTitleForCards } from "../../shared/ui/customizing-title/customizing-title-for-cards/CustomizingTitleForCards";
import { Progress } from "../../shared/ui/progress/Progress";
import { BlockProfileSocials } from "./block-profile-socials/BlockProfileSocials";
import { useState } from "react";
import { BlockProfileInfo } from "./block-profile-info/BlockProfileInfo";

const url =
  "https://wallme.io?referral=F86Ca-ngNC9qPo_vaAAfwMPZsS302voJ7bIGp0aAvUo";
const xp = 250;

export const ProfileMain = () => {
  const [valueInput, setValueInput] = useState(url);

  const onchangeInput = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setValueInput(e.currentTarget.value);
  };

  return (
    <div className={s.blockProfileMain}>
      <div className={s.parent}>
        <CardLayout hoHoverStyles={true} classNamesContainer={s.div1}>
          <XpButton completed={false} xp={xp} />
          <Progress xp={xp} />
        </CardLayout>

        <CardLayout
          hoHoverStyles={true}
          classNamesContainer={cn(s.div2, s.referredCount)}
        >
          <CustomizingTitleForCards text="Referred" />
          <div>
            <XpButton
              completed={false}
              typeIcon="referral"
              xp={0}
              showXpText={false}
              classNameContainer={s.customXpCounts}
            />
          </div>
        </CardLayout>

        <CardLayout
          hoHoverStyles={true}
          classNamesContainer={cn(s.div3, s.referredCount)}
        >
          <CustomizingTitleForCards text="Referral Link" />

          <Input height={60} value={valueInput} onChange={onchangeInput}>
            <div className={s.iconPosition}>
              <Copy />
            </div>
          </Input>
        </CardLayout>

        <CardLayout hoHoverStyles={true} classNamesContainer={s.div4}>
          <BlockProfileInfo />
        </CardLayout>
      </div>

      <BlockProfileSocials socialsProfile={socialsProfile} />
    </div>
  );
};
