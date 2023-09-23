import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import OpenIssueColumn from "./open-issue-column";

export default function Home() {
  return (
    <main className="flex flex-row">
      {/* Sidebar */}
      <section className="h-screen hidden md:block w-48 p-5 bg-gray-300">
        <p>sidebar</p>
      </section>
      <section className="h-screen flex-1 flex flex-col justify-between">
        {/* Page Content */}
        <div className="p-5">
          {/* Board Page: Heading */}
          <h1 className="text-3xl mb-2 text-center md:text-left">Jira Clone</h1>
          <div className="flex flex-col md:flex-row items-center">
            <p className="text-xs text-center md:text-left md:max-w-xl">
              Cloning enables you to duplicate an issue within the same project,
              copying over most information from an issue like the Summary and
              Description fields and more.
            </p>
            {/* Search Form */}
            <form className="flex flex-col w-full md:w-auto items-end flex-1 pt-5 md:pt-0">
              <div className="border w-full md:w-auto flex flex-row items-center p-2 rounded-lg space-x-2">
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
        <div className="flex-1 flex flex-col p-5 pt-0 overflow-x-auto overflow-y-auto">
          {/* Board Page: Column Headings */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gray-100 uppercase p-3 text-xs">Open</div>
            <div className="bg-gray-100 uppercase p-3 text-xs">Started</div>
            <div className="bg-gray-100 uppercase p-3 text-xs">Done</div>
          </div>
          {/* Board Page: Columns */}
          <div className="flex-1 grid grid-cols-3 gap-3 pt-3">
            {/* Board Page: Open Column */}
            <OpenIssueColumn />
          </div>
        </div>
      </section>
    </main>
  );
}
