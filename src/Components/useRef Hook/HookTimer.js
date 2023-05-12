import React, { useEffect, useRef, useState } from "react";

const HookTimer = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevCount) => prevCount + 1);
    }, 1000);
    console.log("useEffect is called...");
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [timer]);
  return (
    <div>
      useRef Timer-{timer}
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Timer
      </button>
    </div>
  );
};

export default HookTimer;
