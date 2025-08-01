import PageLayout from "@/Components/NavigationUI/PageLayout";
import Header from "@/Components/Shared/Header/Header";
import Notes from "@/Components/PageComponents/Notes/Notes";

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
