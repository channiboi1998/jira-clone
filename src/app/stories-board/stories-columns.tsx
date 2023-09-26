"use client";

import { DragDropContext, DropResult } from "@hello-pangea/dnd";

import { useSelector, useDispatch } from "react-redux";
import { getColumns, getStories } from "../../../redux/stories/selectors";
import { setColumns } from "../../../redux/stories/slice";
import { Story } from "../../../redux/stories/models";
import StoriesColumn from "./stories-column";

const StoriesColumns = () => {
  const dispatch = useDispatch();
  const columns = useSelector(getColumns);
  const stories = useSelector(getStories);

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
        <StoriesColumn
          columnId="open"
          stories={columns.open.ids.map(
            (id: string) =>
              stories.find((story: Story) => story.id === id) as Story
          )}
        />
        <StoriesColumn
          columnId="started"
          stories={columns.started.ids.map(
            (id: string) =>
              stories.find((story: Story) => story.id === id) as Story
          )}
        />
        <StoriesColumn
          columnId="done"
          stories={columns.done.ids.map(
            (id: string) =>
              stories.find((story: Story) => story.id === id) as Story
          )}
        />
      </div>
    </DragDropContext>
  );
};

export default StoriesColumns;
