import React, { createContext } from "react";
import CompB from "./CompB";

export const UserContext = createContext();
export const SurNameContext = createContext();

const CompA = () => {
  return (
    <div>
      <UserContext.Provider value={"Vaibhav"}>
        <SurNameContext.Provider value={"Vasoya"}>
          <CompB />
        </SurNameContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default CompA;
