import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
