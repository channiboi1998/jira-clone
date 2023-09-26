import { RootState } from "../store";
import { Column, Story } from "./models";

export const getColumns = (state: RootState): Column =>
  state.storiesSlice.columns;

export const getStories = (state: RootState): Story[] =>
  state.storiesSlice.stories;
