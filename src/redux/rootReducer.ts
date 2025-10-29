import { combineReducers } from "redux";

import { uiOptions } from "../features/uiOptions/reducer";

export const rootReducer = combineReducers({
  uiOptions,
});
