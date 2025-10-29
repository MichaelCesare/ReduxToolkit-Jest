import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { hasLoaded } from "../../features/uiOptions/actions";
import { Themes } from "../../features/uiOptions/components";
import { selectHasLoaded } from "../../features/uiOptions/selectors";

export const UIOptions = () => {
  const dispatch = useDispatch();
  const isLoaded = useSelector(selectHasLoaded);

  useEffect(() => {
    if (!isLoaded) {
      dispatch(hasLoaded());
    }
  }, [isLoaded]);

  return (
    <>
      <div className="ui-options">
        <p>TOGGLERS</p>
        <Themes />
      </div>
    </>
  );
};
