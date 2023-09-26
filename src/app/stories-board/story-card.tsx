"use client";

import { Draggable } from "@hello-pangea/dnd";
import React from "react";
import { Story } from "../../../redux/stories/models";

type Props = {
  story: Story;
  index: number;
};

const StoryCard = ({ story, index }: Props) => {
  return (
    <Draggable draggableId={story.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-gray-200 p-2 mb-3"
        >
          <p className="text-[12px] mb-2">
            {story.code} {story.shortDesc}
          </p>
          <div className="bg-white p-2">
            <p className="text-sm mb-4">{story.title}</p>
            <div className="grid grid-cols-2">
              <div>-</div>
              <div className="flex flex-row items-center justify-end space-x-2">
                <p className="text-sm">{story.code}</p>
                <div className="h-6 w-6 rounded-full bg-blue-500" />
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default StoryCard;
