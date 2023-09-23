"use client";

import { DragDropContext } from "@hello-pangea/dnd";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const IssueBoard = ({ children }: Props) => {
  return (
    <DragDropContext onDragEnd={() => console.log("drag end")}>
      <div className="flex-1 grid grid-cols-3 gap-3 pt-3">{children}</div>
    </DragDropContext>
  );
};

export default IssueBoard;
