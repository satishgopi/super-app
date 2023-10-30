import React, { useState, useEffect } from "react";
import downArrow from "../assets/img/ic_arrow_down.svg";
import upArrow from "../assets/img/ic_arrow_up.svg";
import "../assets/css/timer.css";

const TimerComponent = ({ duration, onSubmit }) => {
  const [time, setTime] = useState(0);
  const [hours, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Function to format the numbers with two digits
  const formatNumber = (num) => num.toString().padStart(2, "0");

  const toggleTimer = () => {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        if (time > 0) {
          setTime(time - 1000);
        } else {
          setIsRunning(false); // Timer is complete
        }
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [time, isRunning]);

  const getFormattedTime = (milliseconds) => {
    let total_seconds = parseInt(Math.floor(milliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));

    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 24);

    // Convert the numbers to strings and pad with leading zeros if needed
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;
  };

  //   Hour update
  const incHour = () => {
    setHour((prevCount) => (prevCount < 24 ? prevCount + 1 : prevCount));
  };
  const decHour = () => {
    setHour((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  //   Minutes update
  const incMinutes = () => {
    setMinutes((prevCount) => (prevCount < 60 ? prevCount + 1 : prevCount));
  };
  const decMinutes = () => {
    setMinutes((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  //   Seconds Update
  const incSeconds = () => {
    setSeconds((prevCount) => (prevCount < 60 ? prevCount + 1 : prevCount));
  };
  const decSeconds = () => {
    setSeconds((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleStart = () => {
    toggleTimer();

    if (!isRunning) {
      const totalMilliseconds =
        hours * 3600000 + minutes * 60000 + seconds * 1000;
      setTime(totalMilliseconds);
      startTimer();
      onSubmit(hours, minutes, seconds);
    }
  };

  // Calculate the progress as a percentage
  const progress = 100 - (time / duration) * 100;

  // Calculate the border color dynamically
  const circleBorderStyle = {
    backgroundImage: `conic-gradient(#ff6a6a ${progress}%, transparent ${progress}% 100%)`,
  };

  const buttonText = isRunning ? "Stop" : "Start";

  return (
    <>
      <div className="timer-box">
        <div className="timer-cicrle">
          <div className="timer-cicrle-border" style={circleBorderStyle}>
            <h1>{getFormattedTime(time)}</h1>
          </div>
        </div>
        <div>
          <form>
            <ul className="timer-title">
              <li>
                <p>Hours</p>
              </li>
              <li>
                <p>Minutes</p>
              </li>
              <li>
                <p>Seconds</p>
              </li>
            </ul>
            <ul className="timer-btn-wrapp">
              <li>
                <div className="timer-btn">
                  <button type="button" onClick={incHour}>
                    <img src={upArrow} alt="" />
                  </button>
                  <h1>{formatNumber(hours)}</h1>
                  <button type="button" onClick={decHour}>
                    <img src={downArrow} alt="" />
                  </button>
                </div>
              </li>
              <li>
                <div className="dot-title">:</div>
              </li>
              <li>
                <div className="timer-btn">
                  <button type="button" onClick={incMinutes}>
                    <img src={upArrow} alt="" />
                  </button>
                  <h1>{formatNumber(minutes)}</h1>
                  <button type="button" onClick={decMinutes}>
                    <img src={downArrow} alt="" />
                  </button>
                </div>
              </li>
              <li>
                <div className="dot-title">:</div>
              </li>
              <li>
                <div className="timer-btn">
                  <button type="button" onClick={incSeconds}>
                    <img src={upArrow} alt="" />
                  </button>
                  <h1>{formatNumber(seconds)}</h1>
                  <button type="button" onClick={decSeconds}>
                    <img src={downArrow} alt="" />
                  </button>
                </div>
              </li>
            </ul>
            <button type="button" className="start-btn" onClick={handleStart}>
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TimerComponent;
