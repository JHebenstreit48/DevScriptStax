import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
