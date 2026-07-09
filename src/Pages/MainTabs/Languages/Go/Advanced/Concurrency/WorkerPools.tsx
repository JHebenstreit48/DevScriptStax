import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WorkerPools = () => {
  const markdownFilePath = 'Languages/Go/Advanced/Concurrency/WorkerPools';

  return (
    <>
      <PageLayout>
        <PageTitle title="Worker Pools" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WorkerPools;
