import { PayloadAction } from "@reduxjs/toolkit";

export type LoaderState = {
  isLoading: boolean;
};

export type LoaderPayload = PayloadAction<boolean>;

export const setIsLoadingAction = (
  state: LoaderState,
  action: LoaderPayload
) => {
  state.isLoading = action.payload;
};
