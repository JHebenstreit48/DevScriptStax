import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
