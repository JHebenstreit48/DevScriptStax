import PageLayout from "@/Components/NavigationUI/PageLayout";
import Header from "@/Components/Shared/Header/Header";
import Notes from "@/Components/PageComponents/Notes/Notes";

const PathAliases = () => {
  const markdownFilePath =
    "FrontEndNotes/AngularNotes/Advanced/TypeScriptIntegration/PathAliases";

  return (
    <>
      <PageLayout>
        <Header text="Path Aliases" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PathAliases;