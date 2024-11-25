import { referralActivity } from "../../../shared/const/referralActivity";
import { CustomizingTitleForCards } from "../../../shared/ui/customizing-title/customizing-title-for-cards/CustomizingTitleForCards";
import s from "./blockProfileInfo.module.scss";

export const BlockProfileInfo = () => {
  const { avatar, name } = referralActivity[3];
  return (
    <div className={s.blockProfileInfo}>
      <div>
        <div className={s.editBtnWrap}>
          <CustomizingTitleForCards text="Avatar" />
          <p className={s.editBtn}>Edit</p>
        </div>
        {avatar && (
          <div className={s.avatarImg}>
            <img src={avatar} alt={avatar} />
          </div>
        )}
      </div>
      <div>
        <div className={s.editBtnWrap}>
          <CustomizingTitleForCards text="Username" />
          <p className={s.editBtn}>Edit</p>
        </div>
        <p className={s.name}>{name}</p>
      </div>
    </div>
  );
};
