// "use client";
// import React, { useEffect, useState } from "react";

// export const Timer = () => {
//   const [timer, setTimer] = useState({
//     time: "00",
//     minutes: "00",
//     second: "00",
//     millisecond: "00",
//   });
//   const [start, setStart] = useState(false);

//   useEffect(() => {
//     let inter;
//     if (start) {
//       inter = setInterval(() => {
//         setTimer((prev) => {
//           let seconds = prev.second;
//           let milliseconds = prev.millisecond;
//           let minute = prev.minutes;
//           let time = prev.time;

//           milliseconds++;

//           if (milliseconds === 100) {
//             seconds++;
//             milliseconds = 0;
//           }
//           if (seconds === 60) {
//             minute++;
//             seconds = 0;
//           }
//           if (minute === 60) {
//             time++;
//             minute = 0;
//           }

//           return {
//             second: seconds,
//             time: time,
//             millisecond: milliseconds,
//             minutes: minute,
//           };
//         });
//       }, 10);
//     }
//     return () => {
//       clearInterval(inter);
//     };
//   }, [start]);

//   const resetHandler = () => {
//     setStart(false);
//     setTimer({
//       time: "00",
//       minutes: "00",
//       second: "00",
//       millisecond: "00",
//     });
//   };

//   return (
//     <>
//       <div className="flex gap-2 w-[302px] h-[50px] justify-around items-center ">
//         <div className="flex flex-col">
//           <p className="text-xs">Hours</p>
//           <div className="text-[32px]"> {timer.time}</div>
//         </div>
//         <div className="flex flex-col">
//           <p className="text-xs">Minutes</p>
//           <div className="text-[32px]">:{timer.minutes}</div>
//         </div>
//         <div className="flex flex-col">
//           <p className="text-xs">Seconds</p>
//           <div className="text-[32px]">:{timer.second}</div>
//         </div>
//         <div className="flex flex-col">
//           <p className="text-xs">Milliseconds</p>
//           <div className="text-[32px]">:{timer.millisecond}</div>
//         </div>
//       </div>
//       <div className="flex justify-around">
//         <button onClick={() => setStart(true)}> Start</button>
//         <button onClick={() => setStart(false)}> Stop</button>
//         <button onClick={resetHandler}> Reset</button>
//       </div>
//     </>
//   );
// };

"use client";
import React, { useState, useEffect } from "react";

export const Timer = () => {
  const [counter, setCounter] = useState(60); // 60 seconds initially

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Calculate the hours, minutes, and seconds from the counter
  const minutes = Math.floor(counter / 60);
  const seconds = counter % 60;

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 3 }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 23 }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value":  minutes }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": seconds }}></span>
        </span>
        sec
      </div>
    </div>
  );
};
