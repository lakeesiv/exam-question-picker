import { StopwatchResult } from "react-timer-hook";
import React from "react";

interface StopwatchProps {
  stopwatch: StopwatchResult;
}
const Stopwatch: React.FC<StopwatchProps> = ({ stopwatch }) => {
  const { seconds, minutes, hours, isRunning, start, pause, reset } = stopwatch;
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "100px" }}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset as any}>Reset</button>
    </div>
  );
};

export default Stopwatch;
