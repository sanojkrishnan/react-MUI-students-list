import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import ThemeProvider from "./State/Provider";
import RowProvider from "./State/RowProvider";
import ThemeCoProvider from "./State/CoProvider";

function App() {
  return (
    <div>
      <RowProvider>
        <Header />
        <ThemeCoProvider>
          <ThemeProvider>
            <Main />
          </ThemeProvider>
        </ThemeCoProvider>
      </RowProvider>
    </div>
  );
}

export default App;
