import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SyncAndConflictResolution = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Advanced/OfflinePatterns/SyncAndConflictResolution';

  return (
    <>
      <PageLayout>
        <PageTitle title="Sync & Conflict Resolution" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SyncAndConflictResolution;
