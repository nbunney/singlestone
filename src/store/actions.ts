import axios from "axios";
import { Work, WorksContent, WorksRaw } from "./reducer";
import { SAVE_WORKS } from "./actionTypes";
import { Action, Dispatch } from "redux";

const apiURL = `https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge`;

export interface CustomAction extends Action {
  type: string;
  payload?: any;
}

const processWorks = (rawWorks: WorksRaw[]): Work[] => {
  console.log(rawWorks);
  const works: Work[] = rawWorks.map((rawWork) => {
    const content = rawWork.versionContent.reduce((a: WorksContent, c: WorksContent) =>
      !a || c.effectiveDate > a.effectiveDate ? c : a
    );
    return {
      id: rawWork.id,
      stepNumber: parseInt(rawWork.stepNumber, 10),
      title: content.title,
      body: content.body,
    };
  });
  const compare = (a: Work, b: Work) => (a.stepNumber < b.stepNumber ? -1 : 1);
  works.sort(compare);
  return works;
};

export const saveWorks = (rawWorks: WorksRaw[]) => {
  const works = processWorks(rawWorks);
  return {
    worksLoaded: true,
    works: works,
  };
};

export const loadWorks = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(apiURL, {});
      dispatch({ type: SAVE_WORKS, payload: response.data });
    } catch (error) {
      console.log("error in loadWorks");
      console.log(error);
    }
  };
};
