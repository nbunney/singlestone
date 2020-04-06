import React, { useEffect } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography } from "@material-ui/core";
import { WorksStep } from "./WorksStep";
import { connect } from "react-redux";
import { loadWorks } from "../store/actions";
import { Work } from "../store/reducer";
import { bindActionCreators, Dispatch } from "redux";

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
    maxWidth: "100%",
  },
  steps: {
    display: "flex",
    flexFlow: "row wrap",
    margin: "0 0 0 -.5rem",
    justifyContent: "center",
  },
});

interface HowItWorksProps {
  state: any;
  loadWorks: Function;
}

const HowItWorksComponent: React.FC<HowItWorksProps> = ({ state, loadWorks }) => {
  const { worksLoaded, works } = state;
  const classes = useStyles();

  useEffect(() => {
    loadWorks();
  }, []);

  return (
    <div className={classes.works}>
      <Typography variant={"h2"} className={classes.worksH2}>
        How It Works
      </Typography>
      <div className={classes.steps}>
        {worksLoaded &&
          works.map((workStep: Work) => {
            return <WorksStep key={workStep.id} work={workStep} />;
          })}
      </div>
    </div>
  );
};

const mapActionsToProps = (dispatch: Dispatch) => {
  return {
    loadWorks: bindActionCreators(loadWorks, dispatch),
  };
};

const mapStateToProps = (state: any) => ({ state: state });
const HowItWorks = connect(mapStateToProps, mapActionsToProps)(HowItWorksComponent);
export default HowItWorks;
