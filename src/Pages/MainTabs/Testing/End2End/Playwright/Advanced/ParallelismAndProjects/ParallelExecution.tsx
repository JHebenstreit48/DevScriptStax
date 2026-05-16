import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ParallelExecution = () => {
  const markdownFilePath = 'Testing/EndToEnd/Playwright/Advanced/ParallelismAndProjects/ParallelExecution';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Parallel Execution" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ParallelExecution;
