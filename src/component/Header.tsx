import React from 'react';
import { AppBar } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import theme from '../style/theme';

export interface HeaderProps {
  logo: string;
}

const useStyles = makeStyles({
  logo: {
    fill: "rgb(80, 227, 194)",
    width: "100px",
    margin: "20px"
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      padding: "0 10%",
    },
    backgroundColor: theme.palette.background.main
  }
});

export const Header: React.FC<HeaderProps> = ({logo}) => {
  const classes = useStyles();
  return <AppBar position={"static"} className={classes.appBar}>
    <img src={logo} className={classes.logo} alt={"Endless Gaming"} />
  </AppBar>
}
