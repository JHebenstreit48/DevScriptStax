import PageLayout from "@/Components/NavigationUI/PageLayout";
import Notes from "@/Components/PageComponents/Notes/NotesRendering/Notes";
import Header from "@/Components/Shared/Header";

const NamingConventions = () => {
  const markdownFilePath =
    "FrontEndNotes/AngularNotes/AngularBasics/ProjectStructure/FolderFileNaming";

  return (
    <>
      <PageLayout>
        <Header text="Naming Conventions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NamingConventions;
