import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
