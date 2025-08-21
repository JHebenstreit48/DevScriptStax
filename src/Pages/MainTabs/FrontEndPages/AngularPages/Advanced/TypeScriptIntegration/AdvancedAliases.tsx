import PageLayout from "@/Components/NavigationUI/PageLayout";
import Header from "@/Components/Shared/Header/Header";
import PageTitle from "@/Components/PageComponents/PageTitle";
import Notes from "@/Components/PageComponents/Notes/Notes";

const AdvancedAliases = () => {
  const markdownFilePath =
    "FrontEndNotes/AngularNotes/Advanced/TypeScriptIntegration/AdvancedAliases";

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Advanced Aliases in Angular" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AdvancedAliases;