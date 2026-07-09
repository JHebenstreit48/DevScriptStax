import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Streams = () => {
  const markdownFilePath = 'Languages/Dart/Advanced/AsyncAndStreams/Streams';

  return (
    <>
      <PageLayout>
        <PageTitle title="Streams" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Streams;
