"use client";
import React, { useEffect, useState } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState({
    time: "00",
    minutes: "00",
    second: "00",
    millisecond: "00",
  });
  const [start, setStart] = useState(false);

  useEffect(() => {
    let inter;
    if (start) {
      inter = setInterval(() => {
        setTimer((prev) => {
          let seconds = prev.second;
          let milliseconds = prev.millisecond;
          let minute = prev.minutes;
          let time = prev.time;

          milliseconds++;

          if (milliseconds === 100) {
            seconds++;
            milliseconds = 0;
          }
          if (seconds === 60) {
            minute++;
            seconds = 0;
          }
          if (minute === 60) {
            time++;
            minute = 0;
          }

          return {
            second: seconds,
            time: time,
            millisecond: milliseconds,
            minutes: minute,
          };
        });
      }, 10);
    }
    return () => {
      clearInterval(inter);
    };
  }, [start]);

  const resetHandler = () => {
    setStart(false);
    setTimer({
      time: "00",
      minutes: "00",
      second: "00",
      millisecond: "00",
    });
  };

  return (
    <>
      <div className="flex gap-2 w-[302px] h-[50px] justify-around items-center ">
        <div className="flex flex-col">
          <p className="text-xs">Hours</p>
          <div className="text-[32px]"> {timer.time}</div>
        </div>
        <div className="flex flex-col">
          <p className="text-xs">Minutes</p>
          <div className="text-[32px]">:{timer.minutes}</div>
        </div>
        <div className="flex flex-col">
          <p className="text-xs">Seconds</p>
          <div className="text-[32px]">:{timer.second}</div>
        </div>
        <div className="flex flex-col">
          <p className="text-xs">Milliseconds</p>
          <div className="text-[32px]">:{timer.millisecond}</div>
        </div>
      </div>
      <div className="flex justify-around">
        <button onClick={() => setStart(true)}> Start</button>
        <button onClick={() => setStart(false)}> Stop</button>
        <button onClick={resetHandler}> Reset</button>
      </div>
    </>
  );
};
