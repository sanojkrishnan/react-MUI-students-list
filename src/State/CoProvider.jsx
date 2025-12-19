
import { useState } from "react";
import { ThemeCoContext } from "./theme";


function ThemeCoProvider({ children }) {
  const [viewContent, setViewContent] = useState("none");

  return (
    <ThemeCoContext.Provider value={{viewContent, setViewContent }}>
      {children}
    </ThemeCoContext.Provider>
  );
}

export default ThemeCoProvider;
