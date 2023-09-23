"use client";

import { Draggable } from "@hello-pangea/dnd";
import React from "react";

const IssueCard = () => {
  return (
    <Draggable draggableId="draggable-0" index={0}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-gray-200 p-2 mb-3"
        >
          <p className="text-[12px] mb-2">
            VOY-1865 [Welcome Treat] - (Unique Promo Code) 1
          </p>
          <div className="bg-white p-2">
            {/* Task Card: Title */}
            <p className="text-sm mb-4">QA Functional Test</p>
            {/* Task Card: Footer */}
            <div className="grid grid-cols-2">
              <div>-</div>
              <div className="flex flex-row items-center justify-end space-x-2">
                <p className="text-sm">VOY-1865</p>
                <div className="h-6 w-6 rounded-full bg-blue-500" />
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default IssueCard;
