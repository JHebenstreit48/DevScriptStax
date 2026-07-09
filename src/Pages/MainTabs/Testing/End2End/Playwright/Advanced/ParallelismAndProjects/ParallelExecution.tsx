import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ParallelExecution = () => {
  const markdownFilePath = 'Testing/EndToEnd/Playwright/Advanced/ParallelismAndProjects/ParallelExecution';

  return (
    <>
      <PageLayout>
        <PageTitle title="Parallel Execution" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ParallelExecution;
