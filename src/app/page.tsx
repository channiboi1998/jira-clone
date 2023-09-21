"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <main className="flex flex-row">
      {/* Sidebar */}
      <section className="h-screen hidden md:block w-48 bg-gray-300">
        <p>sidebar</p>
      </section>
      <section className="h-screen flex-1 flex flex-col justify-between">
        {/* Page Content */}
        <div className="p-5">
          {/* Board Page: Heading */}
          <h1 className="text-3xl mb-2">Jira Clone</h1>
          <div className="flex flex-row items-center">
            <p className="text-xs max-w-xl">
              Cloning enables you to duplicate an issue within the same project,
              copying over most information from an issue like the Summary and
              Description fields and more.
            </p>
            {/* Search Form */}
            <form>
              <div className="border flex flex-row items-center p-2 rounded-lg space-x-2">
                <MagnifyingGlassIcon className="h-4 w-4" />
                <input
                  className="text-xs flex-1 focus:outline-none"
                  placeholder="Search this board"
                />
              </div>
            </form>
          </div>
        </div>
        {/* Board Page: Content */}
        <div className="flex-1 overflow-x-auto overflow-y-auto">
          <div className="h-[2000px] bg-green-100">content</div>
        </div>
      </section>
    </main>
  );
}
