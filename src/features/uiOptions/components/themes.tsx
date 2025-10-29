import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectTheme } from "../selectors";
import { setTheme } from "../actions";

export const Themes = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const handleOnClick = (theme: string) => {
    if (!theme) {
      return false;
    }

    dispatch(setTheme(theme));
  };

  return (
    <div>
      <span>Set Theme:</span>
      <div className="theme">{theme}</div>
      <button onClick={() => handleOnClick("none")}>NONE</button>
      <button onClick={() => handleOnClick("classic")}>Classic</button>
      <button onClick={() => handleOnClick("modern")}>Modern</button>
    </div>
  );
};
