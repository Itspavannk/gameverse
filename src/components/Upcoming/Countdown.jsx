import { useEffect, useState } from "react";

export default function Countdown({ targetDate }) {
  const calculate = () => {
    const difference = new Date(targetDate) - new Date();

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),

      hours: String(
        Math.floor((difference / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0"),

      minutes: String(
        Math.floor((difference / (1000 * 60)) % 60)
      ).padStart(2, "0"),

      seconds: String(
        Math.floor((difference / 1000) % 60)
      ).padStart(2, "0"),
    };
  };

  const [time, setTime] = useState(calculate());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculate());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown">

      <div className="count-box">
        <h1>{time.days}</h1>
        <span>DAYS</span>
      </div>

      <div className="count-box">
        <h1>{time.hours}</h1>
        <span>HOURS</span>
      </div>

      <div className="count-box">
        <h1>{time.minutes}</h1>
        <span>MINUTES</span>
      </div>

      <div className="count-box">
        <h1>{time.seconds}</h1>
        <span>SECONDS</span>
      </div>

    </div>
  );
}