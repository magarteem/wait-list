import s from "./header.module.scss";

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.pageName}>Quests</div>
      <div>Header 2</div>
    </div>
  );
};
