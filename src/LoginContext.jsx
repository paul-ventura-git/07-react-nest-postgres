import React, { useState, useContext, createContext } from "react";

/**
 * Creating the context
 */
const MyLoginContext = createContext();


/**
 * A dummy function to reder the my context
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

  const handleLoggedIn = () => {
    setLoggedIn((prev) => !prev);
    console.log(loggedIn)
  };

  return (
    <MyLoginContext.Provider value={{ loggedIn, handleLogin: handleLoggedIn }}>
      {children}
    </MyLoginContext.Provider>
  );
}
