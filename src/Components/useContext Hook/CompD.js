import React, { useContext } from "react";
import { UserContext, SurNameContext } from "./CompA";

const CompD = () => {
  const user = useContext(UserContext);
  const surname = useContext(SurNameContext);
  return (
    <h1>
      User Context value is -<i style={{ color: "red" }}>{user}</i>
      <br />
      SurName Context value is -<i style={{ color: "red" }}>{surname}</i>
    </h1>
  );
};

export default CompD;
