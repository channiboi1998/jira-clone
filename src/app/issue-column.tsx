"use client";

import { Droppable } from "@hello-pangea/dnd";
import React from "react";
import IssueCard from "./issue-card";
import { Issue } from "@/data";

type Props = {
  columnId: string;
  issues: Issue[];
};

const OpenIssueColumn = ({ issues, columnId }: Props) => {
  return (
    <Droppable droppableId={columnId}>
      {(provided) => (
        <div
          className="bg-gray-100 p-2"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {issues.map((issue: Issue, index: number) => (
            <IssueCard key={issue.id} issue={issue} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default OpenIssueColumn;
