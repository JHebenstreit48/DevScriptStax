import PageLayout from "@/Components/NavigationUI/PageLayout";
import Notes from "@/Components/PageComponents/Notes/Notes";
import Header from "@/Components/Shared/Header/Header";

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