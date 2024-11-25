import s from "./referralMain.module.scss";
import { CardLayout } from "../../shared/layouts/cardLayout/CardLayout";
import { XpButton } from "../../shared/ui/xpButton/XpButton";
import { Button } from "../../shared/ui/button/Button";
import { Input } from "../../shared/ui/input/Input";
import { ReactComponent as Copy } from "../../shared/assets/icons/copy.svg";
import { howToEarnSteps } from "../../shared/const/howToEarnSteps";
import { CustomizingTitleForCards } from "../../shared/ui/customizing-title/customizing-title-for-cards/CustomizingTitleForCards";
import { useState } from "react";

const url =
  "https://wallme.io?referral=F86Ca-ngNC9qPo_vaAAfwMPZsS302voJ7bIGp0aAvUo";

export const ReferralMain = () => {
  const [valueInput, setValueInput] = useState(url);

  const onchangeInput = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setValueInput(e.currentTarget.value);
  };

  return (
    <>
      <div className={s.referralInfo}>
        <CardLayout
          hoHoverStyles={true}
          classNamesContainer={s.customReferralLayout}
        >
          <div className={s.referralLayout}>
            <h3 className={s.title}>Referred</h3>
            <div className={s.xpBlock}>
              <XpButton
                showXpText={false}
                typeIcon="referral"
                completed={false}
                xp={9}
              />
            </div>
          </div>
        </CardLayout>
        <CardLayout
          hoHoverStyles={true}
          classNamesContainer={s.customReferralLayout}
        >
          <div className={s.referralLayout}>
            <h3 className={s.title}>Earned</h3>
            <div className={s.xpBlock}>
              <XpButton typeIcon="referral" completed={false} xp={250} />
            </div>
          </div>
        </CardLayout>
      </div>

      <CardLayout hoHoverStyles={true}>
        <div className={s.referralLink}>
          <h2 className={s.blockTitle}>Refer and Earn</h2>
          <CustomizingTitleForCards
            text="Earn 100 xp for each referral (up to 50 referrals)"
            fs={14}
            classNamesContainer={s.customColor}
          />

          <div className={s.blockInput}>
            <Input
              height={60}
              value={valueInput}
              onChange={onchangeInput}
            ></Input>
          </div>
          <div className={s.blockButton}>
            <Button btnTypeStyle="dark" icon={<Copy />}>
              Copy link
            </Button>
            <Button btnTypeStyle="dark" className={s.customStylesBtn}>
              Tweet Referral
            </Button>
          </div>
        </div>
      </CardLayout>

      <div className={s.blockEarn}>
        <h2 className={s.titleBlockEarn}>How to Earn</h2>

        <div className={s.stepWrapp}>
          {howToEarnSteps.map((x, index) => (
            <div
              key={x.id}
              className={s.stepCard}
              style={{
                backgroundImage: `url("${x.img}")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "calc(100% - 20px) bottom",
              }}
            >
              <p className={s.stepNumber}>Step {index + 1}</p>

              <p className={s.title}>{x.title}</p>
              <p className={s.text}>{x.text}</p>
              {/* <img src={x.img} alt={x.text} /> */}
            </div>
          ))}
        </div>
      </div>

      <div className={s.referralTable}>
        <h2 className={s.titleBlockReferralTable}>Referral Activity</h2>
        {/* referralActivity */}
        <div className={s.tableWrapp}>tableWrapp</div>
      </div>
    </>
  );
};
