import PageLayout from "@/Components/NavigationUI/PageLayout";
import Header from "@/Components/Shared/Header/Header";
import Notes from "@/Components/PageComponents/Notes/Notes";

const Optimizing = () => {
  const markdownFilePath =
    "FrontEndNotes/AngularNotes/Advanced/ChangeDetection/Optimizing";

  return (
    <>
      <PageLayout>
        <Header text="Optimizing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Optimizing;
