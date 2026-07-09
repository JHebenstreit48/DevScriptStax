import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
