import { CardLayout } from "../../shared/layouts/cardLayout/CardLayout";
import { CustomizingTitleForCards } from "../../shared/ui/customizing-title/customizing-title-for-cards/CustomizingTitleForCards";
import { BlockCurrentRanking } from "./block-current-ranking/BlockCurrentRanking";
import s from "./leaderboardMain.module.scss";

export const LeaderboardMain = () => {
  return (
    <>
      <div className={s.referralInfo}>
        <CardLayout
          hoHoverStyles={true}
          classNamesContainer={s.customReferralLayout}
        >
          <CustomizingTitleForCards text="Total Participants" />
          <p className={s.text}>67 329</p>
        </CardLayout>
        <CardLayout
          hoHoverStyles={true}
          classNamesContainer={s.customReferralLayout}
        >
          <CustomizingTitleForCards text="Total Participants" />
          <p className={s.text}>15 868 000</p>
        </CardLayout>
      </div>

      <BlockCurrentRanking />
    </>
  );
};
