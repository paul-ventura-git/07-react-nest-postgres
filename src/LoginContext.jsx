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
  const [user, setUser] = useState([]);

  const handleUserLogin = (elem) => {
    setUser({
      username: elem.username,
      firstName: elem.firstName,
      lastName: elem.lastName,
      email: elem.email,
      password: elem.password,
      permissions: ["admin", "editor"]
    });
  }

  const handleUserLogout = () => {
    setUser({});
  }

  return (
    <MyLoginContext.Provider value={{ 
      user,
      handleUserLogin: handleUserLogin,
      handleUserLogout: handleUserLogout
      }}>
      {children}
    </MyLoginContext.Provider>
  );
}
