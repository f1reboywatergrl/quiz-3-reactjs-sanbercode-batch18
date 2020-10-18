import React, { useState, createContext } from "react";

export const Context = createContext();

export const Provider = props => {
  const [login, setLogin] = useState(false)

  return (
    <Context.Provider value={[login, setLogin]}>
      {props.children}
    </Context.Provider>
  )
}