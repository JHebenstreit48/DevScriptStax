import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
