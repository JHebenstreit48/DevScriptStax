import PageLayout from "@/Components/NavigationUI/PageLayout";
import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRendering/Notes";

const CLI = () => {
  const markdownFilePath =
    "FrontEndNotes/AngularNotes/AngularBasics/GettingStarted/CLI";

  return (
    <>
      <PageLayout>
        <Header text="Angular CLI" />
        <Notes
          filePath={markdownFilePath}
          markdownContent="markdownContentCode"
        />
      </PageLayout>
    </>
  );
};

export default CLI;
