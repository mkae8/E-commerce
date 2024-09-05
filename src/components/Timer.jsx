"use client";
import React, { useEffect, useState } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 59,
  });
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {
        setTimer((prev) => {
          let { days, hours, minutes, seconds } = prev;

          if (seconds > 0) {
            seconds--;
          } else {
            seconds = 59;
            if (minutes > 0) {
              minutes--;
            } else {
              minutes = 59;
              if (hours > 0) {
                hours--;
              } else {
                hours = 23;
                if (days > 0) {
                  days--;
                } else {
                  clearInterval(interval);
                }
              }
            }
          }

          return { days, hours, minutes, seconds };
        });
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [start]);

  const resetHandler = () => {
    setStart(false);
    setTimer({
      days: 3,
      hours: 23,
      minutes: 19,
      seconds: 59,
    });
  };

  return (
    <>
      <div className=" grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timer.days }}></span>
          </span>
          days
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timer.hours }}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timer.minutes }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timer.seconds }}></span>
          </span>
          sec
        </div>

        <div className="flex justify-center mt-5">
          <button onClick={() => setStart(!start)} className="btn">
            {start ? "Pause" : "Start"}
          </button>
          <button onClick={resetHandler} className="btn ml-5">
            Reset
          </button>
        </div>
      </div>
    </>
  );
};
