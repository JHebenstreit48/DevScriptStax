import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const PerformanceOptim = () => {
  const markdownFilePath =
    'FrontEndNotes/HTMLNotes/Advanced/BestPractices/PerformanceOptim';

  return (
    <>
      <PageLayout>
        <Header text="Performance Optimization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PerformanceOptim;
