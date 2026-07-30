import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PerformanceOptimization = () => {
  const markdownFilePath = 'FrontEnd/Vue/Advanced/BestPractices/PerformanceOptimization';

  return (
    <>
      <PageLayout>
        <PageTitle title="Performance Optimization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PerformanceOptimization;
