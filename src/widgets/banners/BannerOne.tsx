import { BannerLayout } from "../../shared/layouts/bannerLayout/BannerLayout";
import BannerOneImg from "../../shared/assets/icons/banner_1.webp";
import s from "./bannerOne.module.scss";
import { Button } from "../../shared/ui/button/Button";

export const BannerOne = () => {
  return (
    <BannerLayout classNamesContainer={s.customBannerLayout}>
      <div className={s.bannerContainer}>
        <div className={s.bannerContent}>
          <h2 className={s.bannerTitle}>
            Crypto Gateway to Your Financial Freedom
          </h2>
          <span className={s.bannerText}>
            Walme brings decentralized finance and everyday spending into one
            secure, user-centric app.
            <br />
            Manage assets, connect with others, and experience financial
            freedom—all in one platform.
          </span>

          <div className={s.bannerBtn}>
            <Button className={s.customClassName}>Learn more</Button>
          </div>
        </div>
      </div>
      <div className={s.bannerImg}>
        <img src={BannerOneImg} alt="banner" />
      </div>
    </BannerLayout>
  );
};
