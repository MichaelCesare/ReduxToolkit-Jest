import { createAction } from "@reduxjs/toolkit";

export const setTheme = createAction<string>("uiOptions/setTheme");

export const hasLoaded = createAction("uiOptions/hasLoaded");
