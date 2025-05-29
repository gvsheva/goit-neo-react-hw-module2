import css from "./Options.module.css";

export type OptionType = "good" | "neutral" | "bad" | "reset";

export interface OptionsProps {
  onClick?: (type: OptionType) => void;
}

export default function Options({ onClick }: OptionsProps) {
  const handleClick = (type: OptionType) => {
    if (onClick) {
      onClick(type);
    }
  };
  return (
    <div className={css.options}>
      <button className={css.good} onClick={() => handleClick("good")}>
        Good
      </button>
      <button className={css.neutral} onClick={() => handleClick("neutral")}>
        Neutral
      </button>
      <button className={css.bad} onClick={() => handleClick("bad")}>
        Bad
      </button>
      <button className={css.reset} onClick={() => handleClick("reset")}>
        Reset
      </button>
    </div>
  );
}
