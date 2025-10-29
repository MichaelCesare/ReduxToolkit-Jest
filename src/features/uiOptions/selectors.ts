import { IUIOptionsSlice } from "./typings";

export const selectTheme = (state: IUIOptionsSlice) => state.uiOptions.theme;
export const selectHasLoaded = (state: IUIOptionsSlice) =>
  state.uiOptions.hasLoaded;
