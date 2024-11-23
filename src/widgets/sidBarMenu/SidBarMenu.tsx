import { Link, NavLink } from "react-router-dom";
import s from "./sidBarMenu.module.scss";
import cn from "classnames";
import LogoFull from "../../shared/assets/icons/Logo_full.png";
import { ReactComponent as Flashlight } from "../../shared/assets/icons/flashlight.svg";
import { ReactComponent as BarChart } from "../../shared/assets/icons/bar-chart.svg";
import { ReactComponent as User } from "../../shared/assets/icons/user.svg";
import { ReactComponent as DiscountPercent } from "../../shared/assets/icons/discount-percent.svg";
import { ReactComponent as GithubLogo } from "../../shared/assets/icons/github-logo.svg";
import { ReactComponent as DiscordLogo } from "../../shared/assets/icons/discord-logo.svg";
import { ReactComponent as TelegramLogo } from "../../shared/assets/icons/telegram-logo.svg";
import { ReactComponent as TwitterLogo } from "../../shared/assets/icons/twitter-logo.svg";
import { ReactComponent as XTwitterLogo } from "../../shared/assets/icons/x-twitter-logo.svg";
import { ReactComponent as GooglePlayStore } from "../../shared/assets/icons/google-playstore.svg";
import { ReactComponent as Apple } from "../../shared/assets/icons/apple.svg";
import { RouteNames } from "../../api/router/RouteNames";

interface LinkActiveType {
  isActive: boolean;
}

export const SidBarMenu = () => {
  const setActive = ({ isActive }: LinkActiveType) =>
    cn({ [s.active]: isActive });

  return (
    <div className={s.sidBarMenu}>
      <div className={s.logo}>
        <img src={LogoFull} alt="avatar" />
      </div>

      <nav className={s.menu}>
        <ul>
          <li>
            <Flashlight />
            <NavLink className={setActive} to={RouteNames.HOME}>
              Quests
            </NavLink>
          </li>
          <li>
            <DiscountPercent />
            <NavLink className={setActive} to={RouteNames.REFERRAL}>
              Referral Program
            </NavLink>
          </li>
          <li>
            <BarChart />
            <NavLink className={setActive} to={RouteNames.LEADERBOARD}>
              Leaderboard
            </NavLink>
          </li>
          <li>
            <User />
            <NavLink className={setActive} to={RouteNames.PROFILE}>
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={s.buttonDownloadApps}>
        <NavLink to="">
          <div className={s.iconWrapp}>
            <GooglePlayStore />
          </div>
          <span>Soon in Play Store</span>
        </NavLink>
        <NavLink to="">
          <div className={s.iconWrapp}>
            <Apple />
          </div>
          <span>Soon in Apple Store</span>
        </NavLink>
      </div>

      <div className={s.socialLink}>
        <NavLink to="">
          <GithubLogo />
        </NavLink>
        <NavLink to="">
          <DiscordLogo />
        </NavLink>
        <NavLink to="">
          <TelegramLogo />
        </NavLink>
        <NavLink to="">
          <TwitterLogo />
        </NavLink>
        <NavLink to="">
          <XTwitterLogo />
        </NavLink>
      </div>
    </div>
  );
};
