import {
  configureStore,
  combineReducers,
  Reducer,
  AnyAction,
} from "@reduxjs/toolkit";
import issuesSlice from "./issues/slice";

const rootReducer = combineReducers({
  issuesSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const root: Reducer = (state: RootState, action: AnyAction) => {
  return rootReducer(state, action);
};

export const store = configureStore({
  reducer: root,
});
