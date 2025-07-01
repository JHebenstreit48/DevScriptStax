import PageLayout from "@/Components/NavigationUI/PageLayout";
import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRendering/Notes";

const AngularIntro = () => {
  const markdownFilePath =
    "FrontEndNotes/AngularNotes/AngularBasics/GettingStarted/Introduction";

  return (
    <>
      <PageLayout>
        <Header text="Introduction" size="md" />
        <Notes filePath={markdownFilePath}  />
      </PageLayout>
    </>
  );
};

export default AngularIntro;
