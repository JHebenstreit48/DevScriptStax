import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StreamsAndBufio = () => {
  const markdownFilePath = 'Languages/Go/Intermediate/DataAndIO/StreamsAndBufio';

  return (
    <>
      <PageLayout>
        <PageTitle title="Streams & Bufio" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StreamsAndBufio;
