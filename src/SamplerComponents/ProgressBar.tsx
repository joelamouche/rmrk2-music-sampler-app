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

const granularity = 100;

export const ProgressBarLoopTimer = (startTime: number, loopTime: number) => {
  const [currentLoopTime, setCurrentLoopTime] = React.useState(startTime);
  const interval = Math.floor(loopTime / granularity);
  useEffect(() => {
    setInterval(() => {
      setCurrentLoopTime((Date.now() - startTime) % loopTime);
    }, interval);
  }, []);
  return ProgressBar(currentLoopTime.toString(), loopTime.toString());
};
