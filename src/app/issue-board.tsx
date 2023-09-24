"use client";

import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import IssueColumn from "./issue-column";
import { useState } from "react";
import { Data, Issue, IssueStatus, data } from "@/data";

const IssueBoard = () => {
  const [state, setState] = useState<Data>(data);

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    ) {
      return;
    }
    let copy = { ...state.columns };
    let id = state.columns[source.droppableId].ids[source.index];
    copy[source.droppableId].ids.splice(source.index, 1);
    copy[destination.droppableId].ids.splice(destination.index, 0, id);
    setState({ ...state, columns: copy });
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

export default IssueBoard;
