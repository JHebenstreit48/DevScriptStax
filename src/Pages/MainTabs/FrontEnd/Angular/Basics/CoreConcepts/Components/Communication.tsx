import PageLayout from "@/Components/NavigationUI/PageLayout";
import PageTitle from "@/Components/PageComponents/PageTitle";
import Notes from "@/Components/PageComponents/Notes/Notes";

const Communication = () => {
  const markdownFilePath =
    "FrontEnd/Angular/Basics/CoreConcepts/Components/Communication";

  return (
    <>
      <PageLayout>
        <PageTitle title="Component Communication in Angular" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Communication;
