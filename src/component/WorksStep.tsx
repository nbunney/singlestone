import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  step: {},
});

export const WorksStep: React.FC = () => {
  const classes = useStyles();
  return <div className={classes.step}></div>;
};
