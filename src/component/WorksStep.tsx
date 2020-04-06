import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import theme from "../style/theme";
import { Work } from "../store/reducer";

interface WorkStepProps {
  work: Work;
}
const useStyles = makeStyles({
  step: {
    width: "98%",
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.up("md")]: {
      // Did this breakpoint this way so you would know I could do both kinds.  See /src/style/App.css for use of media query
      width: "25%",
    },
  },
  stepNumber: {
    fontSize: "72px",
    width: "100%",
    textAlign: "center",
  },
  line: {
    height: "7px",
    width: "30%",
    margin: "10px 35%",
    backgroundColor: theme.palette.secondary.main,
  },
  stepDescription: {
    textTransform: "uppercase",
    fontSize: "22px",
    width: "100%",
    textAlign: "center",
    margin: "15px 0",
    fontWeight: "bold",
  },
  stepText: {
    padding: "0 10px",
    textAlign: "center",
    fontSize: "18px",
  },
});

export const WorksStep: React.FC<WorkStepProps> = ({ work }) => {
  const classes = useStyles();

  return (
    <div className={classes.step}>
      <div className={classes.stepNumber}>{work.stepNumber.toString().padStart(2, "0")}</div>
      <div className={classes.line} />
      <div className={classes.stepDescription}>{work.title}</div>
      <div className={classes.stepText}>{work.body}</div>
    </div>
  );
};
