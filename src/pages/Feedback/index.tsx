import { useState, useEffect } from "react";
import Description from "../../components/Description";
import Options, { type OptionType } from "../../components/Options";
import Feedback from "../../components/Feedback";
import css from "./Feedback.module.css";

export default function FeedbackPage() {
  const [saved] = useState(() => {
    const data = localStorage.getItem("feedback-data");
    return data ? JSON.parse(data) : { good: 0, neutral: 0, bad: 0 };
  });
  const [good, setGood] = useState(saved.good);
  const [neutral, setNeutral] = useState(saved.neutral);
  const [bad, setBad] = useState(saved.bad);

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
    <div className={css.feedback}>
      <Description />
      <Options onClick={(type) => handleOptionClick(type)} />
      <Feedback good={good} neutral={neutral} bad={bad} />
    </div>
  );
}
