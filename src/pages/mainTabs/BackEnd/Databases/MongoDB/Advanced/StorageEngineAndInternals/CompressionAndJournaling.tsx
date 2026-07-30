import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CompressionAndJournaling = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/StorageEngineAndInternals/CompressionAndJournaling';

  return (
    <>
      <PageLayout>
        <PageTitle title="Compression & Journaling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CompressionAndJournaling;
