import PageLayout from "@/Components/NavigationUI/PageLayout";
import Header from "@/Components/Shared/Header/Header";
import PageTitle from "@/Components/PageComponents/PageTitle";
import Notes from "@/Components/PageComponents/Notes/Notes";

const Introduction = () => {
  const markdownFilePath =
    'FrontEndNotes/AngularNotes/Basics/Fundamentals/Introduction';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Introduction to Angular" />
        <Notes filePath={markdownFilePath}  />
      </PageLayout>
    </>
  );
};

export default Introduction;