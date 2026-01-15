import PageLayout from "@/Components/NavigationUI/PageLayout";
import Header from "@/Components/Shared/Header/Header";
import Notes from "@/Components/PageComponents/Notes/Notes";

const ReusableDesign = () => {
  const markdownFilePath =
    "FrontEnd/Angular/Basics/CoreConcepts/Components/ReusableDesign";

  return (
    <>
      <PageLayout>
        <Header />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReusableDesign;