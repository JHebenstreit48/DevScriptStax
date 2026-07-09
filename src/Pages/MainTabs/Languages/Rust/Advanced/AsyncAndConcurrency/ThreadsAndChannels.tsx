import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ThreadsAndChannels = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/AsyncAndConcurrency/ThreadsAndChannels';

  return (
    <>
      <PageLayout>
        <PageTitle title="Threads & Channels" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ThreadsAndChannels;
