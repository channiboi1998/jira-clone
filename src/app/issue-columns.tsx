"use client";

import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import IssueColumn from "./issue-column";
import { useState } from "react";
import { Data, Issue, data } from "@/data";

import { useSelector } from "react-redux";
import { getIssues } from "../../redux/issues/selectors";

const IssueColumns = () => {
  const issues = useSelector(getIssues);
  console.log("issues are:", issues);
  const [state, setState] = useState<Data>(data);

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    // Check if there's no destination or if it's the same location
    if (
      !destination ||
      (source.index === destination.index &&
        source.droppableId === destination.droppableId)
    ) {
      return;
    }

    const { columns } = state;
    const sourceColumn = columns[source.droppableId];
    const destinationColumn = columns[destination.droppableId];
    const id = sourceColumn.ids[source.index];

    // Clone the source and destination columns
    const updatedColumns = { ...columns };

    // Remove the item from the source column
    sourceColumn.ids.splice(source.index, 1);

    // Insert the item into the destination column
    destinationColumn.ids.splice(destination.index, 0, id);

    // Update the state with the modified columns
    setState({ ...state, columns: updatedColumns });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex-1 grid grid-cols-3 gap-3 pt-3">
        <IssueColumn
          columnId="open"
          issues={state.columns.open.ids.map(
            (id: string) =>
              state.issues.find((issue: Issue) => issue.id === id) as Issue
          )}
        />
        <IssueColumn
          columnId="started"
          issues={state.columns.started.ids.map(
            (id: string) =>
              state.issues.find((issue: Issue) => issue.id === id) as Issue
          )}
        />
        <IssueColumn
          columnId="done"
          issues={state.columns.done.ids.map(
            (id: string) =>
              state.issues.find((issue: Issue) => issue.id === id) as Issue
          )}
        />
      </div>
    </DragDropContext>
  );
};

export default IssueColumns;
