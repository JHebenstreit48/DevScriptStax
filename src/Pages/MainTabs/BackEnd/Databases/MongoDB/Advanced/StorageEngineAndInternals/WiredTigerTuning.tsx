import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
