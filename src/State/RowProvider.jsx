import { useState } from "react";
import { RowContext } from "./theme";

function RowProvider({ children }) {
  const [rowValue, setRowValue] = useState({});

  

  return (
    <RowContext.Provider value={{ rowValue, setRowValue }}>
      {children}
    </RowContext.Provider>
  );
}

export default RowProvider;
