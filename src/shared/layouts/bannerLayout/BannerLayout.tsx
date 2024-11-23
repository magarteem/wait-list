import { ReactNode } from "react";
import cn from "classnames";
import s from "./bannerLayout.module.scss";

interface Props {
  children: ReactNode;
  classNamesContainer?: string;
}

export const BannerLayout = ({ children, classNamesContainer }: Props) => {
  return (
    <div className={cn(s.bannerLayout, classNamesContainer)}>{children}</div>
  );
};
