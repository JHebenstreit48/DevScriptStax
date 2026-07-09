import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
