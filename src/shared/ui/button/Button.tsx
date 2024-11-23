import { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./button.module.scss";
import classNames from "classnames";
import { ReactComponent as Completed } from "../../assets/icons/completed.svg";

type ButtonTypes = "primary" | "second" | "completed" | "dark";

type Props = {
  btnTypeStyle?: ButtonTypes;
  children?: ReactNode;
  size?: "sm" | "large";
  icon?: ReactNode;
} & ComponentPropsWithoutRef<"button">;

export const Button = ({
  btnTypeStyle = "primary",
  className,
  children,
  size = "sm",
  icon,
  ...props
}: Props) => {
  let typeButtonClass;
  switch (btnTypeStyle) {
    case "primary":
      typeButtonClass = styles.primary;
      break;
    case "second":
      typeButtonClass = styles.second;
      break;
    case "completed":
      typeButtonClass = styles.completed;
      break;
    case "dark":
      typeButtonClass = styles.dark;
      break;
    default:
      typeButtonClass = styles.primary;
      break;
  }
  return (
    <button
      className={classNames(
        typeButtonClass,
        { [styles.large]: size === "large" },
        className
      )}
      {...props}
    >
      {children}
      {icon ? icon : null}
    </button>
  );
};
