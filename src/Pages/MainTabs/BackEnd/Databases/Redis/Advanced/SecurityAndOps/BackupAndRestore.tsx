import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BackupAndRestore = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Advanced/SecurityAndOps/BackupAndRestore';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Backup & Restore" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BackupAndRestore;
