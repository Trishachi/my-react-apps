import React, { useState } from "react";

const ThemeContext = React.createContext({
  dark: false,
  toggle: () => {}
});

export function ThemeProvider(props) {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    setDark(!dark);
    window.localStorage.setItem("darkTheme", !dark);
  };
  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggle
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
