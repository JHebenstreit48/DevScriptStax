import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LogicalVsPhysicalBackups = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Tools/BackupAndRestore/LogicalVsPhysicalBackups';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Logical vs Physical Backups" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LogicalVsPhysicalBackups;
