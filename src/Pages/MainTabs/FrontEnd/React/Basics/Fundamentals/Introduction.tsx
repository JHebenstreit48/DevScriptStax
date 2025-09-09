import PageLayout from "@/Components/NavigationUI/PageLayout";
import Header from "@/Components/Shared/Header/Header";
import PageTitle from "@/Components/PageComponents/PageTitle";
import Notes from "@/Components/PageComponents/Notes/Notes";

const ReactIntro = () => {
  const markdownFilePath =
    "FrontEndNotes/ReactNotes/Basics/Fundamentals/Introduction";

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Introduction to React" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReactIntro;
