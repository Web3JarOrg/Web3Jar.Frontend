import React, { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";

import { store } from "../store/store";

const ReduxProvider: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxProvider;
