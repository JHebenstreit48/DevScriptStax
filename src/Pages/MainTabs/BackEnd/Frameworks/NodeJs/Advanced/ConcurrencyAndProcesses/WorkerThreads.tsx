import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WorkerThreads = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Advanced/ConcurrencyAndProcesses/WorkerThreads';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Worker Threads" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WorkerThreads;
