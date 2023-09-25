import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./models";

const initialState: InitialState = {
  columns: {
    open: {
      id: "open",
      ids: ["000", "001"],
    },
    started: {
      id: "started",
      ids: ["002"],
    },
    done: {
      id: "done",
      ids: ["003"],
    },
  },
  issues: [
    {
      id: "000",
      title: "QA Functional Test",
      shortDesc: "Welcome Treat - (Unique Promo Code)",
      code: "VOY-628",
    },
    {
      id: "001",
      title: "Create Sidebar UI",
      code: "VOY-629",
    },
    {
      id: "002",
      title: "Utility Cleanup",
      code: "VOY-630",
    },
    {
      id: "003",
      title: "Greenwich Logo",
      code: "VOY-631",
    },
    {
      id: "004",
      title: "Header Section",
      code: "VOY-632",
    },
  ],
};

const issuesSlice = createSlice({
  name: "[issue]",
  initialState,
  reducers: {},
});

export default issuesSlice.reducer;
