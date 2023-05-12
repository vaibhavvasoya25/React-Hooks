import React, { useEffect, useState } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function logMousePosition(e) {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(() => {
    console.log("useEffect is called");
    window.addEventListener("mousemove", logMousePosition);
  }, []);
  return (
    <div>
      Hooks- X-{x} Y-{y}
    </div>
  );
};

export default HookMouse;
