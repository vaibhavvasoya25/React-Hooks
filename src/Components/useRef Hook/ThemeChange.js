import React, { useRef, useState } from "react";

const ThemeChange = () => {
  const [changeText, setChangeText] = useState(false);
  const [changeTheme, setChangeTheme] = useState(false);
  const inputRef = useRef(null);
  const btnRef = useRef(null);
  const aRef = useRef(null);
  const a2Ref = useRef(null);
  // const a3Ref = useRef(null);

  function handleClick() {
    setChangeText(!changeText);
    setChangeTheme(!changeTheme);
    inputRef.current.style.backgroundColor = "black";
    inputRef.current.style.color = "white";
    inputRef.current.style.border = "2px solid #888888";
    inputRef.current.style.boxShadow = "5px 10px 8px #888888";
    btnRef.current.style.color = "white";
    aRef.current.style.color = "lightBlue";
    a2Ref.current.style.color = "lightBlue";
    // a3Ref.current.style.color = "white";
  }

  return (
    <>
      <div className="container" ref={inputRef}>
        <h1>Sign In With...</h1>
        <div>
          <label>UserName:</label>
          <input type="text" />
          <br />
          <label>Password:</label>
          <input type="text" />
          <br />
          <br />
          <button>
            <b>Login</b>
          </button>{" "}
          <button
            style={{ backgroundColor: "gray", color: "black" }}
            onClick={handleClick}
            ref={btnRef}
          >
            <b>
              {changeText ? (
                <a style={{ color: "white", textDecoration: "none" }} href="/ ">
                  Light Mode
                </a>
              ) : (
                "Dark Mode"
              )}
            </b>
          </button>
          <br />
          <br />
          <li>
            Forgot{" "}
            <a ref={aRef} href="/">
              UserName or Password?
            </a>
          </li>
          <li>
            Don't have an account?{" "}
            <a ref={a2Ref} href="/">
              SignUp now
            </a>
          </li>
          <br />
        </div>
      </div>
    </>
  );
};

export default ThemeChange;
