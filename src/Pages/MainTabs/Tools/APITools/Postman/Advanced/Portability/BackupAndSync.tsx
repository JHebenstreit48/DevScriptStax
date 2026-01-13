import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BackupAndSync = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Advanced/Portability/BackupAndSync';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Backup & Sync" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BackupAndSync;
