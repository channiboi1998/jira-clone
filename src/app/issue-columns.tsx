"use client";

import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import IssueColumn from "./issue-column";
import { useState } from "react";
import { Data, Issue, data } from "@/data";

import { useSelector, useDispatch } from "react-redux";
import { getColumns, getIssues } from "../../redux/issues/selectors";
import { setColumns } from "../../redux/issues/slice";

const IssueColumns = () => {
  const dispatch = useDispatch();
  const columns = useSelector(getColumns);
  const issues = useSelector(getIssues);
  //const [state, setState] = useState<Data>(data);

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

    dispatch(setColumns(result));


  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex-1 grid grid-cols-3 gap-3 pt-3">
        <IssueColumn
          columnId="open"
          issues={columns.open.ids.map(
            (id: string) =>
              issues.find((issue: Issue) => issue.id === id) as Issue
          )}
        />
        <IssueColumn
          columnId="started"
          issues={columns.started.ids.map(
            (id: string) =>
              issues.find((issue: Issue) => issue.id === id) as Issue
          )}
        />
        <IssueColumn
          columnId="done"
          issues={columns.done.ids.map(
            (id: string) =>
              issues.find((issue: Issue) => issue.id === id) as Issue
          )}
        />
      </div>
    </DragDropContext>
  );
};

export default IssueColumns;
