import React, { useMemo, useState } from "react";

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  function handleClickOne() {
    setCounterOne(counterOne + 1);
  }
  function handleClickTwo() {
    setCounterTwo(counterTwo + 1);
  }
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);
  return (
    <div>
      <button onClick={handleClickOne}>INC - {counterOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <br />
      <button onClick={handleClickTwo}>INC - {counterTwo}</button>
    </div>
  );
};

export default Counter;
