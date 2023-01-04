import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { jarsReducer } from "./reducers/jars.reducer";

const rootReducer = combineReducers({
  jars: jarsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store["dispatch"];