import { useState, useEffect } from "react";
import "./HomePage.css";

export default function HomePage() {
  const [saved] = useState(() => {
    const data = localStorage.getItem("feedback-data");
    return data ? JSON.parse(data) : { good: 0, neutral: 0, bad: 0 };
  });
  const [good, setGood] = useState(saved.good);
  const [neutral, setNeutral] = useState(saved.neutral);
  const [bad, setBad] = useState(saved.bad);

  const total = good + neutral + bad;
  const positive = total ? Math.round((good / total) * 100) : 0;
  const hasAnyFeedback = good > 0 || neutral > 0 || bad > 0;

  useEffect(() => {
    localStorage.setItem(
      "feedback-data",
      JSON.stringify({ good, neutral, bad }),
    );
  }, [good, neutral, bad]);

  const handleReset = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  return (
    <div className="app">
      <div className="description">
        <h1>Sip Happens Café</h1>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </div>

      <div className="options">
        <button className="good" onClick={() => setGood(good + 1)}>
          Good
        </button>
        <button className="neutral" onClick={() => setNeutral(neutral + 1)}>
          Neutral
        </button>
        <button className="bad" onClick={() => setBad(bad + 1)}>
          Bad
        </button>
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
      </div>

      <div className="feedback">
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
    </div>
  );
}
