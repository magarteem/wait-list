import { referralActivity } from "../../../shared/const/referralActivity";
import { CardLayout } from "../../../shared/layouts/cardLayout/CardLayout";
import { XpButton } from "../../../shared/ui/xpButton/XpButton";
import s from "./blockCurrentRanking.module.scss";
import { ReactComponent as Sorting } from "../../../shared/assets/icons/sorting.svg";

export const BlockCurrentRanking = () => {
  return (
    <div className={s.blockEarn}>
      <h2 className={s.titleBlockEarn}>How to Earn</h2>

      <CardLayout hoHoverStyles={true}>
        <div className={s.tableContainer}>
          <table>
            <thead>
              <tr>
                <th className={s.rankColumn}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      width: "80px",
                      height: "44px",
                      alignSelf: "center",
                    }}
                  >
                    Rank <Sorting />
                  </div>
                </th>
                <th>Username</th>
                <th className={s.xpColumn}>XP Points</th>
              </tr>
            </thead>
            <tbody>
              {referralActivity.map((x) => (
                <tr key={x.id}>
                  <td>{x.id}</td>
                  <td
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      height: "56px",
                      alignSelf: "center",
                    }}
                  >
                    {x.avatar && <img src={x.avatar} alt={x.name} />}
                    <span>{x.name}</span>
                  </td>
                  <td>
                    <XpButton
                      completed={false}
                      xp={x.xp}
                      classNameContainer={s.customXpCounts}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardLayout>
    </div>
  );
};
