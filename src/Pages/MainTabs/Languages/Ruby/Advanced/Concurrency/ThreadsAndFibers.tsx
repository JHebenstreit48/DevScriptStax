import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ThreadsAndFibers = () => {
  const markdownFilePath = 'Languages/Ruby/Advanced/Concurrency/ThreadsAndFibers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Threads & Fibers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ThreadsAndFibers;
