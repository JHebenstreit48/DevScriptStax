import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BackupAndSync = () => {
  const markdownFilePath = 'Tools/APITools/Insomnia/Advanced/Portability/BackupAndSync';

  return (
    <>
      <PageLayout>
        <PageTitle title="Backup & Sync" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BackupAndSync;
