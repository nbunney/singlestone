import React from "react";
import { AppBar } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import theme from "../style/theme";

export interface HeaderProps {
  logo: string;
}

const useStyles = makeStyles({
  logo: {
    width: "100px",
    margin: "20px 30px",
    [theme.breakpoints.up("md")]: {
      // I used this here but check in style/App.css where I use more CSS oriented break points.
      margin: "20px 0",
    },
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      // I used this here but check in style/App.css where I use more CSS oriented break points.
      padding: "0 10%",
    },
    backgroundColor: theme.palette.background.main,
  },
});

export const Header: React.FC<HeaderProps> = ({ logo }) => {
  const classes = useStyles();
  return (
    <AppBar position={"fixed"} className={classes.appBar}>
      <img src={logo} className={classes.logo} alt={"Endless Gaming"} />
    </AppBar>
  );
};
