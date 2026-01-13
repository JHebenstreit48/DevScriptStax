import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SyncAndConflictResolution = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Advanced/OfflinePatterns/SyncAndConflictResolution';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Sync & Conflict Resolution" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SyncAndConflictResolution;
