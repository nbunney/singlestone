import * as actionTypes from "./actionTypes";
import { Action, Reducer } from "redux";
import { CustomAction, saveWorks } from "./actions";

export interface WorksContent {
  title: string;
  body: string;
  effectiveDate: string;
}

export interface Work {
  id: string;
  stepNumber: number;
  title: string;
  body: string;
}

export interface WorksRaw {
  id: string;
  stepNumber: string;
  versionContent: WorksContent[];
}

export interface storeType {
  worksLoaded: boolean;
  works: Work[];
}

const initialState = {
  worksLoaded: false,
  works: [],
};

const reducer: Reducer<storeType, CustomAction> = (state: storeType = initialState, action: CustomAction) => {
  switch (action.type) {
    case actionTypes.SAVE_WORKS: {
      return saveWorks(action.payload);
    }
    default:
      return state;
  }
};

export default reducer;
