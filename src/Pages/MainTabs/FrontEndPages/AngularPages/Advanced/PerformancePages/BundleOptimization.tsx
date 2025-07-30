import PageLayout from "@/Components/NavigationUI/PageLayout";
import Header from "@/Components/Shared/Header/Header";
import Notes from "@/Components/PageComponents/Notes/Notes";

const BundleOptimization = () => {
  const markdownFilePath =
    "FrontEndNotes/AngularNotes/Advanced/PerformanceNotes/BundleOptimization";

  return (
    <>
      <PageLayout>
        <Header text="Bundle Optimization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BundleOptimization;
