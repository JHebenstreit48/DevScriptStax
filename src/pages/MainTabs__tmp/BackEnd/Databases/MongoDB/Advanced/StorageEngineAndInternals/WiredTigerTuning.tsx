import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WiredTigerTuning = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/StorageEngineAndInternals/WiredTigerTuning';

  return (
    <>
      <PageLayout>
        <PageTitle title="WiredTiger Tuning" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WiredTigerTuning;
