import { createSlice } from "@reduxjs/toolkit";

import { Web3Jar } from "../../typechain";
import { getAllJars, getAllJarsData, JarType } from "../actions/jars.actions";

type InitialState = {
  jarsContracts: Web3Jar[];
  jarsData: JarType[];
};

const initialState: InitialState = {
  jarsContracts: [],
  jarsData: [],
};

const jarsSlice = createSlice({
  name: "jars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllJarsData.fulfilled, (state, action) => {
      state.jarsData = action.payload;
    });
    builder.addCase(getAllJars.fulfilled, (state, action) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.jarsContracts = action.payload;
    });
  },
});

export const jarsReducer = jarsSlice.reducer;
