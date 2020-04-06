import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography } from "@material-ui/core";
import theme from "../style/theme";
import { MyButton } from "./MyButton";

interface mainProps {
  image: string;
}

const useStyles = makeStyles({
  main: {
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "top center",
    margin: "40px 0 0",
    padding: "10px",
    [theme.breakpoints.up("sm")]: {
      padding: "200px 30px 100px",
    },
    [theme.breakpoints.up("md")]: {
      // Did this breakpoint this way so you would know I could do both kinds.  See /src/style/App.css for use of media query
      backgroundPosition: "top left",
      maxHeight: "550px",
      padding: "300px 10% 100px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "400px 10% 100px",
    },
    [theme.breakpoints.up("xl")]: {
      backgroundSize: "100VW",
    },
  },
});

export const Main: React.FC<mainProps> = ({ image }) => {
  const classes = useStyles();
  return (
    <div className={classes.main} style={{ backgroundImage: image }}>
      <Typography variant={"h1"}>New Games & Accessories</Typography>
      <Typography variant={"h2"}>Monthy packages.</Typography>
      <Typography variant={"h2"}>Excitement delivered daily.</Typography>
      <Typography variant={"h3"}>
        What’s the best way to shop for the latest video games and peripherals? How about never shopping at all?
        <br />
        You’ll get new stuff on your doorstep — every month.
      </Typography>
      <MyButton>Get Started</MyButton>
    </div>
  );
};
