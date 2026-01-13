import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ChangeStreams = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/ChangeStreamsAndEvents/ChangeStreams';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Change Streams" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ChangeStreams;
