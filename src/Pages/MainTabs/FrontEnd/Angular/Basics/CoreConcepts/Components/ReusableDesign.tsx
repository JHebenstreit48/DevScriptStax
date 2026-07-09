import PageLayout from "@/Components/NavigationUI/PageLayout";
import Notes from "@/Components/PageComponents/Notes/Notes";

const ReusableDesign = () => {
  const markdownFilePath =
    "FrontEnd/Angular/Basics/CoreConcepts/Components/ReusableDesign";

  return (
    <>
      <PageLayout>
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReusableDesign;