import React, { useState, useContext, createContext } from "react";

/**
 * Creating the context
 */
const MyLoginContext = createContext();


/**
 * A dummy function to render the "MyLoginContext"
 * @returns MyLoginContext
 */
export function useLoginContext() {
  return useContext(MyLoginContext);
}


/**
 * This is the function to be "exported"
 * @param {*} param0 
 * @returns 
 */
export function LoginContext({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log("Context: "+loggedIn)
  const handleLoggedIn = () => {
    setLoggedIn((prev) => !prev);
  };

  return (
    <MyLoginContext.Provider value={{ loggedIn, handleLogin: handleLoggedIn }}>
      {children}
    </MyLoginContext.Provider>
  );
}
