import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WorkerThreads = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Advanced/ConcurrencyAndProcesses/WorkerThreads';

  return (
    <>
      <PageLayout>
        <PageTitle title="Worker Threads" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WorkerThreads;
