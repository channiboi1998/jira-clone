import { RootState } from "../store";
import { Column, Issue } from "./models";

export const getColumns = (state: RootState): Column =>
  state.issuesSlice.columns;

export const getIssues = (state: RootState): Issue[] =>
  state.issuesSlice.issues;
