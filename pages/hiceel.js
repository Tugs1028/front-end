import { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (seconds < 10) {
      const timer = setTimeout(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setDone(true);
    }
  }, [seconds]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 border rounded-lg shadow-lg text-center text-lg flex">
        <p>Тоолуур:</p>
        {done ? <p>Done!</p> : <p> {seconds}</p>}
      </div>
    </div>
  );
}
