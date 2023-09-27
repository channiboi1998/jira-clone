import StoreProvider from "./store-provider";
import SearchStoriesForm from "./search-stories-form";
import StoriesBoard from "./stories-board";
import CreateStoryModal from "./modals/create-story-modal";

export default function Home() {
  return (
    <>
      <StoreProvider>
        <CreateStoryModal />
        <main className="flex flex-row">
          {/* Sidebar */}
          <section className="h-screen hidden md:block w-48 p-5 bg-gray-300">
            <p>[sidebar]</p>
          </section>
          <section className="h-screen flex-1 flex flex-col justify-between">
            <div className="p-5">
              <h1 className="text-3xl mb-2 text-center md:text-left">
                Jira Clone
              </h1>
              <div className="flex flex-col md:flex-row items-center">
                <p className="text-xs text-center md:text-left md:max-w-xl">
                  Cloning enables you to duplicate an issue within the same
                  project, copying over most information from an issue like the
                  Summary and Description fields and more.
                </p>
                <SearchStoriesForm />
              </div>
            </div>
            <StoriesBoard />
          </section>
        </main>
      </StoreProvider>
    </>
  );
}
