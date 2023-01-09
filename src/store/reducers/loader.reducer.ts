import { createSlice } from "@reduxjs/toolkit";

import { LoaderState, setIsLoadingAction } from "../actions/loader.actions";

const initialState: LoaderState = {
  isLoading: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setIsLoading: setIsLoadingAction,
  },
});

export const loaderReducer = loaderSlice.reducer;
export const { setIsLoading } = loaderSlice.actions;
