import React, { useState } from "react";

export const ThemeContext = React.createContext("dark");

export function ThemeContextProvider(props) {
  let [background, setBackground] = useState("dark");

  const contextValues = {
    background: background,
    handleBackground: handleBackground,
  };

  function handleBackground(event) {
    setBackground(event.target.value);
  }

  return (
    <ThemeContext.Provider value={contextValues}>
      {props.children}
    </ThemeContext.Provider>
  );
}
