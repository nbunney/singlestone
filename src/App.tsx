import React from "react";
import theme from "./style/theme";
import MuiThemeProvider from "@material-ui/styles/ThemeProvider";
import "./style/App.css";
import { Header } from "./component/Header";
import { Main } from "./component/Main";

function App() {
  return (
    <div className="App" style={{ width: "100%", overflowX: "hidden" }}>
      <MuiThemeProvider theme={theme}>
        <Header logo={"./logo-endless.svg"} />
        <Main image={`url("./photo-couch.jpg")`} />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
