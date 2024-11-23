import { ReactNode } from "react";
import s from "./mainLayout.module.scss";

interface Props {
  children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return <section className={s.mainLayout}>{children}</section>;
};
