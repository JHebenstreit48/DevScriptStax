import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Streams = () => {
  const markdownFilePath = 'Languages/Dart/Advanced/AsyncAndStreams/Streams';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Streams" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Streams;
