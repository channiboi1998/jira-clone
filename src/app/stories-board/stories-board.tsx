import React from "react";
import StoriesColumns from "./stories-columns";

const StoriesBoard = () => {
  return (
    <div className="flex-1 flex flex-col p-5 pt-0 overflow-x-auto overflow-y-auto">
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-gray-100 uppercase p-3 text-xs">Open</div>
        <div className="bg-gray-100 uppercase p-3 text-xs">Started</div>
        <div className="bg-gray-100 uppercase p-3 text-xs">Done</div>
      </div>
      <StoriesColumns />
    </div>
  );
};

export default StoriesBoard;
