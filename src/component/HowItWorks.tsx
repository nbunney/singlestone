import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  works: {
    width: "80%",
    backgroundColor: "white",
    padding: "50px 10% 100px",
  },
  worksH2: {
    textAlign: "center",
    fontSize: "36px!important",
    color: "#2f3237",
  },
  steps: {
    display: "flex",
    flexFlow: "row wrap",
    margin: "0 0 0 -.5rem",
  },
});

export const HowItWorks: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.works}>
      <Typography variant={"h2"} className={classes.worksH2}>
        How It Works
      </Typography>
      <div className={classes.steps}></div>
    </div>
  );
};
