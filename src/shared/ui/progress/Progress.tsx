import s from "./progress.module.scss";

interface Props {
  xp: number;
}

export const Progress = ({ xp }: Props) => {
  return (
    <div>
      <div className={s.progress}>
        <progress className={s.progressInput} id="file" max="1000" value={xp} />
        <label htmlFor="file" className={s.progressLabel}>
          {xp} <span className={s.maxXpInfo}>/ 1000 XP</span>
        </label>
      </div>
    </div>
  );
};
