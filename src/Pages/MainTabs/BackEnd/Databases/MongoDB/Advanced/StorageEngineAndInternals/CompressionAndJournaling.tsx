import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CompressionAndJournaling = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/StorageEngineAndInternals/CompressionAndJournaling';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Compression & Journaling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CompressionAndJournaling;
