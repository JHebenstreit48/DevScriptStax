import PageLayout from "@/Components/NavigationUI/PageLayout";
import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRendering/Notes";

const CreateRun = () => {
  const markdownFilePath =
    "FrontEndNotes/AngularNotes/Basics/Fundamentals/CreatingRunning";

  return (
    <>
      <PageLayout>
        <Header text="Creating/Running App" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CreateRun;
