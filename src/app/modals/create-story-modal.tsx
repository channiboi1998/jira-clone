"use client";

import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import CreateStoryForm from "../create-story-form";

const CreateStoryModal = () => {
  return (
    <Dialog
      className="bg-gray-500/50 fixed top-0 left-0 h-screen w-screen z-50 flex flex-col items-center justify-center"
      open={true}
      onClose={() => console.log("close")}
    >
      <Dialog.Panel className="relative shadow-lg rounded-sm bg-white max-h-[70vh] w-[90%] max-w-[912px] overflow-auto">
        <div className="border-b p-5 flex flex-row justify-between items-center">
          <h3 className="text-xl">Create story</h3>
          <XMarkIcon className="h-6 w-6" />
        </div>
        <CreateStoryForm />
      </Dialog.Panel>
    </Dialog>
  );
};

export default CreateStoryModal;
