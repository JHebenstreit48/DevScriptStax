import PageLayout from "@/Components/NavigationUI/PageLayout";
import Notes from "@/Components/PageComponents/Notes/NotesRendering/Notes";
import Header from "@/Components/Shared/Header";

const Structure = () => {
  const markdownFilePath =
    "FrontEndNotes/AngularNotes/AngularBasics/ProjectStructure/Structure";

  return (
    <>
      <PageLayout>
        <Header text="Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Structure;