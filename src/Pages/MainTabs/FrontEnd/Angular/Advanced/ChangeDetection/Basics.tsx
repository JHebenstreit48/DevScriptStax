import PageLayout from "@/Components/NavigationUI/PageLayout";
import Header from "@/Components/Shared/Header/Header";
import Notes from "@/Components/PageComponents/Notes/Notes";

const CDBasics = () => {
  const markdownFilePath =
    "FrontEndNotes/AngularNotes/Advanced/ChangeDetection/Basics";

  return (
    <>
      <PageLayout>
        <Header text="Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CDBasics;
