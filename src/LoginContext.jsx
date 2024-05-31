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
  const [user, setUser] = useState([]);

  console.log("Context User: "+user+" "+user.name+" "+user.permissions)
  const handleUserLogin = () => {
    setUser({
      name: "John Doe",
      email: "johndoe@example.com",
      permissions: ["admin", "editor"]
    });
  }

  const handleUserLogout = () => {
    setUser({});
  }

  console.log("Context Boolean: "+loggedIn)
  const handleLoggedIn = () => {
    setLoggedIn((prev) => !prev);
  };

  return (
    <MyLoginContext.Provider value={{ 
      loggedIn, 
      handleLogin: handleLoggedIn,
      user,
      handleUserLogin: handleUserLogin,
      handleUserLogout: handleUserLogout
      }}>
      {children}
    </MyLoginContext.Provider>
  );
}
