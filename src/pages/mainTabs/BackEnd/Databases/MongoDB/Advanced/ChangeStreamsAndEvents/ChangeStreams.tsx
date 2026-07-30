import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ChangeStreams = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/ChangeStreamsAndEvents/ChangeStreams';

  return (
    <>
      <PageLayout>
        <PageTitle title="Change Streams" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ChangeStreams;
