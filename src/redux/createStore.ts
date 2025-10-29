import { configureStore } from "@reduxjs/toolkit";

import { uiOptions } from "../features/uiOptions/reducer";

import { rootReducer } from "./rootReducer";

const standardMiddleware = () => (next: any) => (action: any) => {
  if (action && "type" in action) {
    return next(action);
  }
  // none redux actions break middleware and reducers
  console.log("anomaly dispatching:", action);
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    uiOptions: {
      ...uiOptions.getInitialState(),
      theme: "none",
    },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(standardMiddleware),
});

export default store;
