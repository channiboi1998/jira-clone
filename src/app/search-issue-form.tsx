import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React from "react";

const SearchIssueForm = () => {
  return (
    <form className="flex flex-col w-full md:w-auto items-end flex-1 pt-5 md:pt-0">
      <div className="border w-full md:w-auto flex flex-row items-center p-2 rounded-lg space-x-2">
        <MagnifyingGlassIcon className="h-5 w-5" />
        <input
          className="text-sm p-1 flex-1 focus:outline-none"
          placeholder="Search this board"
        />
      </div>
    </form>
  );
};

export default SearchIssueForm;
