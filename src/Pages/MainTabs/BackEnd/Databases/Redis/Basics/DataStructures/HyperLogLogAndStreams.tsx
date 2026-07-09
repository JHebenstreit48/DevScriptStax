import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
