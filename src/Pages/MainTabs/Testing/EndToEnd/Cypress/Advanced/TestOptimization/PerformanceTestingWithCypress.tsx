import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PerformanceTestingWithCypress = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Advanced/TestOptimization/PerformanceTestingWithCypress';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Performance Testing with Cypress" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PerformanceTestingWithCypress;
