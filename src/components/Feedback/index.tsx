import css from "./Feedback.module.css";

export interface FeedpackProps {
  good: number;
  neutral: number;
  bad: number;
}
export default function Feedback({
  good = 0,
  neutral = 0,
  bad = 0,
}: FeedpackProps) {
  const total = good + neutral + bad;
  const positive = total ? Math.round((good / total) * 100) : 0;
  const hasAnyFeedback = good > 0 || neutral > 0 || bad > 0;

  return (
    <div className={css.feedback}>
      {hasAnyFeedback ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive: {positive}%</p>
        </>
      ) : (
        <p>No feedback yet</p>
      )}
    </div>
  );
}
