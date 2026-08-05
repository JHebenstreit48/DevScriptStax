import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PerformanceTestingWithCypress = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Advanced/TestOptimization/PerformanceTestingWithCypress';

  return (
    <>
      <PageLayout>
        <PageTitle title="Performance Testing with Cypress" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PerformanceTestingWithCypress;
