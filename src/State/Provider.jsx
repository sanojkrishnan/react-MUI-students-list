
import { useState } from "react";
import { ThemeContext } from "./theme";


function ThemeProvider({ children }) {
  const [viewEdit, setViewEdit] = useState("none");

  return (
    <ThemeContext.Provider value={{ viewEdit, setViewEdit }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
