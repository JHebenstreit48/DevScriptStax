import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WorkersThreadsAndConcurrency = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Advanced/PerformanceAndHardening/WorkersThreadsAndConcurrency';

  return (
    <>
      <PageLayout>
        <PageTitle title="Workers, Threads & Concurrency" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WorkersThreadsAndConcurrency;
