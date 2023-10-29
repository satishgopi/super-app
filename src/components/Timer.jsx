import React, { useState } from "react";
import TimerComponent from "./TimerComponent";

const Timer = () => {
  const [timerData, setTimerData] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateDuration = () => {
    // Convert hours, minutes, and seconds to milliseconds
    const duration =
      (timerData.hours * 60 * 60 + timerData.minutes * 60 + timerData.seconds) *
      1000;

    return duration;
  };

  const handleSubmit = (hours, minutes, seconds) => {
    setTimerData({ hours, minutes, seconds });
  };
  return (
    <>
      {/* <TimerComponent duration={5 * 60 * 60 * 1000} /> */}
      <TimerComponent duration={calculateDuration()} onSubmit={handleSubmit} />
    </>
  );
};

export default Timer;
