import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ParallelTestExecution = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Advanced/TestOptimization/ParallelTestExecution';

  return (
    <>
      <PageLayout>
        <PageTitle title="Parallel Test Execution" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ParallelTestExecution;
