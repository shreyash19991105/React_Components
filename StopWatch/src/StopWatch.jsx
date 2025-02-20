import { useRef, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timeRef = useRef(null);

  const start = () => {
    timeRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    setIsRunning(true);
  };
  const stop = () => {
    clearInterval(timeRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    timeRef.current = null;
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div>
      StopWatch
      <h1>{time}</h1>
      <button onClick={start} disabled={isRunning}>
        Start
      </button>
      <button onClick={stop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={reset} disabled={!isRunning}>
        Reset
      </button>
    </div>
  );
};

export default StopWatch;
