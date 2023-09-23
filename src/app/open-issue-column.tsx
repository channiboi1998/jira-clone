"use client";

import { Droppable } from "@hello-pangea/dnd";
import React from "react";
import IssueCard from "./issue-card";
import { Issue } from "@/data";

type Props = {
  issues: Issue[];
};

const OpenIssueColumn = ({ issues }: Props) => {
  console.log(issues);
  return (
    <Droppable droppableId="droppable-open">
      {(provided) => (
        <div
          className="bg-gray-100 p-2"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {issues.map((issue: Issue, index: number) => (
            <IssueCard key={index} issue={issue} />
          ))}
        </div>
      )}
    </Droppable>
  );
};

export default OpenIssueColumn;
