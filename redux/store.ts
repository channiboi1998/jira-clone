import {
  configureStore,
  combineReducers,
  Reducer,
  AnyAction,
} from "@reduxjs/toolkit";
import storiesSlice from "./stories/slice";

const rootReducer = combineReducers({
  storiesSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const root: Reducer = (state: RootState, action: AnyAction) => {
  return rootReducer(state, action);
};

export const store = configureStore({
  reducer: root,
});
