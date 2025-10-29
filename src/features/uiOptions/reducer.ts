import { createReducer } from "@reduxjs/toolkit";

import { IUIOptionsState } from "./typings";
import { setTheme, hasLoaded } from "./actions";
import { initialState } from "./constants";

export const uiOptions = createReducer<IUIOptionsState>(
  initialState,
  (builder) => {
    builder
      .addCase(hasLoaded, (state) => {
        state.hasLoaded = true;
      })
      .addCase(setTheme, (state, { payload }) => {
        if (payload !== "none") {
          state.theme = payload;
        }
      });
  }
);
