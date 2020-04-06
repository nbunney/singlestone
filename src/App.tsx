import React from "react";
import theme from "./style/theme";
import MuiThemeProvider from "@material-ui/styles/ThemeProvider";
import "./style/App.css";
import { Header } from "./component/Header";
import { Main } from "./component/Main";
import { HowItWorks } from "./component/HowItWorks";

function App() {
  return (
    <div className="App" style={{ width: "100%", overflowX: "hidden" }}>
      <MuiThemeProvider theme={theme}>
        <Header logo={"./logo-endless.svg"} />
        <Main image={`url("./photo-couch.jpg")`} />
        <HowItWorks></HowItWorks>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
