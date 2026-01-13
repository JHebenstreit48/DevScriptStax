import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WorkerPools = () => {
  const markdownFilePath = 'Languages/Go/Advanced/Concurrency/WorkerPools';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Worker Pools" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WorkerPools;
