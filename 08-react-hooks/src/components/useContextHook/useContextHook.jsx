import React, { createContext, useState } from "react";
import ChildComponent from "./ChildComponent";

const AppContext = createContext();
const useContextHook = () => {
  const [userName, setUserName] = useState("");

  return (
    <AppContext.Provider value={{userName, setUserName}}>
      <div>
        <h1>useContext hook</h1>
        <ChildComponent />
      </div>
    </AppContext.Provider>
  );
};

export default useContextHook;
export { AppContext };
