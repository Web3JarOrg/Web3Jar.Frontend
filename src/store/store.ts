import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { jarsReducer } from "./reducers/jars.reducer";
import { loaderReducer } from "./reducers/loader.reducer";

const rootReducer = combineReducers({
  jars: jarsReducer,
  loader: loaderReducer,
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
