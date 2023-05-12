import React, { useEffect, useState } from "react";

const CounterEffectHooks = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    // console.log("Btn Clicked...");
  }

  useEffect(() => {
    document.title = `You clicked ${count} Times`;
    // setCount(count + 2);
    console.log("usEffect called...");
  });

  return (
    <div>
      <button onClick={handleClick}>CLicked {count} times</button>
    </div>
  );
};

export default CounterEffectHooks;
