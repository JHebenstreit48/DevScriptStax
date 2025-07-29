import PageLayout from "@/Components/NavigationUI/PageLayout";
import Header from "@/Components/Shared/Header/Header";
import Notes from "@/Components/PageComponents/Notes/Notes";

const Communication = () => {
  const markdownFilePath =
    "FrontEndNotes/AngularNotes/Basics/CoreConcepts/AngComponents/Communication";

  return (
    <>
      <PageLayout>
        <Header text="Component Communication" size="md"/>
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Communication;
