"use client";

import { DragDropContext } from "@hello-pangea/dnd";
import OpenIssueColumn from "./open-issue-column";
import { useState } from "react";
import { Issue, IssueStatus, data } from "@/data";

const IssueBoard = () => {
  const [issues, setIssues] = useState<Issue[]>(data.issues);

  return (
    <DragDropContext onDragEnd={() => console.log("drag end")}>
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
