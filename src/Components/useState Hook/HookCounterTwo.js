import React, { useState } from "react";

const HookCounterTwo = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  function handleClick(e) {}

  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        &nbsp;
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <br />
        <button onClick={handleClick}>Click</button>
        {/* <ul>
          {name.map((data) => (
            <li key={data.id}>{data.value}</li>
          ))}
        </ul> */}
        <h2> Your FirstName is - {name.firstName}</h2>
        <h2> Your LastName is - {name.lastName}</h2>
      </form>
    </div>
  );
};

export default HookCounterTwo;
