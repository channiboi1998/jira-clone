"use client";

import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import OpenIssueColumn from "./open-issue-column";
import { useState } from "react";
import { Issue, IssueStatus, data } from "@/data";

const IssueBoard = () => {
  const [issues, setIssues] = useState<Issue[]>(data.issues);

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    if (source.index === destination.index) {
      return;
    }

    const copy = [...issues];
    copy.splice(source.index, 1);
    copy.splice(destination.index, 0, issues[source.index]);
    setIssues(copy);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex-1 grid grid-cols-3 gap-3 pt-3">
        <OpenIssueColumn
          issues={issues.filter(
            (issue: Issue) => issue.status === IssueStatus.OPEN
          )}
        />
      </div>
    </DragDropContext>
  );
};

export default IssueBoard;
