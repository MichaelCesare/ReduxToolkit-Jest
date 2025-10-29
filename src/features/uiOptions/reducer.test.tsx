import { Action, configureStore, Store } from "@reduxjs/toolkit";

import { setTheme, hasLoaded } from "./actions";
import { uiOptions } from "./reducer";
import { IUIOptionsState } from "./typings";

const initialState = uiOptions.getInitialState();

type TAppStore = Store<
  { uiOptions: IUIOptionsState }, // state shape
  Action // action type
> & {
  dispatch: (action: any) => any;
};

describe("uiOptionsReducer", () => {
  let store: TAppStore;
  let storeState = { ...initialState };

  it("should handle hasLoaded for uiOptions update", () => {
    // Arrange
    store = configureStore({
      reducer: { uiOptions },
      preloadedState: {
        uiOptions: {
          ...storeState,
        },
      },
    });
    // Act
    store.dispatch(hasLoaded());
    const state = store.getState().uiOptions;
    // Assert
    expect(state.hasLoaded).toBeTruthy();
  });

  it("should handle setTheme for uiOptions update", () => {
    // Arrange
    const payload = "dark";
    store = configureStore({
      reducer: { uiOptions },
      preloadedState: {
        uiOptions: {
          ...storeState,
          theme: "light", // will change
        },
      },
    });
    // Act
    store.dispatch(setTheme(payload));
    const state = store.getState().uiOptions;
    // Assert
    expect(state.theme).toBe(payload);
  });

  it("should ignore setTheme having none value", () => {
    // Arrange
    const payload = "none";
    store = configureStore({
      reducer: { uiOptions },
      preloadedState: {
        uiOptions: {
          ...storeState,
          theme: "light", // will not change
        },
      },
    });
    // Act
    store.dispatch(setTheme(payload));
    const state = store.getState().uiOptions;
    // Assert
    expect(state.theme).toBe("light");
  });
});
