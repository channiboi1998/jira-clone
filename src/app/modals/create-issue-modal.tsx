"use client";

import { Dialog } from "@headlessui/react";
import React from "react";

const CreateIssueModal = () => {
  return (
    <Dialog
      className="bg-gray-500/50 fixed top-0 left-0 h-screen w-screen z-50 flex flex-col items-center justify-center"
      open={false}
      onClose={() => console.log("close")}
    >
      <Dialog.Panel className="bg-white max-h-[80vh] overflow-auto">
        <Dialog.Title>New Story</Dialog.Title>
        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>
        <div className="h-[2000px]"></div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default CreateIssueModal;
