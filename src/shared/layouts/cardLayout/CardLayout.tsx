import { ReactNode } from "react";
import s from "./cardLayout.module.scss";
import cn from "classnames";

interface Props {
  children: ReactNode;
  classNamesContainer?: string;
  hoHoverStyles?: boolean;
}
export const CardLayout = ({
  children,
  hoHoverStyles,
  classNamesContainer,
}: Props) => {
  return (
    <div
      className={cn(
        s.cardLayout,
        { [s.hoHoverStyles]: hoHoverStyles },
        classNamesContainer
      )}
    >
      {children}
    </div>
  );
};
