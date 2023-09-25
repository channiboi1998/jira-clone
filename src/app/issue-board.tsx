import React from "react";
import IssueColumns from "./issue-columns";

const IssueBoard = () => {
  return (
    <div>
      {/* Board Headings */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-gray-100 uppercase p-3 text-xs">Open</div>
        <div className="bg-gray-100 uppercase p-3 text-xs">Started</div>
        <div className="bg-gray-100 uppercase p-3 text-xs">Done</div>
      </div>
      {/* Board Content */}
      <IssueColumns />
    </div>
  );
};

export default IssueBoard;
