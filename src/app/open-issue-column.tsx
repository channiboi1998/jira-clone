"use client";

import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import React from "react";
import IssueCard from "./issue-card";

const OpenIssueColumn = () => {
  return (
    <DragDropContext
      onDragUpdate={() => {}}
      onDragEnd={() => console.log("drag end")}
    >
      <Droppable droppableId="droppable-1">
        {(provided) => (
          <div
            className="bg-gray-100 p-2"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <IssueCard />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default OpenIssueColumn;
