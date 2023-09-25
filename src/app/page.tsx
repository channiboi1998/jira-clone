import IssueColumns from "./issue-columns";
import SearchIssueForm from "./search-issue-form";

export default function Home() {
  return (
    <main className="flex flex-row">
      {/* Sidebar */}
      <section className="h-screen hidden md:block w-48 p-5 bg-gray-300">
        <p>[sidebar]</p>
      </section>
      <section className="h-screen flex-1 flex flex-col justify-between">
        {/* Page Content */}
        <div className="p-5">
          <h1 className="text-3xl mb-2 text-center md:text-left">Jira Clone</h1>
          <div className="flex flex-col md:flex-row items-center">
            <p className="text-xs text-center md:text-left md:max-w-xl">
              Cloning enables you to duplicate an issue within the same project,
              copying over most information from an issue like the Summary and
              Description fields and more.
            </p>
            {/* Search Form */}
            <SearchIssueForm />
          </div>
        </div>
        {/* Content */}
        <div className="flex-1 flex flex-col p-5 pt-0 overflow-x-auto overflow-y-auto">
          {/* Board Page: Column Headings */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gray-100 uppercase p-3 text-xs">Open</div>
            <div className="bg-gray-100 uppercase p-3 text-xs">Started</div>
            <div className="bg-gray-100 uppercase p-3 text-xs">Done</div>
          </div>
          <IssueColumns />
        </div>
      </section>
    </main>
  );
}
