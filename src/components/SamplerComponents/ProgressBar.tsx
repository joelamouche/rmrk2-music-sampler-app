import React, { useEffect } from "react";

export const ProgressBar = (value: string, max: string) => {
  return (
    <progress
      className="nes-progress is-primary"
      value={value}
      max={max}
    ></progress>
  );
};

const granularity = 10;

export const ProgressBarLoopTimer = (
  startTime: number,
  bpm: number,
  numberOfBars: number
) => {
  const loopTime = (60000 / bpm) * 4 * numberOfBars;
  const [currentLoopTime, setCurrentLoopTime] = React.useState(0);
  const interval = loopTime / granularity; //Math.floor(loopTime / granularity);
  console.log((Date.now() - startTime) % loopTime, loopTime)
  useEffect(() => {
    setInterval(() => {
      setCurrentLoopTime((Date.now() - startTime) % loopTime);
    }, interval);
  }, []);
  return ProgressBar(currentLoopTime.toString(), loopTime.toString());
};
