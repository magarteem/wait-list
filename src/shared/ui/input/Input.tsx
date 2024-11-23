import s from "./input.module.scss";
import cn from "classnames";

type Props = {
  containerClassName?: string;
  errorText?: string;
  children?: React.ReactNode;
} & React.HTMLProps<HTMLInputElement>;

export const Input = ({
  children,
  errorText,
  containerClassName,
  ...props
}: Props) => {
  return (
    <div
      className={cn(s.container, containerClassName, {
        [s.errorText]: !!errorText,
      })}
    >
      <input {...props} />
      {children}
      {!!errorText && <span className={s.error}>{errorText}</span>}
    </div>
  );
};
