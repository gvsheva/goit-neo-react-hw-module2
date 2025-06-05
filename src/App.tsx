import { useEffect, useState } from "react";
import css from "./App.module.css";
import type { OptionType } from "./components/Options";
import Description from "./components/Description";
import Options from "./components/Options";
import Feedback from "./components/Feedback";
import Notification from "./components/Notification";

function App() {
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

  const reset = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  const handleOptionClick = (type: OptionType) => {
    switch (type) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      case "reset":
        reset();
        break;
    }
  };

  return (
    <div className={css.app}>
      <Description />
      <Options onClick={(type) => handleOptionClick(type)} />
      {hasAnyFeedback ? (
        <Feedback {...{ good, neutral, bad, total, positive }} />
      ) : (
        <Notification>No feedback yet</Notification>
      )}
    </div>
  );
}

export default App;
