import css from "./Feedback.module.css";

export interface FeedpackProps {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positive: number;
}
export default function Feedback({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positive = 0,
}: FeedpackProps) {
  return (
    <div className={css.feedback}>
      <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive: {positive}%</p>
      </>
    </div>
  );
}
