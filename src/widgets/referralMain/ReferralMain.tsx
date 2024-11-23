import s from "./referralMain.module.scss";
import { CardLayout } from "../../shared/layouts/cardLayout/CardLayout";
import { XpButton } from "../../shared/ui/xpButton/XpButton";
import { Button } from "../../shared/ui/button/Button";
import { Input } from "../../shared/ui/input/Input";
import { ReactComponent as Copy } from "../../shared/assets/icons/copy.svg";
import { howToEarnSteps } from "../../shared/const/howToEarnSteps";

export const ReferralMain = () => {
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
          <span className={s.blockInfoText}>
            Earn 100 xp for each referral (up to 50 referrals)
          </span>
          <div className={s.blockInput}>
            <Input
              height={60}
              value={
                "https://wallme.io?referral=F86Ca-ngNC9qPo_vaAAfwMPZsS302voJ7bIGp0aAvUo"
              }
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

      <div className={s.blockEvents0000000000}>
        <h2 className={s.titleQuests0000000000000}> How to Earn</h2>

        {howToEarnSteps.map((x) => (
          <CardLayout key={x.id}>
            {x.text}
            <img src={x.img} alt={x.text} />
          </CardLayout>
        ))}
      </div>

      <div>fffff</div>
    </>
  );
};
