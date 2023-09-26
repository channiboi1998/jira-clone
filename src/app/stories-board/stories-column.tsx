"use client";

import { Droppable } from "@hello-pangea/dnd";
import React from "react";
import { Story } from "../../../redux/stories/models";
import StoryCard from "./story-card";

type Props = {
  columnId: string;
  stories: Story[];
};

const StoriesColumn = ({ stories, columnId }: Props) => {
  return (
    <Droppable droppableId={columnId}>
      {(provided) => (
        <div
          className="bg-gray-100 p-2"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {stories.map((story: Story, index: number) => (
            <StoryCard key={story.id} story={story} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default StoriesColumn;
