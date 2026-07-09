import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const StreamsBasics = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Basics/FilesAndStreams/StreamsBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Streams Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StreamsBasics;
