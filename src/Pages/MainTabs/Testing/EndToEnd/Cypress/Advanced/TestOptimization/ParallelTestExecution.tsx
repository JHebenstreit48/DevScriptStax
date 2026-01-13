import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ParallelTestExecution = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Advanced/TestOptimization/ParallelTestExecution';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Parallel Test Execution" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ParallelTestExecution;
