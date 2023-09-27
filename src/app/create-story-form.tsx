import React from "react";

const CreateStoryForm = () => {
  return (
    <form>
      <div className="max-h-[50vh] min-h-[400px] overflow-y-auto p-5">
        {/* Title */}
        <input
          className="text-3xl w-full mb-2 focus:outline-none border-b py-1"
          maxLength={40}
          placeholder="Input the story's name"
        />
        {/* Short Description */}
        <div className="flex flex-col py-2">
          <label className="text-xs mb-1">Short description</label>
          <input
            className="focus:outline-none text-sm border-b py-1"
            placeholder="Write a brief description"
            maxLength={40}
          />
        </div>
        {/* Long Description */}
        <div className="flex flex-col py-1">
          <label className="text-xs mb-1">Description</label>
          <textarea
            className="w-full border-b text-sm focus:outline-none h-28 py-2"
            placeholder="Write the full-length narrative"
          ></textarea>
        </div>
      </div>
      {/* Form Actions */}
      <div className="border-t p-5 flex flex-row justify-end space-x-8">
        <button className="text-sm">Cancel</button>
        <button className="text-sm bg-blue-900 font-semibold px-10 py-2 text-white rounded-sm">
          Save
        </button>
      </div>
    </form>
  );
};

export default CreateStoryForm;
