import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HyperLogLogAndStreams = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Basics/DataStructures/HyperLogLogAndStreams';

  return (
    <>
      <PageLayout>
        <PageTitle title="HyperLogLog & Streams" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HyperLogLogAndStreams;
