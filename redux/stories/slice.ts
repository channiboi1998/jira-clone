import { DropResult } from "@hello-pangea/dnd";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  stories: [
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

const storiesSlice = createSlice({
  name: "[stories]",
  initialState,
  reducers: {
    setColumns(state, action: PayloadAction<DropResult>) {
      if (action.payload.destination) {
        const { columns } = state;
        const sourceColumn = columns[action.payload.source.droppableId];
        const destinationColumn =
          columns[action.payload.destination.droppableId];
        const id = sourceColumn.ids[action.payload.source.index];

        // Clone the source and destination columns
        const updatedColumns = { ...columns };

        // Remove the item from the source column
        sourceColumn.ids.splice(action.payload.source.index, 1);

        // Insert the item into the destination column
        destinationColumn.ids.splice(action.payload.destination.index, 0, id);

        // Update the state with the modified columns
        state.columns = updatedColumns;
      }
    },
  },
});

export const { setColumns } = storiesSlice.actions;

export default storiesSlice.reducer;
